import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function ServicePage() {
  const serviceInfo = [
    {
      id: 1,
      icon: "/cloud-service.png",
      title: "Cloud Services",
      description:
        "Deliver scalable cloud solutions to enhance your business’s flexibility and operational efficiency.",
    },
    {
      id: 2,
      icon: "/it.png",
      title: "IT Management",
      description:
        "Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.",
    },
    {
      id: 3,
      icon: "/software-renew.png",
      title: "Software Renew",
      description:
        "Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.",
    },
    {
      id: 4,
      icon: "/machine-learning.png",
      title: "Machine Learning",
      description:
        "Develop and implement machine learning models to automate processes and drive intelligent decision-making.",
    },
    {
      id: 5,
      icon: "/digital-marketing.png",
      title: "Digital Marketing",
      description:
        "Boost your online presence with tailored digital marketing strategies that drive engagement and growth.",
    },
    {
      id: 6,
      icon: "/web-development.png",
      title: "Web Development",
      description:
        "Design and build responsive, high-performance websites using the latest web technologies.",
    },
    {
      id: 7,
      icon: "/cyber.png",
      title: "Cyber Security",
      description:
        "Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.",
    },
    {
      id: 8,
      icon: "/data-analytic.png",
      title: "Data Analytics",
      description:
        "Transform raw data into valuable insights, enabling informed and strategic business decisions.",
    },
  ];
  return (
  
<section className="flex flex-col min-h-screen items-center justify-center p-4 md:p-10">
  <div className="flex flex-col gap-10 md:gap-12">
    <div className="flex flex-col">
      <h2
        className="text-xl md:text-2xl dark:text-white text-center mt-4 md:mt-8" 
        style={{ color: "blueviolet" }}
      >
        What We Provides?
      </h2>
      <h1 className="text-2xl md:text-4xl text-center font-bold mt-4 md:mt-8"> 
        Provide Interactive IT Solution & Business Services
      </h1>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-12 mt-8 md:mt-12 mx-auto"> {/* Adjusted margin-top */}
      {serviceInfo.map((item, index) => (
        <div
          className="flex justify-center items-center flex-col gap-5 shadow-md h-auto w-full max-w-xs p-6 md:p-10 rounded-lg cursor-pointer"
          key={index}
          style={{ border: "1px solid violet" }}
        >
          <Image width={50} height={50} alt="icon" src={item.icon} />
          <h2 className="text-center dark:text-white text-black">{item.title}</h2>
          <p className="text-gray-500 text-center">{item.description}</p>
          <Button className="mt-3">Learn More</Button>
        </div>
      ))}
    </div>
  </div>
</section>


  
    
  );
}

export default ServicePage;
