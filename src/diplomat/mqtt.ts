import { reportExternalToInternal } from '~/lockers/adapters/report'
import { updateLockerWithReport } from '~/lockers/controllers/locker-report'
import { IMQTTHandlerTable } from '../components/mqtt'
import { IComponents } from '../system'

export interface IReportParams {
  macAddress: string,
  idInCluster: string
}

// 0:1:1:0
// -> {busy: false, locked: true, closed: true, alarm: false}

export const mqttHandlers: IMQTTHandlerTable = {
  'lockers/+macAddress/+idInCluster/report': {
    handler: async (topic: string, { macAddress, idInCluster }: IReportParams, data: string, components: IComponents) => {
      await updateLockerWithReport(macAddress, idInCluster, reportExternalToInternal(data), components)
    },
  },
}
