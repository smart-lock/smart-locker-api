import { IComponents } from '~/system'

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

export const updateLockerCurrentOwner = (lockerId: string, userId: string, { prismaClient }: IComponents) => prismaClient.db.updateLocker({
  where: {
    id: lockerId,
  },
  data: {
    currentOwner: {
      connect: { id: userId },
    },
  },
})
