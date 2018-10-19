import { IAccount } from '~/auth/account'
import { findUserById } from '~/auth/db'
import { CMD_CLAIM, topicForLocker, userHasCredit } from '~/lockers/logic'
import { LockerSessionNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { findLockerById, updateLockerCurrentOwner } from '../db/locker'
import { updateBusyState } from '../db/locker-state'
import { findActiveLockerSessionForUser, insertLockerSession } from '../db/sessions'

export const claimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerSessionNode> => {
  const user = await findUserById(account.id, components)
  if (!userHasCredit(user)) {
    throw new Error('InsufficientCredit')
  }
  const locker = await findLockerById(lockerId, components)
  if (!locker) {
    throw new Error('LockerNotFound')
  }
  const session = await findActiveLockerSessionForUser(account.id, lockerId, components)
  if (session) {
    throw new Error('LockerBusy')
  }
  const lockerSession = await insertLockerSession(lockerId, account.id, components)
  await updateLockerCurrentOwner(lockerId, account.id, components)
  await updateBusyState(lockerId, true, components)
  components.mqtt.publish(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_CLAIM}`)
  return lockerSession
}
