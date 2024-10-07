"use client"
import React from "react";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import { useTheme } from "next-themes";
import Link from "next/link";

function Hero() {
  const { theme, setTheme } = useTheme();
  return (
    <section className="w-full flex p-[5rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex flex-col gap-5 relative md:bottom-[2rem]">
          <h2 className="pointer-events-none whitespace-pre-wrap text-3xl md:text-4xl lg:text-left mt-10 md:mt-[6rem] text-violet-700 dark:text-white font-semibold bg-gradient-to-b from-black to-gray-300/80 bg-clip-text">
            Software Development & Consultancy
          </h2>
          <div className="flex gap-2">
            {theme ==='light' ?<h1 className="uppercase font-bold text-2xl md:text-3xl">
          Business Innovation Through Technology
        </h1> : <><span className=" uppercase absolute mx-auto flex border w-fit bg-gradient-to-r blur-xl from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl box-content font-extrabold text-transparent select-none">
        Business Innovation Through Technology
       
  </span>
    <h1
        className=" uppercase relative top-0 w-fit h-auto justify-center flex bg-gradient-to-r items-center from-blue-500 via-teal-500 to-pink-500 bg-clip-text text-2xl md:text-3xl font-extrabold text-transparent select-auto">
        Business Innovation Through Technology
        
    </h1></> }
            
          </div>
          <p className="text-gray-500 text-lg md:text-xl dark:text-pink-400">
            Leading Business Evolution with Tailored and Innovative Software
            Solutions for Sustainable Growth
          </p>
          <div className="flex gap-3">
            <ShimmerButton className="dark:text-white cursor-pointer">
              Let's Talk
            </ShimmerButton>
            <ShimmerButton className="dark:text-white cursor-pointer">
              Read More
            </ShimmerButton>
          </div>
          <div className="flex gap-4 items-center ml-4">
            <Link
              className="cursor-pointer"
              href={
                "https://www.facebook.com/people/Zidio-Development/61556709391417/"
              }
            >
              <CiFacebook className="text-3xl md:text-4xl hover:scale-125 transition-all dark:text-blue-500" />
            </Link>
            <Link className="cursor-pointer" href={"https://x.com/zidioDev"}>
              <CiTwitter className="text-3xl md:text-4xl dark:text-blue-500 hover:scale-125 transition-all" />
            </Link>
            <Link
              className="cursor-pointer"
              href={
                "https://www.linkedin.com/company/zidio-development/mycompany/verification/"
              }
            >
              <CiLinkedin className="text-3xl md:text-4xl dark:text-blue-500 hover:scale-125 transition-all" />
            </Link>
            <Link className="cursor-pointer" href={"/"}>
              <CiYoutube className="text-3xl md:text-4xl dark:text-blue-500 hover:scale-125 transition-all" />
            </Link>
          </div>
        </div>
        <div className="hidden lg:block md:ml-[6rem]">
          <Image
            height={500}
            width={500}
            alt="hero"
            src={"/hero.png"}
            className="h-auto max-w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
