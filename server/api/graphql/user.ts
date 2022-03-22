import { objectType, queryType } from 'nexus'

export const UserType = objectType({
  name: 'user',
  definition(t) {
    t.id('id')
  },
})

export const UserQueries = queryType({
  definition(t) {},
})
