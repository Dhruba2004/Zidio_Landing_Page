import React from "react";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link";

function Hero() {
  return (
    <section className="h-[40rem] w-full flex p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-3 ">
        <div className="flex flex-col gap-5 mt-6">
          <h2 className=" pointer-events-none whitespace-pre-wrap text-4xl lg:text-left mt-[6rem] text-violet-700 dark:text-[#fff] font-semibold bg-gradient-to-b from-black to-gray-300/80 bg-clip-text ">
            Software Development & Consultancy
          </h2>
          <div className="flex gap-2">
          <h1 className="uppercase font-bold text-3xl ">
            Business Innovation Through Technology
          </h1>
          </div>
         
          <p className="text-gray-500 text-xl dark:text-pink-400 ">
            Leading Business Evolution with Tailored and Innovative Software
            Solutions for Sustainable Growth{" "}
          </p>
          <div className="flex gap-3">
            <ShimmerButton className="dark:text-white cursor-pointer">Lets Talk</ShimmerButton>
            <ShimmerButton className="dark:text-white cursor-pointer">Read More</ShimmerButton>
          </div>
          <div className="flex gap-4 items-center ml-[1rem]">
            <Link className="cursor-pointer " href={'https://www.facebook.com/people/Zidio-Development/61556709391417/'}><CiFacebook className="text-4xl hover:scale-125 transition-all dark:text-blue-500"/></Link>
            <Link className="cursor-pointer " href={'https://x.com/zidioDev'}><CiTwitter className="text-4xl dark:text-blue-500 hover:scale-125 transition-all"/></Link>
            <Link className="cursor-pointer " href={'https://www.linkedin.com/company/zidio-development/mycompany/verification/'}><CiLinkedin className="text-4xl dark:text-blue-500 hover:scale-125 transition-all"/></Link>
            <Link className="cursor-pointer " href={'/'}><CiYoutube className="text-4xl dark:text-blue-500 hover:scale-125 transition-all"/></Link>
          

          </div>
        </div>
        <div className="hidden lg:block md:ml-[6rem]">
        <Image
            height={500}
            width={500}
            alt="hero"
            src={"/hero.png"}
            className="h-[700px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
          />
        </div>
        {/* <Spline className="hidden md:block" scene="https://prod.spline.design/Lyw0DkVocEUFPAoa/scene.splinecode" /> */}
      </div>
    </section>
  );
}

export default Hero;
