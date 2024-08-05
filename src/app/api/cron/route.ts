import { NextRequest, NextResponse } from 'next/server';
import connect from '../../../utils/db';
import Product from '../../../models/Product';
import axios from 'axios';
import cheerio from 'cheerio';

export const dynamic = 'force-dynamic';

interface Product {
    name: string;
    category: string;
    subcategory: string | null;
    price: number;
    discount: number;
    link: string | undefined;
    image: string | undefined;
}

async function scrapeSite(): Promise<Product[]> {
    const url = `https://www.offertag.in`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const results: Product[] = [];

    $('.featured-item-container').each((i, elem) => {
        const title = $(elem).find('.deal-title h4').text().trim();
        const category = $(elem).find('.rightDealTag').last().text().trim();
        const image = $(elem).find('.dealImage').attr('data-src');
        const oldPrice = $(elem).find('.old-price span').text().replace('₹', '').replace(',', '').trim();
        const newPrice = $(elem).find('.new-price span').text().replace('₹', '').replace(',', '').trim();
        const discount = $(elem).find('.discount span').text().replace('%', '').replace('Off', '').trim();
        const link = $(elem).find('.shop-btn a').attr('data-alt-href');

        let subCategory: string | null = null;
        if (category.toLowerCase() === 'clothing') {
            const lowerTitle = title.toLowerCase();
            if (lowerTitle.includes('women') || lowerTitle.includes('womens')) {
                subCategory = 'Women';
            } else if (lowerTitle.includes('men') || lowerTitle.includes('mens')) {
                subCategory = 'Men';
            } else {
                subCategory = 'Men'; // Default to 'Men' if neither is found
            }
        }

        results.push({
            name: title,
            category,
            subcategory: subCategory,
            price: parseFloat(newPrice),
            discount: parseFloat(discount),
            link,
            image
        });
    });

    return results;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
    try {
        // Connect to the database
        if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
            return new NextResponse(JSON.stringify({ error: 'Unauthorized Access' }), {
                status: 401
            });
        }
        await connect();

        // Scrape the site
        const scrapedProducts = await scrapeSite();

        // Prepare bulk operations
        const bulkOps = scrapedProducts.map(product => ({
            updateOne: {
                filter: { link: product.link },
                update: { $setOnInsert: product },
                upsert: true
            }
        }));

        // Perform bulk write operation
        const result = await Product.bulkWrite(bulkOps);

        return new NextResponse(JSON.stringify({ 
            message: `Scraping and database update completed`,
            upsertedCount: result.upsertedCount,
            modifiedCount: result.modifiedCount,
            totalScraped: scrapedProducts.length
        }), {
            status: 200
        });
    } catch (error) {
        console.error('Error scraping and saving products:', error);
        return new NextResponse(JSON.stringify({ error: 'An error occurred while scraping and saving products' }), {
            status: 500
        });
    }
}
