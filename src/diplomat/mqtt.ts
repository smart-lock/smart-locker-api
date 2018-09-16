import { IMQTTHandlerTable } from '../components/mqtt'
import { IComponents } from '../system'

// 1.123:2.321:3.123:4.321:5.123:1010:6.321
// uuid:md5:version:versionString:1:2:-3

export const mqttHandlers: IMQTTHandlerTable = {
  'slc/+gid/info1/+lid': {
    handler: async (topic: string, params: {gid: string, lid: string}, data: any, components: IComponents) => {
      
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
