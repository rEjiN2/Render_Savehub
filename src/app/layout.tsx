import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/footer/Footer' 
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

export const metadata: Metadata = {
  title: {
    default:"Savehub",
    template:"Loot deals on all Famous sites"
  },
  description: "Savehub save your money loot deals everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel='icon' href='/favicon.ico'  />
        <Script 
        async
        id="adsbygoogle-init"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7754509675429128`}
        crossOrigin="anonymous"
      strategy="afterInteractive"
        />
      </Head>
       <head>
       
     
       <meta name="google-adsense-account" content="ca-pub-7754509675429128"></meta>
       <meta name="savehub" content="Lootdeals in save save upto 90% off on all product" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="savehub, save hub ,deals, discounts, save money, loot deals, offers, shopping" />
      <meta name="author" content="Savehub Team" />
      <meta property="og:title" content="Savehub - Save Your Money with exclusive discounts and deals"/>
      <meta property="og:description" content="Savehub helps you save money with loot deals and discounts on various products."/>
      <meta property="og:image" content="https://www.savehubonline.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbannersave.dec8c1d6.jpg&w=1920&q=75"/>
      <meta property="og:url" content="https://www.savehubonline.com"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@savehubonline"/>
      <meta name="twitter:title" content="Savehub - Save Your Money"/>
      <meta name="twitter:description" content="Savehub helps you save money with loot deals and discounts on various products."/>
      <meta name="twitter:image" content="https://www.savehubonline.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbannersave.dec8c1d6.jpg&w=1920&q=75"/>
      <link rel="canonical" href="https://www.savehubonline.com"/>
      <meta name="robots" content="index, follow" />
      </head>
      
      <body className={kanit.className}>
       <div  className="bg-[url('/skybg.jpg')] h-screen flex flex-col justify-between  overflow-auto">
       <div className="pt-10 pl-10 pr-10">
            <Navbar />
            {children}
          </div>
        <Footer/>
        </div>
        </body>
    </html>
  );
}
