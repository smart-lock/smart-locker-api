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

  // Let GraphQL subscribers know about this
  components.pubsub.instance.publish(`lockers.${locker.id}`, {
    lockerState: report
  })

  // Save on database
  const updatedLocker = await components.prismaClient.db.updateLocker({
    where: {
      id: locker.id,
    },
    data: report
  })



  return updatedLocker
}