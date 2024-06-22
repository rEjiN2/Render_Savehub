import { Metadata } from "next";
import { Kanit } from "next/font/google";




const kanit = Kanit({ subsets: ["latin"], weight: "500"  });

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy Savehub",
    template: "Savehub Accessories Products deals",
  },
  description: "Loot deals on all Accessories Products Savehub Save hub savehubonline UP to 80% off on all electronic products",
};


export default function PrivacyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
            {children}
    </>
  );
}
