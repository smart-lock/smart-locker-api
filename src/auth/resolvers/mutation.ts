import * as bcrypt from 'bcryptjs'
import * as Boom from 'boom'
import { createUser, findUserByEmail } from '~/auth/db'
import { encodeUser } from '~/auth/logic'
import { IContext } from '~/graphql/context'

export interface ISignInArgs {
  data: {
    email: string
    password: string,
  }
}

export interface ISignUpArgs {
  data: {
    email: string
    password: string
    name: string,
  }
}

export const authMutation = {
  signIn: async (_, { data: { email, password } }: ISignInArgs, { components }: IContext) => {
    const user = await findUserByEmail(email, components.prismaClient)

    if (!user) {
      throw Boom.notFound('EmailNotFound')
    }

    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      throw Boom.notFound('InvalidPasswor')
    }

    const token = encodeUser(user, components.token)

    return {
      token,
      user,
    }
  },
  signUp: async (_, { data: { email, password, name }}: ISignUpArgs, { components }: IContext) => {
    const existingUser = await findUserByEmail(email, components.prismaClient)

    if (existingUser) {
      throw Boom.notFound('EmailAlreadyExists')
    }
    const user = await createUser(email, password, name, components.prismaClient)
    const token = encodeUser(user, components.token)
    return {
      token,
      user,
    }
  },
}
