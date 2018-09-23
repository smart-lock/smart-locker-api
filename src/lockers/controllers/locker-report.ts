import { IComponents } from "~/system";
import { LockerNode } from "~/prisma-client";
import { firstOrNull } from "~/lockers/logic";

export interface ILockerReport {
  closed: boolean,
  busy: boolean,
  locked: boolean,
  alarm: boolean,
}
/**
 *updateLockerWithReport
 *
 * @param {string} macAddress
 * @param {string} idInCluster
 * @param {ILockerReport} report
 * @param {IComponents} components
 * @returns {Promise<LockerNode>}
 */
export const updateLockerWithReport = async (macAddress: string, idInCluster: string, report: ILockerReport, components: IComponents): Promise<LockerNode> => {
  // Find the locker present in this macAddress/idInCluster
  const result = await components.prismaClient.db.lockers({
    where: {
      idInCluster,
      cluster: {
        macAddress,
      }
    }
  })
  const locker = firstOrNull(result)
  
  // Throw an error if the lock does not exist
  if (!locker) {
    throw new Error('LockerNotFound')
  }

  const lockerUpdatePayload = {
    id: locker.id,
    ...report
  }

  // Let GraphQL subscribers know about this
  components.pubsub.instance.publish(`lockers.${locker.id}`, {
    lockerState: lockerUpdatePayload
  })

  const sessions = await components.prismaBinding.db.query.lockerSessions({
    where: {
      locker: {
        id: locker.id,
      },
    }
  }, `{
    id
    user {
      id
    }
  }`)
  const session = firstOrNull(sessions)

  if (session) {
    const channel = `${session.user.id}.lockers`
    console.log(channel)
    // If there is an active session, let the subscribed owner know
    components.pubsub.instance.publish(channel, {
      myLockers: lockerUpdatePayload,
    })
  }

  // Save on database
  const updatedLocker = await components.prismaClient.db.updateLocker({
    where: {
      id: locker.id,
    },
    data: report
  })



  return updatedLocker
}