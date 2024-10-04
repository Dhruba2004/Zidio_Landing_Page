import React from "react";
import Image from "next/image";
import ShimmerButton from "@/components/ui/shimmer-button";
import Spline from "@splinetool/react-spline";
import { Cover } from "@/components/ui/cover";

function Hero() {
  return (
    <section className="h-[40rem] w-full flex p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-3 ">
        <div className="flex flex-col gap-5 mt-6">
          <h2 className=" pointer-events-none whitespace-pre-wrap text-4xl lg:text-left mt-[6rem] text-gray-700 dark:text-[#fff] font-semibold bg-gradient-to-b from-black to-gray-300/80 bg-clip-text ">
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
        </div>
        <Spline className="hidden md:block" scene="https://prod.spline.design/Lyw0DkVocEUFPAoa/scene.splinecode" />
      </div>
    </section>
  );
}

export default Hero;
