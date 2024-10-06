import { Button } from "@/components/ui/button";
import Hero from "./_components/Hero";
import Features from "./_components/Features";
import Services from './_components/Services'
import Team from './_components/Team'
import Intro from "./_components/Intro";

export default function Home() {
  return (
    <main className="flex flex-col bg-gradient-to-r from-pink-500/30 to-sky-500/30 dark:bg-blue-950">
      <Hero/>
      <Features/>
      <Intro/>
      <Services/>
      <Team/>
      </main>
    
  );
}
