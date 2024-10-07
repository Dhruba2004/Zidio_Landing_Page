import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    
<section
      className="flex flex-col object-cover max-h-screen dark:bg-zinc-800"
      style={{ backgroundImage: `url('/about-bg.jpg')` }}
    >
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 p-4 md:p-8 lg:p-16">
        <div className="flex justify-center mt-8 md:mb-[12rem]">
          <Image
            className=" w-full max-w-xs md:max-w-md lg:max-w-lg"
            src={"/about.png"}
            height={530}
            width={530}
            alt="intro"
          />
        </div>
        <div className="flex flex-col gap-3 mb-[1rem] md:mt-[4rem]">
          <h2 className="text-blue-800 text-lg md:text-xl lg:text-2xl">Software Development & Consultancy</h2>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-black font-bold">
            Who we are and What we do?
          </h1>
          <p className="text-gray-500 mt-4 text-sm md:text-base lg:text-lg">
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing
            software development company where innovation meets expertise. Our
            team of skilled developers and creative thinkers specializes in
            turning complex ideas into user-friendly digital solutions. From
            custom software to cutting-edge mobile apps, we're dedicated to
            engineering excellence and pushing the boundaries of technology. At
            Zidio, we believe in the power of collaboration, continuous
            learning, and adapting to the ever-evolving digital landscape. We're
            not just developers; we're visionaries committed to delivering
            impactful software solutions that drive success for businesses
            globally. Stay connected with us for insights into our
            groundbreaking projects, tech trends, career opportunities, and our
            journey in shaping the future of technology.
          </p>
        </div>
      </div>
    </section>
    
    
  );
}

export default AboutPage;
