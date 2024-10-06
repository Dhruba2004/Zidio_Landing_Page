"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";

function Footer() {
  const { theme, setTheme } = useTheme();
  return (
    <footer className="text-gray-400 py-12 max-h-screen">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
    <div className="relative sm:right-0 lg:right-[8rem] flex flex-col gap-5">
      <Link href={"/"}>
        <Image
          src={theme === 'light'? "/logo.png" : "/zidio-dark.png"}
          alt="logo"
          height={150}
          width={150}
          className="w-34 h-10"
        />
      </Link>
      <p className="mb-7 text-sm sm:text-base lg:text-lg">
        At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.
      </p>
      <Button className="text-sm sm:text-base">Discover More</Button>
    </div>
    <div>
      <h2 className="dark:text-white text-lg font-semibold mb-4">Quick Links</h2>
      <ul className="flex flex-col gap-5">
        <li>
          <Link href="#" className="dark:hover:text-white transition-colors duration-300">
            About
          </Link>
        </li>
        <li>
          <Link href="#" className="dark:hover:text-white transition-colors duration-300">
            Our Team
          </Link>
        </li>
        <li>
          <Link href="#" className="dark:hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </li>
        <li>
          <Link href="#" className="dark:hover:text-white transition-colors duration-300">
            Careers
          </Link>
        </li>
      </ul>
    </div>
    <div>
      <h2 className="dark:text-white text-lg font-semibold mb-4">Our Services</h2>
      <div className="flex space-y-4 flex-col">
        <Link href="/services" className="dark:hover:text-white transition-colors duration-300">
          IT Solutions
        </Link>
        <Link href="/services" className="dark:hover:text-white transition-colors duration-300">
          Cyber Security
        </Link>
        <Link href="/services" className="dark:hover:text-white transition-colors duration-300">
          Digital Marketing
        </Link>
        <Link href="#" className="dark:hover:text-white transition-colors duration-300">
          Machine-Learning
        </Link>
        <Link href="/services" className="dark:hover:text-white transition-colors duration-300">
          Cloud Services
        </Link>
      </div>
    </div>
    <div className="flex flex-col gap-3">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">Newsletter</h2>
      <h2 className="text-sm sm:text-base lg:text-lg">Subscribe to Latest Newsletter</h2>
      <Input type="email" placeholder="Email" className="text-sm sm:text-base" />
      <Button className="mt-4 text-sm sm:text-base">Subscribe</Button>
    </div>
  </div>
  <p className="text-center text-xs sm:text-sm lg:text-base pt-12">
    © 2024 Zidio Development. Designed by Team ZIDIO
  </p>
</footer>

  );
}

export default Footer;
