import { IAccount } from '~/auth/account'
import { findActiveLockerSessionForUserWithLockerInfo } from '~/lockers/controllers/common'
import { CMD_LOCK, topicForLocker } from '~/lockers/logic'
import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'

export const lockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }
  if (!session.locker.closed) {
    throw new Error('LockerNotClosed')
  }
  const topic = topicForLocker(session.locker.cluster, session.locker)
  const payload = `${session.locker.idInCluster}${CMD_LOCK}`
  components.mqtt.publish(topic, payload)

  return session.locker
}
