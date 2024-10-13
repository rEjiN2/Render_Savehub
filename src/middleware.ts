import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios';

// List of allowed origins (you can expand this)
const allowedOrigins = ['https://www.savehubonline.com', 'https://savehubonline.com' ,"http://localhost:3001","http://localhost:3000"]

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Check for API key
    const apiKey = request.headers.get('x-api-key')
    if (apiKey !== process.env.NEXT_PUBLIC_API_KEY) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'Invalid API key' }),
        { status: 401, headers: { 'content-type': 'application/json' } }
      )
    }

    // Check origin
    const origin = request.headers.get('origin')
    if (origin && !allowedOrigins.includes(origin)) {
      return new NextResponse(
        JSON.stringify({ success: false, message: 'CORS error: Invalid origin' }),
        { status: 403, headers: { 'content-type': 'application/json' } }
      )
    }

    let clientIp = request.headers.get('x-forwarded-for') || request.ip || '127.0.0.1';
    clientIp = clientIp.split(',')[0].trim();
    console.log(clientIp,request.headers.get('x-forwarded-for'),"ip");
    
    if (clientIp === '::1' || clientIp === '127.0.0.1' || clientIp.startsWith('192.168.') || clientIp.startsWith('10.')) {
      console.log('Local development detected, skipping country check');
      return NextResponse.next();
    }

    try {
      const response = await axios.get(`https://ipinfo.io/${clientIp}?token=${process.env.IPINFO_TOKEN}`);
      const country = response.data.country;
      console.log(country,"country");
      
    } catch (error) {
      console.log(error);
      
    }
    // Rate limiting (simple implementation)
    // const ip = request.ip ?? '127.0.0.1'
    // const rateLimit = request.headers.get('x-rate-limit')
    // if (rateLimit && parseInt(rateLimit) > 100) { // Example: 100 requests per minute
    //   return new NextResponse(
    //     JSON.stringify({ success: false, message: 'Rate limit exceeded' }),
    //     { status: 429, headers: { 'content-type': 'application/json' } }
    //   )
    // }

    // If all checks pass, allow the request
    return NextResponse.next()
  }
}

export const config = {
  matcher: '/api/:path*',
}