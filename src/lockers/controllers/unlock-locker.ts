import { IAccount } from '~/auth/account'
import { findActiveLockerSessionForUserWithLockerInfo, updateLockState } from '~/lockers/controllers/common'
import { CMD_UNLOCK, topicForLocker } from '~/lockers/logic'
import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'

export const unlockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }

  components.mqtt.publish(topicForLocker(session.locker.cluster, session.locker), `${session.locker.idInCluster}${CMD_UNLOCK}`)

  const updatedLocker = await updateLockState(session.locker.id, false, components)
  return updatedLocker
}
