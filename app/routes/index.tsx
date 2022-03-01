import { useLoaderData } from 'remix'
import type { ReactElement } from 'react'
import type { LoaderFunction } from 'remix'

import { scramble } from '~/utils/scramble.server'
import type { Alg } from '~/utils/scramble.server'

interface LoaderData { scramble: Alg }

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    scramble: await scramble()
  }
  return data
}

export default function Index (): ReactElement {
  const data = useLoaderData<LoaderData>()

  return (
    <div>
      <h1>Scramble</h1>
      <pre>{JSON.stringify(data.scramble)}</pre>
    </div>
  )
}
