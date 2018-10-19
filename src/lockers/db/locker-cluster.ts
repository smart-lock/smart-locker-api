import { IComponents } from '~/system'

export const findLockerClusterbyMacAddress = (macAddress: string, { prismaBinding }: IComponents) => prismaBinding.db.query.lockerCluster({
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

export const findFreeLockersInCluster = (macAddress: string, { prismaClient }: IComponents) => prismaClient.db.lockers({
  where: {
    cluster: {
      macAddress,
    },
    busy: false,
  },
})
