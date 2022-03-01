export type Alg = String[]

export async function scramble (): Promise<Alg> {
  return ['R', 'L', 'U', 'D', 'B', 'F']
}
