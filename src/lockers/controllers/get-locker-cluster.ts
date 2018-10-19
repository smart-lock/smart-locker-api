import * as Boom from 'boom'
import { LockerCluster } from '~/generated/prisma'
import { IComponents } from '~/system'

export const getLockerCluster = async (macAddress: string, { prismaBinding }: IComponents): Promise<LockerCluster> => {
  const lockerCluster = await prismaBinding.db.query.lockerCluster({
    where: {
      macAddress,
    },
  }, `{
    id
    macAddress
    lockers{
			id
      idInCluster
      busy
      locked
      open
      sensorPin
      alarmPin
      lockPin
    }
  }`)

  if (!lockerCluster) {
    throw Boom.notFound('LockerClusterNotFound')
  }

  return lockerCluster
}
