// src/middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = [
  'https://ubaidismail.com',
  'https://www.ubaidismail.com',
  'http://localhost:3000'
]

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin')
  
  // Handle requests with no origin
  if (!origin) {
    return NextResponse.next()
  }

  // Check if the origin is allowed
  if (!allowedOrigins.includes(origin)) {
    return new NextResponse(
      JSON.stringify({ message: 'Unauthorized' }),
      {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  // Handle preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200, // Ensure we return 200 for preflight
      headers: {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Max-Age': '86400',
        'Access-Control-Allow-Credentials': 'true',
      },
    })
  }

  const response = NextResponse.next()

  // Add CORS headers for actual request
  response.headers.set('Access-Control-Allow-Origin', origin)
  response.headers.set('Access-Control-Allow-Credentials', 'true')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  return response
}

// Update matcher to be more specific
export const config = {
  matcher: [
    '/api/like-notification',
    '/api/like-notification/:path*'
  ],
}
