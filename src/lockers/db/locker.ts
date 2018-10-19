import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { firstOrNull } from '../logic'

export const findLockerById = (id: string, { prismaBinding }: IComponents) => prismaBinding.db.query.locker({
  where: {
    id,
  },
}, `{
  id
  idInCluster
  busy
  cluster {
    id
    macAddress
  }
}`)

export const findLockerInCluster = (
  idInCluster: string,
  macAddress: string, { prismaClient }: IComponents): Promise<LockerNode | null> => prismaClient.db.lockers({
  where: {
    idInCluster,
    cluster: {
      macAddress,
    },
  },
}).then((lockers) => firstOrNull(lockers))

export const saveReport = (lockerId: string, report: any, { prismaClient }: IComponents) => prismaClient.db.updateLocker({
  where: {
    id: lockerId,
  },
  data: report,
})
