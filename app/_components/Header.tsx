"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeTogglebutton from "@/components/ui/ThemeToggle";
import ShinyButton from "@/components/ui/shiny-button";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

function Header() {
  const { theme, setTheme } = useTheme();
  const [isSticky, setIsSticky] = useState(false);
  const MenuOptions = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY; // Get current scroll position
      setIsSticky(scrollY > 50); // Set sticky based on a threshold (adjust as needed)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);
  return (
    <nav
      className={`flex justify-between sticky top-0 p-5 px-8 shadow-md z-50 text-black dark:text-white ${
        isSticky ? "bg-white dark:bg-black shadow-lg" : ""
      }`}
    >
      <div className="flex gap-3 items-center">
        <Link href={'/'}>
        <Image
          src = {theme === 'light'? "/logo.png" : "/zidio-header-dark.png"}
          alt="logo"
          height={150}
          width={150}
        />
        </Link>
       
      </div>
      <div className="lg:flex gap-5 items-center hidden ">
        {MenuOptions.map((item, index) => (
          <ul className="flex gap-5 items-center " key={index}>
            <li className="hover:text-violet-700 transition-all">
              <Link className="text-xl" href={item.path}>
                {item.name}
              </Link>
            </li>
          </ul>
        ))}
      </div>
      <div className="flex gap-3">
        <UserButton afterSwitchSessionUrl="/"/>
        <ShinyButton className="lg:block hidden">Get Quote</ShinyButton>
        <ThemeTogglebutton className="top-2 right-6"/>

        <Sheet>
          <SheetTrigger className="lg:hidden sm:block">
            {" "}
            <AlignJustify height={30} width={30}/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-7 justify-center items-center mt-[10rem]">
                  {MenuOptions.map((item, index) => (
                    <ul className="flex gap-5 items-center" key={index}>
                      <li className="">
                        <Link
                          className="text-3xl text-black dark:text-white  dark:hover:text-violet-700  hover:text-violet-700 transition-all"
                          href={item.path}
                        >
                          {item.name}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        {/* <Button>Get a Quote</Button> */}
      </div>
    </nav>
  );
}

export default Header;
