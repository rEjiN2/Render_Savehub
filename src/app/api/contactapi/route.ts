// pages/api/contactProxy.ts

import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const json = await req.json();
    const { name, email, message } = json;

    // Debugging output
    console.log({ name, email, message });
    const form = new FormData();
    form.append('name', name);
    form.append('email', email);
    form.append('message', message);
    
    console.log(form,"form details");
    
    const response = await fetch('https://script.google.com/macros/s/AKfycbymQEDH-3U6dK_gwfnCQ4vX_cUNCUZz4KDURcIVafAEZWnlxflTpdGRU1wB2H7nhFIPbw/exec', {
        method: 'POST',
        body: form,
        
      });
  
      const data = await response.json();
       console.log(data,"resdata");
       
      return new NextResponse(JSON.stringify(data), {
        status: 200,
      });
  } catch (error) {
    console.error('Error submitting form:', error);
    return new NextResponse(JSON.stringify(error), {
      status: 500,
    });
  }
}
