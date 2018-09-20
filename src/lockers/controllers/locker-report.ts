import { IComponents } from "~/system";
import { LockerNode } from "~/prisma-client";
import { firstOrNull } from "~/lockers/logic";

export interface ILockerReport {
  closed: boolean,
  busy: boolean,
  locked: boolean,
  alarm: boolean,
}

export const updateLockerWithReport = async (macAddress: string, idInCluster: string, report: ILockerReport, components: IComponents): Promise<LockerNode> => {
  const result = await components.prismaClient.db.lockers({
    where: {
      idInCluster,
      cluster: {
        macAddress,
      }
    }
  })

  const locker = firstOrNull(result)
  
  if (!locker) {
    throw new Error('LockerNotFound')
  }

  const { closed, busy, locked, alarm } = report

  const updatedLocker = await components.prismaClient.db.updateLocker({
    where: {
      id: locker.id,
    },
    data: {
      closed,
      busy,
      locked,
      alarm,
    }
  })

  return updatedLocker
}