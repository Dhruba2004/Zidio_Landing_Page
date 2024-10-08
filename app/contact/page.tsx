import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { AlarmClock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function ContactPage() {
  return (
    <section className="h-screen">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl mt-5 font-bold">Contact Us</h1>
        <div className="shadow-md h-[600px] max-w-[1080px] grid grid-cols-1 lg:grid-cols-2 gap-[12rem] px-5 mx-auto">
          <div className="">
            <h1 className="text-3xl sm:text-5xl  font-bold p-[3rem]">Write to Us Anytime</h1>
            <div>
              <div className="flex gap-4 max-w-2xl ml-[1rem]">
                <Input type="text" placeholder="Your Name" />
                <Input type="text" placeholder="Enter Email" />
              </div>
              <div className="flex gap-4 max-w-2xl ml-[1rem] mt-[3rem]">
                <Input type="text" placeholder="Phone Number" />
                <Select>
                  <SelectTrigger className="">
                    <SelectValue placeholder="Subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Web Development</SelectItem>
                    <SelectItem value="dark">App Development</SelectItem>
                    <SelectItem value="system">UIUX</SelectItem>
                    <SelectItem value="system">Data Science</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Textarea
                placeholder="Type your message here."
                className="lg:w-full lg:ml-[1rem] mt-[3rem] max-w-lg ml-[1rem]"
              />

              <Button className="max-w-2xl mt-[2rem] ml-[3rem]">
                Send Message
              </Button>
            </div>
          </div>
          <div
            className="h-[450px] w-[350px] mt-[2rem] p-9 rounded-lg hidden lg:block"
            style={{ backgroundImage: `url('/contact--bg.png')` }}
          >
            <h1 className="text-white text-2xl font-bold m-[2rem]">
              Don’t Forget to Contact Us
            </h1>
            <div className="flex flex-col gap-[1rem]">
              <div className="flex gap-[2rem]">
                <div
                  className="rounded-full px-4 py-2 flex justify-center items-center"
                  style={{ border: "1px solid white" }}
                >
                  <Phone className="text-white text-2xl" />
                </div>
                <div className="text-white flex gap-2 flex-col">
                  <h2>Call Us</h2>
                  <h2 className="font-semibold">+918455807965</h2>
                </div>
              </div>
              <div className="flex gap-[2rem]">
                <div
                  className="rounded-full px-4 py-2 flex justify-center items-center"
                  style={{ border: "1px solid white" }}
                >
                  <Mail className="text-white text-2xl" />
                </div>
                <div className="text-white flex gap-2 flex-col">
                  <h2>Send E-Mail</h2>
                  <h2 className="font-semibold">support@zidio.in</h2>
                </div>
              </div>
              <div className="flex gap-[2rem]">
                <div
                  className="rounded-full px-4 py-2 flex justify-center items-center"
                  style={{ border: "1px solid white" }}
                >
                  <AlarmClock className="text-white text-2xl" />
                </div>
                <div className="text-white flex gap-2 flex-col">
                  <h2>Office Hours</h2>
                  <h2 className="font-semibold">9.00 AM to 5.00 PM</h2>
                </div>
              </div>
            </div>
            
            

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
