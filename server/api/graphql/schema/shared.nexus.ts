import { enumType, interfaceType } from 'nexus'

export const Node = interfaceType({
  name: 'Node',
  definition(t) {
    t.nonNull.id('id', { description: 'Unique identifier for the resource' })
  },
  resolveType: () => null,
})

export const StatusEnum = enumType({
  name: 'StatusEnum',
  members: ['ACTIVE', 'INACTIVE'],
})
