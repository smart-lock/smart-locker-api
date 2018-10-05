import { Nullable } from '~/common/types'
import { ILockerReport } from '~/lockers/controllers/locker-report'

export const zeroOrOneToBoolean = (zeroOrOne: '0' | '1') => Boolean(Number(zeroOrOne))

export const reportExternalToInternal = (external: string): Nullable<ILockerReport> => {
  const pieces = external.split(':') as Array<'0' | '1'>
  if (pieces.length !== 4) {
    return null
  }
  return {
    busy: zeroOrOneToBoolean(pieces[0]),
    locked: zeroOrOneToBoolean(pieces[1]),
    closed: zeroOrOneToBoolean(pieces[2]),
    alarm: zeroOrOneToBoolean(pieces[3]),
  }
}
