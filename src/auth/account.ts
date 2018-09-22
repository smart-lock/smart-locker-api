import { ContextParameters } from "graphql-yoga/dist/types";
import { IComponents } from "~/system";
import { Nullable } from "~/common/types";
import { IncomingHttpHeaders } from "http2";

export interface IAccount {
  id: string
  email: string
  scopes: string[]
}

const getHeadersFromCtxParameters = (ctxParameters: ContextParameters): Nullable<IncomingHttpHeaders> => {
  const { request, connection } = ctxParameters
  if (request) {
    return request.headers
  }

  if (connection) {
    return connection.context
  }

  return null
}

export interface IExpectedHeaders {
  authorization: string
}

export const accountFromReq = async (ctxParameters: ContextParameters, deps: IComponents): Promise<IAccount | null> => {
  const headers = getHeadersFromCtxParameters(ctxParameters)
  const authorization = headers && headers.authorization
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
    console.log(err)
    return null
  }
}