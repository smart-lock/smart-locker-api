import { ContextParameters } from "graphql-yoga/dist/types";
import { IComponents } from "~/system";

export interface IAccount {
  id: string
  email: string
  scopes: string[]
}

export const accountFromReq = async ({ request }: ContextParameters, deps: IComponents): Promise<IAccount | null> => {
  const authorization = request.headers && request.headers.authorization
  if (!authorization || Array.isArray(authorization)) {
    return null
  }

  try {
    const decoded = await deps.token.validate<IAccount>(authorization)
    return {
      id: decoded.id,
      email: decoded.email,
      scopes: decoded.scopes || [],
    }
  } catch (err) {
    return null
  }
}