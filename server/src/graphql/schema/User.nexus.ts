import { arg, intArg, list, objectType, queryType, stringArg } from 'nexus'
import { Node } from './shared.nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.implements(Node)
    t.string('name')
    t.int('phoneNumber')
    t.string('email')
  },
})

export const Query = queryType({
  definition(t) {
    t.field('User', {
      type: User,
      args: {
        name: stringArg(),
        status: arg({ type: 'StatusEnum' }),
      },
    })
    t.field('Users', {
      type: list(User),
      args: {
        ids: list(intArg()),
      },
    })
  },
})
