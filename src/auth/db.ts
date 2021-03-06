import * as bcrypt from 'bcryptjs'
import { PrismaClientComponent } from '~/components/prisma-client'
import { Prisma } from '~/prisma-client'
import { IComponents } from '~/system'

export const findUserByEmail = (email: string, prismaClient: PrismaClientComponent<Prisma>) => {
  return prismaClient.db.user({
    email,
  })
}

export const createUser = async (email: string, password: string, name: string, prismaClient: PrismaClientComponent<Prisma>) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  return prismaClient.db.createUser({
    email,
    password: hashedPassword,
    name,
  })
}

export const findUserById = (id: string, { prismaClient }: IComponents) => prismaClient.db.user({
  id,
})
