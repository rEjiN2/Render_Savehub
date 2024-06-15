
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/footer/Footer' 
import ClientProvider from "@/hooks/clientProvider";


const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

// metadata.ts


export const metadata: Metadata = {
  title: {
    absolute: "Electronics Savehub",
    template: "Savehub Electronics Products deals",
  },
  description: "Loot deals on all Electronics Products Savehub Save hub savehubonline UP to 80% off on all electronic products",
};



export default function ElectronicsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClientProvider>
            {children}
   </ClientProvider>

         
  );
}

