import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectURL = new URL('/', request.url) // redirecionando para rota raiz

  return NextResponse.redirect(redirectURL, {
    // salvando o token nos cookies
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}
