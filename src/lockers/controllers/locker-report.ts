import { firstOrNull } from '~/lockers/logic'
import { LockerNode } from '~/prisma-client'
import { IComponents } from '~/system'
import { findLockerInCluster, saveReport } from '../db/locker'
import { findLockerSessions } from '../db/sessions'

export interface ILockerReport {
  closed: boolean
  busy: boolean
  locked: boolean
  alarm: boolean
}
/**
 * updateLockerWithReport
 *
 * @param {string} macAddress
 * @param {string} idInCluster
 * @param {ILockerReport} report
 * @param {IComponents} components
 * @returns {Promise<LockerNode>}
 */
export const updateLockerWithReport = async (macAddress: string, idInCluster: string, report: ILockerReport, components: IComponents): Promise<LockerNode> => {
  // Find the locker present in this macAddress/idInCluster
  const locker = await findLockerInCluster(idInCluster, macAddress, components)

  // Throw an error if the lock does not exist
  if (!locker) {
    throw new Error('LockerNotFound')
  }

  const lockerUpdatePayload = {
    id: locker.id,
    ...report,
  }

  // Let GraphQL subscribers know about this
  components.pubsub.instance.publish(`lockers.${locker.id}`, {
    lockerState: lockerUpdatePayload,
  })

  const session = await findLockerSessions(locker.id, components).then((sessions) => firstOrNull(sessions))

  if (session) {
    const channel = `${session.user.id}.lockers`
    // If there is an active session, let the subscribed owner know
    components.pubsub.instance.publish(channel, {
      myLockers: lockerUpdatePayload,
    })
  }

  // Save on database
  const updatedLocker = await saveReport(locker.id, report, components)

  return updatedLocker
}
