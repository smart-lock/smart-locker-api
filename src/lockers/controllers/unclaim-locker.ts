import { IAccount } from '~/auth/account'
import { findActiveLockerSessionForUserWithLockerInfo, finishLockerSession } from '~/lockers/controllers/common'
import { CMD_UNCLAIM, topicForLocker } from '~/lockers/logic'
import { LockerSessionNode } from '~/prisma-client'
import { IComponents } from '~/system'

export const unclaimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  const { locker } = session
  if (locker.closed) {
    throw new Error('LockerClosed')
  }
  if (locker.locked) {
    throw new Error('LockerLocked')
  }
  const finishedSession = await finishLockerSession(session.id, lockerId, components)
  components.mqtt.publish(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_UNCLAIM}`)
  return finishedSession
}
