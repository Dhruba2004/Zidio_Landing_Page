import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Services from './_components/Services'
import Team from './_components/Team'
import Intro from "./_components/Intro";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Testimonial from "./_components/Testimonials";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-r from-pink-500/30 to-sky-500/30 dark:bg-blue-950">
      <Hero/>
      <Features/>
      <Intro/>
      <Services/>
      <Testimonial/>
      <Team/>
      </main>
    
  );
}
