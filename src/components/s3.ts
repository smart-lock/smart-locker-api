import * as AWS from 'aws-sdk'
import { Body, ObjectCannedACL } from 'aws-sdk/clients/s3';
import { ILifecycle } from '~/components/lifecycle';

export interface IS3Component {
  getObject(bucketName: string, path: string): Promise<AWS.S3.Body>
  upload(params: IUploadParams): Promise<IUploadResponse>
  getSignedUrl(operation: string, params: IGetSignedUrlParams): string
}

export interface IUploadResponse {
  location: string
}

export interface IUploadParams {
  bucketName: string
  body: Body
  key: string
  acl: ObjectCannedACL
}

export interface IGetSignedUrlParams {
  bucketName: string,
  key: string,
  contentType: string,
  expires: number,
}
export class S3Component implements IS3Component, ILifecycle {
  private s3: AWS.S3
  constructor(s3: AWS.S3) {
    this.s3 = s3
  }
  public start() {
    // noop
  }
  public stop() {
    // noop
  }

  public upload(params: IUploadParams) {
    return this.s3.upload({
      Bucket: params.bucketName,
      Body: params.body,
      Key: params.key,
      ACL: params.acl,
    }).promise()
    .then((data) => ({
      location: data.Location,
    }))
  }

  public async getObject(bucketName: string, path: string) {
    return this.s3.getObject({
      Bucket: bucketName,
      Key: path,
    }).promise()
    .then((data) => data.Body)
  }

  public getSignedUrl(operation: string, params: IGetSignedUrlParams) {
    return this.s3.getSignedUrl(operation, {
      Bucket: params.bucketName,
      Key: params.key,
      ContentType: params.contentType,
      Expires: params.expires,
    })
  }
}