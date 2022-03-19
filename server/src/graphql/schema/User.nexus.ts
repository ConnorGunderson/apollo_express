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
    t.int('phoneNumber')
  },
})

export const Queries = queryType({
  definition(t) {
    t.field('user', {
      type: User,
      args: {
        name: stringArg(),
        status: arg({ type: 'StatusEnum' }),
      },
    })
    t.list.field('users', {
      type: list(User),
      args: {
        ids: list(intArg()),
      },
      resolve(_, { ids }, ctx) {
        return ctx.prisma.user.findMany({})
      },
    })
  },
})

// export const Mutations = mutationType({
//   definition(t) {
//     t.field('User', {})
//   },
// })
