import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Product from '@/models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();

        // Find all products with category 'Accessories'
        const products = await Product.find({ category: 'Accessories' });

        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error('Error fetching accessories products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching accessories products' }), { status: 500 });
    }
}