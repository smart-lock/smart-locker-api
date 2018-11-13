import { Nullable } from '~/common/types'
import { UnlockRequest } from '~/generated/prisma'
import { IComponents } from '~/system'
import { firstOrNull } from '../logic'

export const insertUnlockRequest = (secret: string, sessionId: string, components: IComponents) => components.prismaClient.db.createUnlockRequest({
  date: components.clock.getDate(),
  secret,
  session: {
    connect: {
      id: sessionId,
    },
  },
  unlocked: false,
})

export const findUnlockRequestBySecret = (secret: string, components: IComponents): Promise<Nullable<UnlockRequest>> => {
  return components.prismaBinding.db.query.unlockRequests({
    where: {
      secret,
    },
  })
  .then(firstOrNull)
}
