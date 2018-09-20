import { claimLocker } from "~/lockers/controllers/claim-locker";
import { unclaimLocker } from "~/lockers/controllers/unclaim-locker";
import { lockLocker } from "~/lockers/controllers/lock-locker";
import { unlockLocker } from "~/lockers/controllers/unlock-locker";

export const lockerControllers = {
  claimLocker,
  unclaimLocker,
  lockLocker,
  unlockLocker,
}