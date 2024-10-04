"use client"
import React from "react";
import Image from "next/image";
import { BackgroundGradient } from "../../components/ui/background-gradient";

const Services = () => {
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
    <section className="p-6 h-[90rem] flex justify-center items-center object-cover" style={{backgroundImage:`url('/bg.png')`}}>
      <div className="flex-col flex justify-center items-center">
        <h2 className="text-xl text-white">IT Support For Business</h2>
        <h2 className="font-bold text-4xl text-white">What we are Offering</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mr-[2rem] p-5 lg:mx-[2rem] ml-[7rem]">
          {cardOptions.map((item, index) => (
            <BackgroundGradient key={index} className=" flex flex-col items-center justify-center max-w-sm rounded-2xl p-4 sm:p-10 bg-white dark:bg-zinc-900 h-[350px] w-[350px] gap-5 cursor-pointer">
              <Image height={50} width={50} src={item.image} />
              <h2 className="font-bold text-xl">{item.Title}</h2>
              <p className="text-center mt-4 text-gray-500 dark:text-gray-800">
                {item.subTitle}
              </p>

              <div
                className="rounded-full px-5 py-3 dark:hidden"
              >
                <Image height={40} width={40} src={'/right-arrow.gif'} className="darK:bg-transparent"/>
               
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
