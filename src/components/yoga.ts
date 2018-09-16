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
  getContext: (req: ContextParameters) => Promise<T> | T,
  typeDefsFile: string
}
export class YogaComponent<T> implements ILifecycle {
  private server: GraphQLServer
  private httpServer: GenericServer

  constructor({
    resolvers,
    getContext,
    typeDefsFile
  }: IYogaComponentOptions<T>) {  
    this.server = new GraphQLServer({
      typeDefs: typeDefsFile,
      resolvers,
      context: getContext,
    })    

  }
  public async start(deps: IYogaComponentDependencies) {
    const port = deps.config.getRequiredValue(['yoga', 'port'])
    this.httpServer = await this.server.start({
      port,
    })
    console.log(`Yoga listening on http://localhost:${port}`)
  }
  public stop() {
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
}