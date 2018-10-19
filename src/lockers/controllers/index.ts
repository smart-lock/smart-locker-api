import { claimLocker } from '~/lockers/controllers/claim-locker'
import { lockLocker } from '~/lockers/controllers/lock-locker'
import { unclaimLocker } from '~/lockers/controllers/unclaim-locker'
import { unlockLocker } from '~/lockers/controllers/unlock-locker'
import { getLockerCluster } from './get-locker-cluster'
import { updateLockerWithReport } from './locker-report'
import { nextLocker } from './next-locker'

export const lockerControllers = {
  claimLocker,
  getLockerCluster,
  lockLocker,
  updateLockerWithReport,
  nextLocker,
  unclaimLocker,
  unlockLocker,
}
