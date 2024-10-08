import { NextRequest, NextResponse } from 'next/server';
import connect from '@/utils/db';
import Product from '@/models/Product'; // Adjust the path as needed

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Connect to the database
        await connect();
        const { searchParams } = new URL(req.url);
        const category = searchParams.get('category');
       

        const pipeline: any[] = [];

        // If category is provided, add it to the pipeline
        if (category) {
            pipeline.push({
                $match: {
                    category: { $regex: new RegExp(category, 'i') }
                }
            });
        }

        // Add the sorting stage
        pipeline.push({
            $sort: {
                createdAt: -1 as 1 | -1 // Ensuring type compatibility
            }
        });

        // Find all products where category matches case-insensitively
        const products = await Product.aggregate(pipeline);

        

        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error('Error fetching products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching products' }), { status: 500 });
    }
}
