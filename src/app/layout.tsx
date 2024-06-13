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
       <Head>
        <link rel='icon' href='/favicon.ico'  />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7754509675429128"
     crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-7754509675429128"></meta>
      <meta name="savehub" content="Lootdeals in save save upto 90% off on all product" />
      </Head>
      
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
