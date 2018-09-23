import { ILifecycle } from './lifecycle';

export interface IClockComponent {
  getTimestamp: () => number
  getTimestampSeconds: () => number
  setTimestamp: (timestamp: number) => void
  getDate: () => Date
}

export class ClockComponent implements ILifecycle, IClockComponent {
  public getTimestamp() {
    return + new Date()
  }

  public setTimestamp(timestamp: number) {
    console.log('test only')
  }

  public getTimestampSeconds() {
    return Math.floor(+new Date() / 1000)
  }

  public getDate() {
    return new Date()
  }
  public start() {
    console.log('Starting clock...')

    console.log('Clock started!')
    // noop
  }

  public stop() {
    // noop
  }
}