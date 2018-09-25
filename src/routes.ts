import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'
import { IContext } from '~/graphql/context';
import * as Boom from 'boom'
import { asyncHandler } from '~/common/async-handler';
import { firstOrNull } from '~/lockers/logic';

export interface RequestWithContext extends express.Request {
  context: IContext
}

export const routes = express.Router()

routes.use(cors())
routes.use(bodyParser.json())
routes.use(morgan('tiny'))

routes.get('/locker-cluster/:macAddress/next-locker', asyncHandler(async ({ context, params }: RequestWithContext, res) => {
  const { macAddress } = params
  const lockers = await context.components.prismaClient.db.lockers({
    where: {
      cluster: {
        macAddress
      },
      busy: false,
    }
  })

  console.log(lockers)

  const locker = firstOrNull(lockers)

  if (!locker) {
    throw Boom.badRequest('NoLockerAvailable')
  }

  res.json(locker);
}))

routes.get('/locker-cluster/:macAddress', asyncHandler(async ({ context, params }: RequestWithContext, res) => {
  const { macAddress } = params

  const lockerCluster = await context.components.prismaBinding.db.query.lockerCluster({
    where: {
      macAddress,
    }
  }, `{
    id
    macAddress
    lockers{
			id
      busy
      locked
      open
      sensorPin
      alarmPin
      lockPin
    }
  }`)

  if (!lockerCluster) {
    throw Boom.notFound('LockerClusterNotFound')
  }
  res.json(lockerCluster)
}))


routes.use((err, req, res, next) => {
  const status = err && err.output && err.output.statusCode
  const payload = err && err.output && err.output.payload || {
    statusCode: 500,
    error: 'Internal Server Error',
    message: err.toString(),
  }
  res.status(status).json(payload)
})