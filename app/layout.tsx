import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {MainNav} from "./components/ui/Navbars/MainNav";
import {Footer} from "./components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URBANESWIM.KE",
  description: "One Stop Swimwear Shop",
};

export default function RootLayout({

  
  children,
}: Readonly<{

  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNav/> 
        {children}
        <Footer />
        </body>
    </html>
  );
}
