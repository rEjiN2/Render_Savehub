import type { Metadata } from "next";
import { Inter, Kanit } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/footer/Footer' 
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

export const metadata: Metadata = {
  title: "Savehub",
  description: "Savehub save your money loot deals everywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico'  />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7754509675429128"
     crossOrigin="anonymous"></script>
     
     <meta name="google-adsense-account" content="ca-pub-7754509675429128"></meta>
      <meta name="savehub" content="Lootdeals in save save upto 90% off on all product" />
      
     
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content="savehub, deals, discounts, save money, loot deals, offers, shopping" />
      <meta name="author" content="Savehub Team" />
      <meta property="og:title" content="Savehub - Save Your Money"/>
      <meta property="og:description" content="Savehub helps you save money with loot deals and discounts on various products."/>
      <meta property="og:image" content="/path/to/image.jpg"/>
      <meta property="og:url" content="https://www.savehub.com"/>
      <meta property="og:type" content="website"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@savehub"/>
      <meta name="twitter:title" content="Savehub - Save Your Money"/>
      <meta name="twitter:description" content="Savehub helps you save money with loot deals and discounts on various products."/>
      <meta name="twitter:image" content="/path/to/image.jpg"/>
      <link rel="canonical" href="https://www.savehub.com"/>
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
