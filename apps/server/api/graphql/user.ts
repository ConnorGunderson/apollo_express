import {
  inputObjectType,
  intArg,
  list,
  mutationType,
  nonNull,
  objectType,
  queryType,
} from 'nexus'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.int('id')
    t.string('email')
    t.string('name')
    t.string('role')
    t.string('phoneNumber')
  },
})

const UserInput = nonNull(
  inputObjectType({
    name: 'UserInput',
    definition(t) {
      t.nonNull.string('email')
      t.nonNull.string('name')
      t.string('phoneNumber')
      t.string('role')
    },
  })
)

export const UserQueries = queryType({
  definition(t) {
    t.field('user', {
      type: User,
      args: { id: nonNull(intArg()) },
      resolve(_, { id }, ctx) {
        return ctx.prisma.user.findFirst({ where: { id: { equals: id } } })
      },
    })
    t.field('users', {
      type: list(User),
      args: { ids: nonNull(list(nonNull(intArg()))) },
      resolve(_, { ids }, ctx) {
        return ctx.prisma.user.findMany({ where: { id: { in: ids } } })
      },
    })
  },
})

export const UserMutations = mutationType({
  definition(t) {
    t.field('createUser', {
      type: User,
      args: {
        data: UserInput,
      },
      resolve(_, { data }, ctx) {
        return ctx.prisma.user.create({ data })
      },
    })
    t.field('updateUser', {
      type: User,
      args: {
        id: nonNull(intArg()),
        data: UserInput,
      },
      resolve(_, { data, id }, ctx) {
        return ctx.prisma.user.update({ where: { id }, data })
      },
    })
  },
})
