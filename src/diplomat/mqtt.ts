import { IMQTTHandlerTable } from '../components/mqtt'
import { IComponents } from '../system'

// 1.123:2.321:3.123:4.321:5.123:1010:6.321
// uuid:md5:version:versionString:1:2:-3

export const mqttHandlers: IMQTTHandlerTable = {
  'locker/1/dht': {
    handler: async (topic: string, params, data: any, components: IComponents) => {
      console.log(topic)
      console.log(params)
      console.log(data)
    },
  },
  'slc/activation/gateway': {
    handler: async (topic: string, params: object, data: any, components: IComponents) => {
      
    },
  },
  'slc/activation/lamp': {
    handler: async (topic: string, params: object, data: any, components: IComponents) => {
      
    },
  },
}
