// import { randomScrambleForEvent } from 'cubing/scramble'
import { split } from 'lodash'

export type Alg = String[]

export async function scramble (): Promise<Alg> {
  // const s = await randomScrambleForEvent('333')
  const s = 'R L U D B F'

  return split(s.toString(), ' ')
}
