import { PubSub } from 'graphql-yoga'
import { ILifecycle } from './lifecycle'

export class PubSubComponent implements ILifecycle {
  private pubsub: PubSub

  public get instance() {
    return this.pubsub
  }

  public start() {
    console.log('Starting PubSub')
    const pubsub = new PubSub()

    this.pubsub = pubsub
    console.log('PubSub started!')
  }

  public stop() {
    // noop for now
  }
}
