import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'

export const updateLockState = async (lockerId: string, locked: boolean, components: IComponents): Promise<LockerNode> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId,
    },
    data: {
      locked,
    },
  })
}

export const updateBusyState = async (lockerId: string, busy: boolean, components: IComponents): Promise<LockerNode> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId,
    },
    data: {
      busy,
    },
  })
}

export const updateOpenState = async (lockerId: string, open: boolean, components: IComponents): Promise<LockerNode> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId,
    },
    data: {
      open,
    },
  })
}
