import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../utils/db';
import Product from '../../../../models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: any): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();

        const productId = params.id;
        console.log(productId, 'Product ID');

        // Find the product by ID
        const product = await Product.findById(productId);

        // Check if the product was found
        if (!product) {
            return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
        }

        console.log(product, 'prod');

        // Return the fetched product
        return new NextResponse(JSON.stringify(product), { status: 200 });

    } catch (error) {
        console.error('Error fetching product:', error);
        return new NextResponse(JSON.stringify({ message: 'Error fetching product' }), { status: 500 });
    }
}