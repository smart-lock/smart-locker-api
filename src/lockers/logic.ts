import { Nullable } from '~/common/types'
import { Locker, LockerCluster } from '~/generated/prisma'
import { UserNode } from '~/prisma-client'

export const CMD_CLAIM = '1'
export const CMD_UNCLAIM = '2'
export const CMD_DEACTIVATE_ALARM = '3'
export const CMD_LOCK = '4'
export const CMD_UNLOCK = '5'
export const CMD_SUDO_DEACTIVATE_ALARM = '6'

export const firstOrNull = <T>(array: T[]): Nullable<T> => {
  if (!array.length) {
    return null
  }

  return array[0]
}

export const topicForLocker = (cluster: LockerCluster, locker: Locker) => `lockers/${cluster.macAddress}`

export const userHasCredit = (user: UserNode) => user.credit > 100
