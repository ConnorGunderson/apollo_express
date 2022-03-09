import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './schema/index'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(__dirname, '..', './generated/nexus-typegen.graphql'),
    schema: join(__dirname, '..', './generated/schema.graphql'),
  },
})