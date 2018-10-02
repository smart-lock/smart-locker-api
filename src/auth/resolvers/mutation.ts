import * as Boom from 'boom'
import { IContext } from '~/graphql/context';
import * as bcrypt from 'bcryptjs'
import { UserNode, Prisma } from '~/prisma-client';
import { ITokenComponent } from '~/components/token';
import { PrismaClientComponent } from '~/components/prisma-client';

export interface ISignInArgs {
  email: string
  password: string
}

export interface ISignUpArgs {
  email: string
  password: string
  name: string
}

export const encodeUser = (user: UserNode, token: ITokenComponent): Promise<string> => {
  return token.encode({
    id: user.id,
    email: user.email,
    scopes: [],
  })
}

export const findUserByEmail = (email: string, prismaClient: PrismaClientComponent<Prisma>) => {
  return prismaClient.db.user({
    email,
  })
}

export const authMutation = {
  signIn: async (_, { email, password }: ISignInArgs, { components }: IContext) => {
    const user = await findUserByEmail(email, components.prismaClient)

    if (!user) {
      throw Boom.notFound('EmailNotFound');
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
  signUp: async ({ email, password, name } : ISignUpArgs, { components }: IContext) => {
    const existingUser = await findUserByEmail(email, components.prismaClient)
    
    if (existingUser) {
      throw Boom.notFound('EmailAlreadyExists');
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await components.prismaClient.db.createUser({
      email,
      password: hashedPassword,
      name,
    })

    const token = encodeUser(user, components.token)

    return {
      token,
      user,
    }
  }
}