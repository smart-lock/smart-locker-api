import { ConfigComponent, IConfigComponent } from './components/config'
import * as AWS from 'aws-sdk'
import { MQTTComponent, IMQTTConfig } from './components/mqtt'
import { mqttHandlers } from './diplomat/mqtt'
import { IS3Component, S3Component } from '~/components/s3';
import { ITokenComponent, TokenComponent, ITokenConfig } from '~/components/token';
import { ENV } from '~/common/consts';
import { IComponentMap, System } from '~/components/system';
import * as path from 'path'

export interface IConfig {
  devspace: string,
  mqtt: IMQTTConfig,
  token: ITokenConfig
}

export interface IComponents {
  config: IConfigComponent<IConfig>,
  token: ITokenComponent,
  s3: IS3Component
}

const env = process.env.NODE_ENV as ENV || ENV.dev
const configFolder = path.join(__dirname, '../resources')

export const componentMap: IComponentMap = {
  config: {
    instance: new ConfigComponent<IConfig>(env, configFolder),
    dependenciesList: [],
  },
  token: {
    instance: new TokenComponent(),
    dependenciesList: ['s3', 'config'],
  },
  s3: {
    instance: new S3Component(new AWS.S3()),
    dependenciesList: [],
  },
  mqtt: {
    instance: new MQTTComponent(mqttHandlers),
    dependenciesList: ['config'],
  },
}

export const system = new System<IComponents>(componentMap)