"use client"
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { useTheme } from "next-themes";

const Services = () => {
  const { theme, setTheme } = useTheme();
  const cardOptions = [
    {
      id: 1,
      image: "/graphic_design.png",
      Title: "Graphic Design",
      subTitle:
        "Monotonectally synergize grants to business visualize strategic infomediaries",
    },
    {
      id: 2,
      image: "/cloud.png",
      Title: "Cloud Solutions",
      subTitle:
        "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.",
    },
    {
      id: 3,
      image: "/web.png",
      Title: "Web Development",
      subTitle:
        "Design and build responsive, high-performance websites using the latest web technologies.",
    },
    {
      id: 4,
      image: "/digital.png",
      Title: "Digital Marketing",
      subTitle:
        "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
    },
    {
      id: 5,
      image: "/3d_vector.png",
      Title: "3D Vector Illustration",
      subTitle:
        "Monotonectally synergize grants to business visualize strategic infomediaries .",
    },
    {
      id: 6,
      image: "/hosting.png",
      Title: "Hosting Services",
      subTitle:
        "Monotonectally synergize grants to business visualize strategic infomediaries.",
    },
  ];
  return (
    <section className="p-4 sm:p-6 md:p-10 h-auto flex justify-center items-center object-cover" style={{backgroundImage: `url('/bg.png')`}}>
  <div className="flex flex-col justify-center items-center mx-auto">
    <h2 className="text-lg sm:text-xl text-white">IT Support For Business</h2>
    <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl text-white text-center">What we are Offering</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5 mx-auto">
      {cardOptions.map((item, index) => (
         <BackgroundGradient key={index} className={`flex flex-col items-center justify-center max-w-xs sm:max-w-sm rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 h-[350px] w-full gap-5 cursor-pointer ${theme ==='light' ? 'bg-white':'bg-zinc-900'}`}>
          <Image height={50} width={50} src={item.image} alt="image" />
          <h2 className="font-bold text-lg sm:text-xl text-black dark:text-white">{item.Title}</h2>
          <p className="text-center mt-4 text-gray-500 dark:text-white">
            {item.subTitle}
          </p>
          <div className="rounded-full px-5 py-3">
            <Image height={40} width={40} src={'/right-arrow.gif'} alt="icon" />
          </div>
        </BackgroundGradient>
      ))}
    </div>
  </div>
</section>

  );
};

export default Services;
