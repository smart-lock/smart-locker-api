import { ILifecycle } from "~/components/lifecycle";
import { GraphQLServer } from 'graphql-yoga'
import { IConfigComponent } from "~/components/config";
import { Server as HTTPServer } from 'http';
import { Server as HTTPSServer } from 'https';
import { ContextParameters } from "graphql-yoga/dist/types";

type GenericServer = HTTPServer | HTTPSServer

export interface IYogaComponentConfig {
  port: number
}
export interface IYogaComponentDependencies {
  config: IConfigComponent<{yoga: IYogaComponentConfig}>
}

export interface IYogaComponentOptions<T> {
  resolvers: any,
  getContext: (req: ContextParameters, deps: any) => Promise<T> | T,
  typeDefsFile: string
}
export class YogaComponent<T> implements ILifecycle {
  private server: GraphQLServer
  private httpServer: GenericServer
  private options: IYogaComponentOptions<T>

  constructor(options: IYogaComponentOptions<T>) {  
    this.options = options
  }
  public async start(deps: IYogaComponentDependencies) {
    console.log('Starting yoga...')
    const {
      typeDefsFile,
      resolvers,
      getContext,
    } = this.options
    const port = deps.config.getRequiredValue(['yoga', 'port'])

    this.server = new GraphQLServer({
      typeDefs: typeDefsFile,
      resolvers,
      context: (req) => getContext(req, deps),
    })

    this.httpServer = await this.server.start({
      port,
    })
    console.log(`Yoga listening on http://localhost:${port}`)
  }

  private closeServer = () => {
    return new Promise((resolve, reject) => {
      this.httpServer.close((err) => {
        if (err) {
          reject(err)
          return
        }
        resolve()
      })
    })
  }
  public async stop() {
    await this.closeServer()
    this.httpServer = null
    this.httpServer = null
  }
}