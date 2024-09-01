import { Metadata } from "next";
import { Kanit } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from '@/components/footer/Footer' 
import ClientProvider from "@/hooks/clientProvider";


const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

export const metadata: Metadata = {
  title: {
    absolute: "Clothing Savehub",
    template: "Savehub Clothing Products deals",
  },
  description: "Loot deals on all Clothing Products Savehub Save hub savehubonline UP to 80% off on all clothing products",
};


export default function ClothingLayout({
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
