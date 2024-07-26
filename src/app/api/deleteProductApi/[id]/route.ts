import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../../utils/db';
import Product from '../../../../models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function DELETE(req: NextRequest, { params }: any): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();

        const productId = params.id;

        // Find the product by ID and delete it
        const deletedProduct = await Product.findByIdAndDelete(productId);

        // Check if the product was found and deleted
        if (!deletedProduct) {
            return new NextResponse(JSON.stringify({ message: 'Product not found' }), { status: 404 });
        }

        // Return a success message
        return new NextResponse(JSON.stringify({ message: 'Product deleted successfully' }), { status: 200 });

    } catch (error) {
        console.error('Error deleting product:', error);
        return new NextResponse(JSON.stringify({ message: 'Error deleting product' }), { status: 500 });
    }
}