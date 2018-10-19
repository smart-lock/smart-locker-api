import * as Boom from 'boom'
import { LockerCluster } from '~/generated/prisma'
import { IComponents } from '~/system'
import { findLockerClusterbyMacAddress } from '../db/locker-cluster'

export const getLockerCluster = async (macAddress: string, components: IComponents): Promise<LockerCluster> => {
  const lockerCluster = await findLockerClusterbyMacAddress(macAddress, components)

  if (!lockerCluster) {
    throw Boom.notFound('LockerClusterNotFound')
  }

  return lockerCluster
}
