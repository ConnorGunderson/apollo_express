import { PrismaClient } from '@prisma/client'
import { Context } from './context'

const prisma = new PrismaClient()

export const context: Context = {
  db: prisma,
}
