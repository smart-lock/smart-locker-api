import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as express from 'express'
import * as morgan from 'morgan'
import { asyncHandler } from '~/common/async-handler'
import { errorHandler } from '~/common/error-handler'
import { IContext } from '~/graphql/context'
import { graphiqlHandler, graphqlHandler } from './graphql/handler'
import { lockerControllers } from './lockers/controllers'

export interface IRequestWithContext extends express.Request {
  context: IContext
}

export const routes = express.Router()

routes.use(cors())
routes.use(bodyParser.json())
routes.use(morgan('tiny'))

const nextLockerHandler = async ({ context, params }: IRequestWithContext, res) => {
  const { macAddress } = params
  const locker = await lockerControllers.nextLocker(macAddress, context.components)
  res.json(locker)
}

const getLockerClusterHandler = async ({ context, params }: IRequestWithContext, res) => {
  const { macAddress } = params
  const lockerCluster = await lockerControllers.getLockerCluster(macAddress, context.components)
  res.json(lockerCluster)
}

routes.get('/locker-cluster/:macAddress/next-locker', asyncHandler(nextLockerHandler))
routes.get('/locker-cluster/:macAddress', asyncHandler(getLockerClusterHandler))
routes.post('/graphql', graphqlHandler)
routes.get('/graphql', graphiqlHandler)
routes.use(errorHandler)
