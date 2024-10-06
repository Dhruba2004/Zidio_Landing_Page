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
  
<section className="flex flex-col h-[90vh] items-center justify-center p-10">
    <div className="flex flex-col gap-[5rem]">
        <div className="flex flex-col">
        <h2
        className="text-2xl dark:text-white text-center mt-2"
        style={{ color: "blueviolet" }}
      >
        What We Provides?
      </h2>
      <h1 className="text-4xl text-center font-bold relative top-[6rem]">
        Provide Interective IT Solution & Business Services
      </h1> 
        </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 relative top-[12rem] mx-auto">
        {serviceInfo.map((item, index) => (
           
          <div className="flex justify-center items-center flex-col gap-5 shadow-md h-[200px] w-[300px] p-10 max-w-sm rounded-lg cursor-pointer" key={index} style={{border:"1px solid violet"}}> 
          <Image width={50} height={50} alt="icon" src={item.icon}/>
            <h2 className="text-center dark:text-white text-black">{item.title}</h2>
            <p className="text-gray-500 text-center mr-4">{item.description}</p>
        <Button className="mt-3">Learn More</Button>

          </div>
        ))}
      </div> 
    </div>
     
      
    </section>
  
    
  );
}

export default ServicePage;
