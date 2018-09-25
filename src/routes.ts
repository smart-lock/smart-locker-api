import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as morgan from 'morgan'

export const routes = express.Router()

routes.use(cors())
routes.use(bodyParser.json())
routes.use(morgan('tiny'))

routes.get('/locker-cluster/:macAddress/next-locker', (req, res) => {
  res.json({
    id: "cjmdtr3q3000s0a5842xwqcy1",
    idInCluster: "1",
  })
})
routes.get('/locker-cluster/:macAddress', (req, res) => {
  res.json({
    lockers: [
      {
        id: "cjmdtr3q3000s0a5842xwqcy1",
        idInCluster: "1",
        row: 0,
        column: 0,
        busy: false,
        sensorPin: 2,
        lockPin: 16,
        alarmPin: 15
      },
      // {
      //   id: "01",
      //   idInCluster: "cjmdtr3qd000u0a587jl0p7mu",
      //   row: 0,
      //   column: 1,
      //   busy: false,
      //   sensorPin: 2,
      //   lockPin: 16,
      //   alarmPin: 15
      // },
      // {
      //   id: "02",
      //   idInCluster: "3",
      //   row: 0,
      //   column: 2,
      //   busy: false,
      //   sensorPin: 2,
      //   lockPin: 16,
      //   alarmPin: 15
      // },
      // {
      //   id: "10",
      //   idInCluster: "4",
      //   row: 1,
      //   column: 0,
      //   busy: false,
      //   sensorPin: 2,
      //   lockPin: 16,
      //   alarmPin: 15
      // },
      // {
      //   id: "11",
      //   idInCluster: "5",
      //   row: 1,
      //   column: 1,
      //   busy: false,
      //   sensorPin: 2,
      //   lockPin: 16,
      //   alarmPin: 15
      // },
      // {
      //   id: "12",
      //   idInCluster: "6",
      //   row: 1,
      //   column: 2,
      //   busy: false,
      //   sensorPin: 2,
      //   lockPin: 16,
      //   alarmPin: 15
      // }
    ]
  })
})
