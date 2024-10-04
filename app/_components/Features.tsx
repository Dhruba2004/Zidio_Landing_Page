import React from "react";
import { BiSupport } from "react-icons/bi";
import { RiTeamLine } from "react-icons/ri";
import { PiSuitcaseSimple } from "react-icons/pi";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";

function Features() {
  const cardOptions = [
    {
      id: 1,
      icon: PiSuitcaseSimple,
      Title: "3+ Year Experience",
      subTitle:
        "Over 3 years of expertise delivering unparalleled solutions and insights for your success ",
    },
    {
      id: 2,
      icon: RiTeamLine,
      Title: "Dedicated Members ",
      subTitle:
        "Passionate team members dedicated to exceeding expectations and achieving mutual success",
    },
    {
      id: 3,
      icon: BiSupport,
      Title: "Valuable Supports",
      subTitle:
        "Tailored support and guidance ensuring reliability and innovation every step of the way ",
    },
  ];

  return (
    <section className="flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:ml-[12rem] p-5 lg:mx-[2rem] ml-[7rem]">
        {cardOptions.map((item, index) => (
          <NeonGradientCard key={index} className=" h-[350px] w-[350px] max-w-sm items-center justify-center text-center gap-">
            <item.icon className="text-5xl text-blue-400 ml-[8rem] mt-[2rem]" />
            <div className="flex flex-col mt-[2rem]">
            <h2 className="font-bold text-xl">{item.Title}</h2>
            <p className="text-center mt-4 text-gray-500">{item.subTitle}</p>

            </div>
          </NeonGradientCard>
        ))}
      </div>
    </section>
  );
}

export default Features;
