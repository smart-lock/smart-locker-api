import * as Boom from 'boom'
import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { findFreeLockersInCluster } from '../db/locker-cluster'
import { firstOrNull } from '../logic'

export const nextLocker = async (macAddress: string, components: IComponents): Promise<LockerNode> => {
  const lockers = await findFreeLockersInCluster(macAddress, components)

  const locker = firstOrNull(lockers)

  if (!locker) {
    throw Boom.badRequest('NoLockerAvailable')
  }

  return locker
}
