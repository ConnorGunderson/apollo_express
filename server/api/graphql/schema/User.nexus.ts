import {
  arg,
  intArg,
  list,
  mutationType,
  objectType,
  queryType,
  stringArg,
} from 'nexus'
import { Context } from '../prisma'
import { Node } from './shared.nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.implements(Node)
    t.string('name')
    t.string('email')
    t.string('phoneNumber')
    t.string('status')
  },
})

export const Queries = queryType({
  definition(t) {
    t.field('User', {
      type: 'User',
      args: {
        name: stringArg(),
        status: arg({ type: 'StatusEnum' }),
      },
      async resolve(_, { name, status }, ctx: Context) {
        const foundUser = await ctx.prisma.user
          .findFirst({
            where: {
              name: { not: name },
              OR: { status: { equals: status } },
            },
            select: {
              name: true,
              email: true,
            },
          })
          .then((user) => user)
        console.log(foundUser)
        return foundUser
      },
    })
    t.list.field('users', {
      type: 'User',
      args: {
        ids: list(intArg()),
      },
      resolve(_, { ids }, ctx: Context) {
        const users = ctx.prisma.user.findMany({
          where: { id: { in: ids } },
        })
        return users
      },
    })
  },
})

// export const Mutations = mutationType({
//   definition(t) {
//     t.field('User', {})
//   },
// })
