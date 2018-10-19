import { Request } from 'express'
import { ContextParameters } from 'graphql-yoga/dist/types'
import { Nullable } from '~/common/types'
import { ITokenComponent } from '~/components/token'
import { IComponents } from '~/system'

export interface IAccount {
  id: string
  email: string
  scopes: string[]
}

/**
 * Yoga (deprecated)
 */
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
  if (!authorizationInfo.token) {
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

/**
 * Express
 */
export interface IModifiedRequest extends Request {
  components: {
    token: ITokenComponent,
  }
}

export const accountFromExpressReq = async (req: IModifiedRequest): Promise<IAccount | null> => {
  const authorization = req.headers && req.headers.authorization
  if (!authorization || Array.isArray(authorization)) {
    return null
  }
  try {
    const decoded = await req.components.token.validate<IAccount>(authorization)
    return {
      id: decoded.id,
      email: decoded.email,
      scopes: decoded.scopes || [],
    }
  } catch (err) {
    return null
  }
}
