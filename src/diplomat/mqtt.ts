import { IMQTTHandlerTable } from '../components/mqtt'
import { IComponents } from '../system'
import { updateLockerWithReport, ILockerReport } from '~/lockers/controllers/locker-report';
import { Nullable } from '~/common/types';

// 1.123:2.321:3.123:4.321:5.123:1010:6.321
// uuid:md5:version:versionString:1:2:-3

export interface IReportParams {
  macAddress: string,
  lockerId: string
}

// 0:1:1:0
// -> {busy: false, locked: true, open: true, alarm: false}

const zeroOrOneToBoolean = (zeroOrOne: '0' | '1') => Boolean(Number(zeroOrOne))

const reportExternalToInternal = (external: string): Nullable<ILockerReport> => {
  const pieces = external.split(':') as Array<'0' | '1'>
  if (pieces.length !== 4) {
    return null
  }
  return {
    busy: zeroOrOneToBoolean(pieces[0]),
    locked: zeroOrOneToBoolean(pieces[1]),
    open: zeroOrOneToBoolean(pieces[2]),
    alarm: zeroOrOneToBoolean(pieces[3]),
  }
}
export const mqttHandlers: IMQTTHandlerTable = {
  'lockers/+macAddress/+lockerId/report': {
    handler: async (topic: string, { macAddress, lockerId }: IReportParams, data: string, components: IComponents) => {
      console.log(`macAddress: ${macAddress}`)
      console.log(`lockerId: ${lockerId}`)
      console.log(`data`)

      await updateLockerWithReport(macAddress, lockerId, reportExternalToInternal(data), components)
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
