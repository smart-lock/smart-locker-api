import * as bcrypt from 'bcryptjs'
import { IAccount } from '~/auth/account'
import { ID } from '~/common/types'
import { CMD_SHOW_UNLOCK_PASSWORD, CMD_UNLOCK, firstOrNull, topicForLocker } from '~/lockers/logic'
import { LockerNode, UnlockRequestNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { updateLockState } from '../db/locker-state'
import { findActiveLockerSessionForUserWithLockerInfo } from '../db/sessions'
import { findUnlockRequestBySecret, insertUnlockRequest } from '../db/unlock-request'
import { createRandomString, createSecret } from './claim-locker'

export const createUnlockRequest = async (lockerId: ID, account: IAccount, password: string, components: IComponents): Promise<UnlockRequestNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }

  if (!await bcrypt.compare(password, session.secret)) {
    throw new Error('WrongPassword')
  }

  const unlockRequestPassword = createRandomString()
  const unlockRequestSecret = await createSecret(unlockRequestPassword)

  /**
   * Create unlock request on DB
   */
  const createdUnlockRequest = await insertUnlockRequest(unlockRequestSecret, session.id, components)

  /**
   * Send command to the board so it can display the password
   */
  const topic = topicForLocker(session.locker.cluster, session.locker)
  const message = `${session.locker.idInCluster}${CMD_SHOW_UNLOCK_PASSWORD}${unlockRequestPassword}`
  components.mqtt.publish(topic, message)

  return createdUnlockRequest

}

export const unlockLocker = async (lockerId: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const session = await findActiveLockerSessionForUserWithLockerInfo(account.id, lockerId, components)
  if (!session) {
    throw new Error('SessionNotFound')
  }

  components.mqtt.publish(topicForLocker(session.locker.cluster, session.locker), `${session.locker.idInCluster}${CMD_UNLOCK}`)

  const updatedLocker = await updateLockState(session.locker.id, false, components)
  return updatedLocker
}

export const unlockLockerWithPassword = async (password: string, account: IAccount, components: IComponents): Promise<LockerNode> => {
  const secret = await createSecret(password)

  const unlockRequest = await findUnlockRequestBySecret(secret, components)

  if (!unlockRequest) {
    throw new Error('UnlockRequestNotFoundForPassword')
  }

  if (unlockRequest.unlocked) {
    throw new Error('UnlockRequestAlreadyUsed')
  }

  const { session } = unlockRequest

  if (session.user.id !== account.id) {
    throw new Error('NotSessionOwner')
  }
  const topic = topicForLocker(session.locker.cluster, session.locker)
  const message = `${session.locker.idInCluster}${CMD_UNLOCK}`
  components.mqtt.publish(topic, message)

  const updatedLocker = await updateLockState(session.locker.id, false, components)
  return updatedLocker
}
