"use client";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { useUser } from "@clerk/nextjs";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {user} = useUser();
  return (
    <div>
      {user && <Header />}
      {children}
      {user && <Footer />}
    </div>
  );
}
