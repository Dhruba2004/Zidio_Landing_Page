"use client";
import { AnimatedTooltip } from "../../components/ui/animated-tooltip";
import React from "react";

export default function Team() {
  const people = [
    {
      id: 1,
      image: "/animesh.jpg",
      name: "Animesh Singh",
      designation: "Full Stack Web Developer",
    },
    {
      id: 2,
      image: "/salama.jpg",
      name: "Salma Husna Salsabila",
      designation: "UI/UX Designer",
    },
    {
      id: 3,
      image: "/chandan.png",
      name: "Chandan Mishra",
      designation: "Data Scientist",
    },
    {
      id: 4,
      image: "/harash.jpg",
      name: "Harsa Dash",
      designation: "Developer Team Lead",
    },
  ];
  return (
    <section className=" h-screen flex justify-center flex-col items-center gap-5 p-6">
      <h1 className="text-7xl font-bold text-blue-900">Dedicated Team</h1>
      <h2 className="text-gray-500 font-bold">Meet Our Dedicated Members For Any Enquery</h2>
      <div className="flex flex-row items-center justify-center w-full gap-3">
        <AnimatedTooltip items={people} />
      </div>
    </section>
  );
}
