import { Nullable } from '~/common/types'
import { LockerSession } from '~/generated/prisma'
import { firstOrNull } from '~/lockers/logic'
import { LockerNode, LockerSessionNode } from '~/prisma-client'
import { IComponents } from '~/system'

export const findActiveLockerSessionForUser = async (userId: string, lockerId: string, components: IComponents): Promise<Nullable<LockerSessionNode>> => {
  const { prismaClient } = components
  const result = await prismaClient.db.lockerSessions({
    where: {
      user: {
        id: userId,
      },
      locker: {
        id: lockerId,
      },
      finishedAt_lt: null,
      state: 0,
    },
  })

  return firstOrNull(result)
}

export const finishLockerSession = async (sessionId: string, lockerId: string, components: IComponents): Promise<LockerSessionNode> => {
  await components.prismaClient.db.updateLocker({
    where: {
      id: lockerId,
    },
    data: {
      busy: false,
      currentOwner: null,
    },
  })
  return components.prismaClient.db.updateLockerSession({
    where: {
      id: sessionId,
    },
    data: {
      finishedAt: components.clock.getDate(),
      state: 1,
    },
  })
}

export const findActiveLockerSessionForUserWithLockerInfo = async (userId: string, lockerId: string, components: IComponents): Promise<Nullable<LockerSession>> => {
  const result = await components.prismaBinding.db.query.lockerSessions({
    where: {
      locker: {
        id: lockerId,
      },
      user: {
        id: userId,
      },
      state: 0,
    },
  }, `
  {
    id
    locker {
      id
      idInCluster
      alarm
      busy
      locked
      closed
      cluster {
        id
        macAddress
      }
    }
  }`)

  return firstOrNull(result)
}

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

export const insertLockerSession = (lockerId: string, userId: string, components: IComponents) => {
  return components.prismaClient.db.createLockerSession({
    user: {
      connect: {
        id: userId,
      },
    },
    locker: {
      connect: {
        id: lockerId,
      },
    },
    startedAt: components.clock.getDate(),
    state: 0,
  })
}
