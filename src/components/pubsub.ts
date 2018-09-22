import { ILifecycle } from './lifecycle'
import { PubSub } from 'graphql-yoga'

export class PubSubComponent implements ILifecycle {
  private pubsub: PubSub
  
  public get instance () {
    return this.pubsub
  }
  
  public start () {
    const pubsub = new PubSub();

    this.pubsub = pubsub
  }

  public stop() {
    // noop for now
  }
}