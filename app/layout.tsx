import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"] });
import { ThemeProvider } from "next-themes";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Zidio Development",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <ThemeProvider attribute="class">
            <Header/>
            {children}
            <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
