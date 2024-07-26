import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../utils/db';
import Product from '../../../models/Product'; // Assuming you have a Product model

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();

        const formData = await req.formData();
        const name = formData.get('name') as string | null;
        const category = formData.get('category') as string | null;
        const subcategory = formData.get('subcategory') as string | null;
        const price = formData.get('price') ? parseFloat(formData.get('price') as string) : null;
        const discount = formData.get('discount') ? parseFloat(formData.get('discount') as string) : null;
        const link = formData.get('link') as string | null;
        const image = formData.get('image') as string | null;

        // Debugging output
        console.log({
            name, category, subcategory, price, discount, link, image
        }, 'hui');

        // Create a new product using your Mongoose model
        const newProduct = new Product({
            name,
            category,
            subcategory,
            price,
            discount,
            link,
            image
        });

        // Save the product to the database
        await newProduct.save();

        return new NextResponse(JSON.stringify("Product created successfully"), {
            status: 200
        });
    } catch (error) {
        console.error('Error creating product:', error);
        return new NextResponse(JSON.stringify(error), {
            status: 500
        });
    }
}