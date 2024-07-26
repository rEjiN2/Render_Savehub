import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../utils/db';
import Product from '../../../../models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function PUT(req: NextRequest, { params }: any): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();

        // Get the product ID from the request parameters
        const productId = params.id;

        // Parse the request body to get updated product data
        const { name, image, category, subcategory, price, discount, link } = await req.json();

        // Find the product by ID and update it
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, image, category, subcategory, price, discount, link },
            { new: true, runValidators: true }
        );

        // Check if the product was found and updated
        if (!updatedProduct) {
            return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
        }

        // Return the updated product
        return new NextResponse(JSON.stringify(updatedProduct), { status: 200 });

    } catch (error) {
        console.error('Error updating product:', error);
        return new NextResponse(JSON.stringify({ message: 'Error updating product' }), { status: 500 });
    }
}