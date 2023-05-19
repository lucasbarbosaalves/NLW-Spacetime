import { cookies } from 'next/headers'
import decode from 'jwt-decode'

interface User {
  sub: string
  name: string
  avatarUrl: string
}

export function getUser(): User {
  const token = cookies().get('token')?.value // pegando somente o valor do token no cookie

  if (!token) {
    // se o token não existe
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)

  return user
}
