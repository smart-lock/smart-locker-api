import { IComponents } from "~/system";
import { LockerNode } from "~/prisma-client";

export interface ILockerReport {
  open: boolean,
  busy: boolean,
  locked: boolean,
  alarm: boolean,
}

export const updateLockerWithReport = async (macAddress: string, lockerId: string, report: ILockerReport, components: IComponents): Promise<LockerNode> => {
  const locker = await components.prismaClient.db.locker({
    id: lockerId,
  })

  if (!locker) {
    throw new Error('LockerNotFound')
  }

  const { open, busy, locked, alarm } = report

  const updatedLocker = await components.prismaClient.db.updateLocker({
    where: {
      id: lockerId,
    },
    data: {
      open,
      busy,
      locked,
      alarm,
    }
  })

  return updatedLocker
}