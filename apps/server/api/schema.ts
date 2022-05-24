import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql'

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(process.cwd(), '..', 'generated/nexus-typegen.ts'),
    schema: join(process.cwd(), '..', 'generated/schema.graphql'),
  },
  contextType: {
    module: join(process.cwd(), './context.ts'),
    export: 'Context',
  },
})
