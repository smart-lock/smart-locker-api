import * as bcrypt from 'bcryptjs'
import { v4 } from 'uuid'
import { IAccount } from '~/auth/account'
import { findUserById } from '~/auth/db'
import { CMD_CLAIM, topicForLocker, userHasCredit } from '~/lockers/logic'
import { LockerSessionNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { findLockerById } from '../db/locker'
import { updateBusyState } from '../db/locker-state'
import { findActiveLockerSessionForUser, insertLockerSession } from '../db/sessions'

export const createRandomString = () => v4()
export const createSecret = (password: string): Promise<string> => bcrypt.hash(password, 10)

export const claimLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<{
  lockerSession: LockerSessionNode,
  password: string,
}> => {
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

  const password = createRandomString()
  const hashedPassword = await createSecret(password)
  const lockerSession = await insertLockerSession(lockerId, account.id, components, hashedPassword)

  await updateBusyState(lockerId, true, components)
  components.mqtt.publish(topicForLocker(locker.cluster, locker), `${locker.idInCluster}${CMD_CLAIM}`)
  return {
    lockerSession,
    password,
  }
}
