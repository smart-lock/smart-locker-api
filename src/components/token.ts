import { ILifecycle } from './lifecycle';
import * as jwt from 'jsonwebtoken'
import { IConfigComponent } from './config'
import { IRedisComponent } from './redis';
import { IClockComponent } from './clock';
import { IS3Component } from '~/components/s3';


const priv = `-----BEGIN RSA PRIVATE KEY-----
MIIEogIBAAKCAQEApViUU4TSgnNbe3Iy7e5CD+uwfOYvdACiQTph7S1o/zkjERUw
b5vIf5d4YzB+98ChGJhy+OqkrSIF5bVgEldNwpfUGkOO+BsE6KUJfVGJTbHbJK+3
bpQ1LSnv+dII+d+lvx/TbSsWzfdMMnT06OJ4jjgB0atU1U5PhydB5wuMZWBbc1JX
xAyDwHbd2a/nOxV0tYWzX4PauQPZPX8w1e+IiOL+IbQIK3veIs93FCY3YePo798y
26MyAGVdejn2V/ZRT85ZmDqTjISDYmMyfmXUTlLvpuQBhL20eLxr58xmoNlHWBgH
UAuBEcuuVdA1JgM+XVZr/IL9bZ7iPx/F15uFfQIDAQABAoIBAGBr+YOC72fXcb/Z
Zs3NpYS3QyJy8bVKMVSsgTLYymQbo9Fwc+CCDjgp0rC1NTWxhcBcFqAF5aZ5Mss0
LCRF+TjDZZMzVopk50XsCE6mX9WJJGyOc//uOdxuml0rGMTuoS+FlbwR5qiR0EOU
ZMXyW69EBfuJWF1T35jHUe00lNkAmgNtkIYkEFToe0Ac15Q5jJaNPcqwpO7wUhUY
/1ArUlKiJjmW3tl+Y67Oe3yoQYE2O9cC33xhBpcP9Z23pbC496C9I43bIxbVMS4Y
KBvrJvHikkesw35adnAETb9fS7lqdNw9V0Lt9h0YVVFv5PT0RyVLBVDnprEfoB1T
hStMmFkCgYEA0/fqQeYFUBX6M4mTxuC/b4V+5+YIvIGtFabGROllWz9qr7V8pV4y
1YjwX+YwlaX6trUMzKGsfSt7LmFRM5rqIZ8Wsh41uFaC/4yA7kTNsl7TYfMmHscc
KTzVTjgAvr+V5gujLF2l9tC1HKH9M8gytM6ncJvnrClIrNTIBCmVYbMCgYEAx7Ff
MLP/k2uENOYuNtNa/Cu9nnmcqoz9ZnwVDH9MOgcV4zI9rfSmd/X8p8b61CLvLXPA
7TDq22n6RN6LTvJ7r4017kWvsyC62LxoU8PJmeyKcaye/BtbBIaSXoQg1sAr/MOi
IGF9BIiOp9J30un6M2e84j7Tqs5gJAv27zJcBA8CgYBN0j5KNWYL8hWq6D6+DHOc
QRnHj/fzJXTjdxhh4oKYzp6fpfT+TahCJ4WA3+VEe+yhObVaR50pU1ZlP8ttM9nz
wBG4EUlNxU1Q/0eyssYGT7QxyPBc6mMXbMMvdXYokfQ5wloFBtjQ1e04duycH0sm
gJyOxl53Ia0R7wkEJjQ26wKBgGl5BtUbjVcZB7hFB43PrpPYqoukohn24/SYfymd
pu5TRb09kRRrTu23kF4xm9QmK3wvUmw1VSbU3+o2PRBSxP9hL2YNipKrK+VEBjqQ
A9B3/luyGDsCW92VEoQ3d3zV/aXA0sYVl8moMujzInTVPmCeX0aEdpoV7PO9Gg0W
5UEDAoGAG9HV9/pSeEKWSlGauNpujrDBMZALTJ4asz0F20miMT1ssQgDlR2Aa1OD
hMZmCigVo4cjPS+Ns9O5/mFKzDnh0sWLraSRveFqkrj6ks+GJk5HxaTIOM6IwDDX
6RXqaQP4CbTscneV0HvylT9q7jnObLj/YRXtrmZnp+x62zlOei0=
-----END RSA PRIVATE KEY-----`

const pub = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApViUU4TSgnNbe3Iy7e5C
D+uwfOYvdACiQTph7S1o/zkjERUwb5vIf5d4YzB+98ChGJhy+OqkrSIF5bVgEldN
wpfUGkOO+BsE6KUJfVGJTbHbJK+3bpQ1LSnv+dII+d+lvx/TbSsWzfdMMnT06OJ4
jjgB0atU1U5PhydB5wuMZWBbc1JXxAyDwHbd2a/nOxV0tYWzX4PauQPZPX8w1e+I
iOL+IbQIK3veIs93FCY3YePo798y26MyAGVdejn2V/ZRT85ZmDqTjISDYmMyfmXU
TlLvpuQBhL20eLxr58xmoNlHWBgHUAuBEcuuVdA1JgM+XVZr/IL9bZ7iPx/F15uF
fQIDAQAB
-----END PUBLIC KEY-----`

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
    const privateKey = priv //await this.s3.getObject(tokenConfig.bucketName, tokenConfig.privateKeyPath)
    const publicKey = pub //await this.s3.getObject(tokenConfig.bucketName, tokenConfig.publicKeyPath)
    this.privateKey = privateKey
    this.publicKey = publicKey
  }

  public async stop() {
    // noop
    this.privateKey = null
    this.publicKey = null
  }
}