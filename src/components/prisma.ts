import { ILifecycle } from '~/components/lifecycle'
import { IConfigComponent } from './config'

export interface IPrismaComponent<T> {
  db: T
}

export interface IPrismaComponentDependencies {
  config: IConfigComponent<{ prisma: { uri: string, debug: boolean } }>
}

export class PrismaComponent<T> implements ILifecycle, IPrismaComponent<T> {
  public db: T
  private PrismaClass: new (args: any) => T

  constructor(PrismaClass: any) {
    this.PrismaClass = PrismaClass
  }

  public async start(dependencies: IPrismaComponentDependencies) {
    const { uri: endpoint, debug } = dependencies.config.getConfig().prisma
    this.db = new this.PrismaClass({
      endpoint,
      debug,
    })
  }
  public async stop() {
    // noop
  }
}
