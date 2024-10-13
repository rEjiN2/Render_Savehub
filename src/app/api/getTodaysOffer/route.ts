import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Product from '@/models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Connect to the database 
        await connect();
        const country = req.headers['x-user-country'] || 'Unknown';
        console.log(country,"country");
        
        
        // Query for products with discount > 70, sorted by _id in descending order, limited to 8
        const products = await Product.find({ discount: { $gt: 70 } })
            .sort({ _id: -1 });

        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error('Error fetching discounted products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching discounted products' }), { status: 500 });
    }
}