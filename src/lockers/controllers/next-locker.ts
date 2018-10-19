import * as Boom from 'boom'
import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { firstOrNull } from '../logic'

export const nextLocker = async (macAddress: string, { prismaClient }: IComponents): Promise<LockerNode> => {
  const lockers = await prismaClient.db.lockers({
    where: {
      cluster: {
        macAddress,
      },
      busy: false,
    },
  })

  const locker = firstOrNull(lockers)

  if (!locker) {
    throw Boom.badRequest('NoLockerAvailable')
  }

  return locker
}
