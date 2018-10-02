import { ContextParameters } from "graphql-yoga/dist/types";
import { IComponents } from "~/system";
import { Nullable } from "~/common/types";

export interface IAccount {
  id: string
  email: string
  scopes: string[]
}

export interface IAuthorizationInfo {
  token: string
}

const getAuthorizationInfoFromContextParameters = (ctxParameters: ContextParameters): Nullable<IAuthorizationInfo> => {
  const { request, connection } = ctxParameters

  if (request) {
    return {
      token: request.headers.authorization,
    }
  }

  if (connection) {
    console.log(connection.context.Authorization)
    return {
      token: connection.context.Authorization,
    }
  }

  return null
}

export interface IExpectedHeaders {
  authorization: string
}

export const accountFromReq = async (ctxParameters: ContextParameters, deps: IComponents): Promise<IAccount | null> => {
  const authorizationInfo = getAuthorizationInfoFromContextParameters(ctxParameters)
  if (!authorizationInfo) {
    return null
  }

  try {
    const decoded = await deps.token.validate<IAccount>(authorizationInfo.token)
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