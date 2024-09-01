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
         console.log(category,"===cat===");
         
         const pipeline = [
            {
              $match: {
                category: { $regex: new RegExp(category, 'i') }
              }
            },
            {
                $sort:{
                    createdAt:-1
                }
            }
          ];
          
          // Find all products where category matches case-insensitively
          const products = await Product.aggregate(pipeline);
          

        console.log(products,"===pro======");
        

        return new NextResponse(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error('Error fetching  products:', error);
        return new NextResponse(JSON.stringify({ error: 'Error fetching  products' }), { status: 500 });
    }
}