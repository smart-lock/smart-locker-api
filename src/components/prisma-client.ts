import { ILifecycle } from '~/components/lifecycle'

export class PrismaClientComponent<T> implements ILifecycle {
  public db: T

  constructor(db: T) {
    this.db = db
  }
  public start() {
    //  noop
  }
  public stop() {
    //  noop
  }
}
