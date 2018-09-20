import { LockerSessionNode } from "~/prisma-client";
import { LockerSession, Locker } from "~/generated/prisma"
import { IComponents } from "~/system";
import { Nullable } from "~/common/types";
import { firstOrNull } from "~/lockers/logic";

export const findActiveLockerSessionForUser = async (userId: string, lockerId: string, components: IComponents): Promise<Nullable<LockerSessionNode>> => {
  const { prismaClient, clock } = components
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
    }
  })

  return firstOrNull(result)
}

export const finishLockerSession = async (sessionId: string, components: IComponents): Promise<LockerSessionNode> => {
  return components.prismaClient.db.updateLockerSession({
    where: {
      id: sessionId,
    },
    data: {
      finishedAt: components.clock.getDate(),
      state: 1,
    }
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
    }
  }, `
  {
    id
    locker {
      id
      cluster {
        id
      }
    }
  }`)

  return firstOrNull(result);
}

export const updateLockState = async (lockerId: string, locked: boolean, components: IComponents): Promise<Locker> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId
    },
    data: {
      locked,
    }
  })
}

export const updateBusyState = async (lockerId: string, busy: boolean, components: IComponents): Promise<Locker> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId
    },
    data: {
      busy,
    }
  })
}

export const updateOpenState = async (lockerId: string, open: boolean, components: IComponents): Promise<Locker> => {
  return components.prismaClient.db.updateLocker({
    where: {
      id: lockerId
    },
    data: {
      open,
    }
  })
}

export const insertLockerSession = (lockerId: string, userId: string, components: IComponents) => {
  return components.prismaClient.db.createLockerSession({
    user: {
      connect: {
        id: userId,
      }
    },
    locker: {
      connect: {
        id: lockerId,
      }
    },
    startedAt: components.clock.getDate(),
    state: 0,
  })
}