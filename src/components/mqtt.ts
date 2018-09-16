import { ILifecycle } from './lifecycle'
import * as MQTT from 'mqtt'
import { IConfigComponent } from './config'
import * as mqttRegex from 'mqtt-regex'
import { Maybe } from '~/common/types'

export interface IMQTTComponent {
  publish: (topic: string, message: string) => Promise<MQTT.Packet>
}

type MQTTHandlerFn = (topic: string, params: object, data: string, components: any) => Promise<void>

export interface IMQTTConfig {
  host: string
  protocol: string
  sslPort: number
  user: string
  password: string
}

export interface IMQTTHandler {
  handler: MQTTHandlerFn,
  regex?: any,
}

export interface IMQTTHandlerTable {
  [topicRoute: string]: IMQTTHandler
}
export interface IHandlerCacheTable {
  [topicName: string]: IMQTTHandler
}

export class MQTTComponent implements ILifecycle {
  public client: MQTT.MqttClient
  public handlerTable: IMQTTHandlerTable
  private handlerCache: IHandlerCacheTable

  public start(deps: any) {
    this.handlerCache = {}
    return new Promise((resolve, reject) => {
      const config: IConfigComponent<{mqtt: IMQTTConfig}> = deps.config
      const mqttConfig = config.getConfig().mqtt
      const client = MQTT.connect(null, {
        host: mqttConfig.host,
        protocol: 'ssl',
        port: mqttConfig.sslPort,
        username: mqttConfig.user,
        password: mqttConfig.password,
      })
      this.client = client

      client.on('connect', async () => {
        await this.setupListeners(deps)
        resolve()
      })
      client.on('error', () => {
        reject()
      })
    })
  }

  constructor(handlerTable: IMQTTHandlerTable) {
    this.handlerTable = handlerTable
  }

  public async stop() {
    this.handlerCache = {}
    if (this.client) {
      this.client.end()
    }
  }

  public async publish(topic: string, message: string, options: MQTT.IClientPublishOptions) {
    return new Promise((resolve, reject) => {
      this.client.publish(topic, message, options, (err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)
      })
    })
  }

  private async subscribe(topicName, options?: MQTT.IClientSubscribeOptions) {
    return new Promise((resolve, reject) => {
      if (options) {
        this.client.subscribe(topicName, options, (err, data) => {
          if (err) {
            return reject(err)
          }
          resolve(data)
        })
        return
      }

      this.client.subscribe(topicName, (err, data) => {
        if (err) {
          return reject(err)
        }
        resolve(data)
      })
    })
  }

  private getHandlerFromCache(topicName: string): Maybe<IMQTTHandler> {
    return this.handlerCache[topicName]
  }

  private getHandlerFromHandlerTable(topicName: string): Maybe<IMQTTHandler> {
    for (const topicRoute of Object.keys(this.handlerTable)) {
      const regex = this.handlerTable[topicRoute].regex
      const results = regex.exec(topicName)
      if (results) {
        return this.handlerTable[topicRoute]
      }
    }
    return undefined
  }

  private callHandler(handler: IMQTTHandler, topicName: string, message: Buffer, components: any) {
    const params = handler.regex.exec(topicName)
    handler.handler(topicName, params, message.toString(), components)
  }
  private cacheHandler(topicName: string, handler: IMQTTHandler) {
    this.handlerCache[topicName] = handler
  }
  private async setupListeners(components) {
    this.client.on('message', (topic, message) => {
      const handlerFromCache = this.getHandlerFromCache(topic)

      if (!handlerFromCache) {
        console.log('cache miss')
        const handlerFromTable = this.getHandlerFromHandlerTable(topic)
        if (!handlerFromTable) {
          console.log(`No handler found for topic ${topic}`)
          return
        }

        this.callHandler(handlerFromTable, topic, message, components)
        this.cacheHandler(topic, handlerFromTable)
        return
      }
      console.log('cache hit')
      this.callHandler(handlerFromCache, topic, message, components)
    })

    for (const topicRoute of Object.keys(this.handlerTable)) {
      this.handlerTable[topicRoute].regex = mqttRegex(topicRoute)
      const topicName = this.handlerTable[topicRoute].regex.topic
      await this.subscribe(topicName)
    }
  }
}
