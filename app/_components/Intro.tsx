import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/ui/shiny-button";
const introInfo = [
  {
    id: 1,
    icon: "/cost.png",
    title: "Cost Effective Solutions",
  },
  {
    id: 2,
    icon: "/member.png",
    title: "Expert & Dedicated Team Members",
  },
  {
    id: 3,
    icon: "/support.png",
    title: "24/7 Free Tehcnical Supports",
  },
  {
    id: 4,
    icon: "/customer-satisfaction.png",
    title: "100% Customers Satisfaction",
  },
];

function Intro() {
  return (
    <section className="p-4 md:p-10 h-auto md:h-[60rem]">
  <div className="flex flex-col md:flex-row gap-8 md:gap-[5rem] justify-between relative bottom-[1vmin]">
    <div className="mt-4 md:mt-[7rem] flex justify-center md:block">
      <Image
        src={"/intro.png"}
        height={530}
        width={530}
        className="block md:h-[630px] md:w-[1730px]"
        alt="intro"
      />
    </div>
    <div className="mt-4 md:mt-[9rem]">
      <h2 className="text-lg md:text-xl text-blue-600 font-bold mt-3">
        Software Development & Services
      </h2>
      <h1 className="text-3xl md:text-5xl font-semibold mt-4">
        Your Reliable Partner for IT Services Dedicated to Your Success
      </h1>
      <p className="text-gray-500 dark:text-gray-200 mt-4 md:mt-8 md:mx-[13rem] md:mr-[-6rem] relative md:right-[13rem]">
        At Zidio, we're your trusted IT services partner, ensuring your
        success with reliable solutions tailored to your business needs.
        Count on us for robust software development, comprehensive IT
        support, and cutting-edge technology solutions that empower your
        business to thrive.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 md:mt-[2rem]">
        {introInfo.map((item, index) => (
          <div className="flex gap-5" key={index}>
            <div className="bg-white rounded-xl py-2 px-5 cursor-pointer hover:scale-125 transition-all flex justify-center items-center">
              <Image height={20} width={40} src={item.icon} alt="icon" />
            </div>
            <h2 className="relative top-4">{item.title}</h2>
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-9">
        <Link href="/about">
          <Button className="w-full">About More</Button>
        </Link>
      </div>
    </div>
  </div>
</section>

  );
}

export default Intro;
