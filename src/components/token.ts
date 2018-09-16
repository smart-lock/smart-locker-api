import { ILifecycle } from './lifecycle';
import * as jwt from 'jsonwebtoken'
import { IConfigComponent } from './config'
import { IRedisComponent } from './redis';
import { IClockComponent } from './clock';
import { IS3Component } from '~/components/s3';

export interface IBasicJWTPayload {
  iat: number,
  exp: number,
  aud: string,
  iss: string,
  sub: string,
}

export interface IBasicAccount {
  id: string
}

export interface ITokenComponentDependencies {
  redis: IRedisComponent,
  config: IConfigComponent<any>,
  s3: IS3Component,
  clock: IClockComponent,
}

export interface ITokenComponent {
  encode(content: object): Promise<string>
  decode<T extends object>(token: string): Promise<T & IBasicJWTPayload>
  validate<T extends object>(token: string): Promise<T & IBasicJWTPayload>
  revokeTokenForSubject(sub: string): Promise<void>
}

export interface ITokenConfig {
  issuer: string
  audience: string
  jwtDuration: string
  publicKeyPath: string
  privateKeyPath: string
  bucketName: string
}
export class TokenComponent implements ILifecycle, ITokenComponent {
  private config: IConfigComponent<{token: ITokenConfig}>
  private s3: IS3Component
  private redis: IRedisComponent
  private clock: IClockComponent

  private privateKey: any
  private publicKey: any

  constructor() {
    this.privateKey = null
    this.publicKey = null
  }

  public encode = (content: IBasicAccount) => new Promise<string>((resolve, reject) => {
    const tokenConfig = this.config.getConfig().token
    jwt.sign(content, this.privateKey, {
      algorithm: 'RS256',
      expiresIn: tokenConfig.jwtDuration,
      audience: tokenConfig.audience,
      issuer: tokenConfig.issuer,
      subject: content.id,
    },
      (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
  })

  public revokeTokenForSubject = async (sub: string) => {
    await this.redis.putValue(sub, this.clock.getTimestampSeconds())
  }

  private isSubjectRevoked = async (payload: IBasicJWTPayload): Promise<boolean> => {
    const revokedAt = await this.redis.getValue(payload.sub)
    if (revokedAt == null) { return false }
    return payload.iat < Number(revokedAt)
  }

  public validate = async <T>(token: string) => {
    // Decode already checks for audience, issuer & clockTimestamp
    // So here we just need to check if the token is revoked
    const decoded = await this.decode<T>(token)
    const subjectRevoked = await this.isSubjectRevoked(decoded)
    if (subjectRevoked) {
      throw new Error('RevokedToken')
    }

    return decoded
  }
  public decode = async <T>(token: string) => new Promise<T & IBasicJWTPayload>((resolve, reject) => {
    const tokenConfig = this.config.getConfig().token
    jwt.verify(token, this.publicKey, {
      algorithms: ['RS256'],
      audience: tokenConfig.audience,
      issuer: tokenConfig.issuer,
      clockTimestamp: this.clock.getTimestampSeconds(),
      clockTolerance: 0,
    }, (err, data: any) => {
      if (err) {
        reject(err)
        return
      }
      resolve(data)
    })
  })

  public async start({ config, s3, redis, clock }: ITokenComponentDependencies) {
    this.config = config
    this.s3 = s3
    this.redis = redis
    this.clock = clock
    const tokenConfig = this.config.getConfig().token
    const privateKey = await this.s3.getObject(tokenConfig.bucketName, tokenConfig.privateKeyPath)
    const publicKey = await this.s3.getObject(tokenConfig.bucketName, tokenConfig.publicKeyPath)
    this.privateKey = privateKey
    this.publicKey = publicKey
  }

  public async stop() {
    // noop
    this.privateKey = null
    this.publicKey = null
  }
}