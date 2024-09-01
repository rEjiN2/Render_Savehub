import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Product from '@/models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';


export async function GET(req: NextRequest): Promise<NextResponse> {
    try{
        await connect();

        const categories = await Product.distinct("category")
        return new NextResponse(JSON.stringify(categories), { status: 200 })
    }catch(error){
        console.error('Error fetching electronics products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching electronics products' }), { status: 500 });
    }
}