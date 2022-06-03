import { useQuery } from '@apollo/client'
import { UsersDocument } from '../lib/schema/generated'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'
export function Index() {
  const { user } = useAuth0()
  const { data, loading, refetch, error } = useQuery(UsersDocument, {
    variables: {
      ids: [],
    },
  })
  if (loading) return <div>loading...</div>
  if (error)
    return (
      <>
        <button onClick={() => refetch()}>refetch</button>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </>
    )

  return (
    <div className="flex-1 h-100%">
      <button onClick={() => refetch()}>refetch</button>
      <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default withAuthenticationRequired(Index)
