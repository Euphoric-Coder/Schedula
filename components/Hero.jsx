import React from "react";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row relative overflow-hidden justify-around items-center font-mono px-6 py-8 md:px-10 md:py-10 lg:px-20 lg:py-16 h-fit gap-8 md:gap-15">
      {/* Floating Pulsing Circles */}
      <div className="absolute top-12 left-12 w-44 h-44 bg-gradient-to-br from-yellow-300 to-pink-400 rounded-full filter blur-2xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-56 h-56 bg-gradient-to-br from-red-400 to-purple-500 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-gradient-to-br from-pink-300 to-indigo-300 rounded-full filter blur-2xl opacity-40 animate-pulse"></div>

      {/* Text Section */}
      <div className="relative z-12 w-full md:w-1/2 space-y-6 text-center md:text-left px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 leading-tight">
          Manage Your Time{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-green-400 font-extrabold">
            Effectively
          </span>
        </h1>

        {/* Typewriter Effect */}
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-500">
          <Typewriter
            options={{
              strings: [
                "Create, Manage, and Share Your Schedule",
                "Streamline Your Appointments",
                "Boost Productivity and Stay Organized",
                "Simplify Scheduling with Ease",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700 opacity-90 leading-relaxed text-justify">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 font-bold">
            Schedulrr{" "}
          </span>
          makes scheduling simple and efficient. Easily{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold">
            manage your availability
          </span>
          , create personalized events, and share links effortlessly.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-bold">
            Optimize your time{" "}
          </span>
          and stay organized with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-500 font-bold">
            intuitive tools
          </span>
          that help you avoid missed appointments and streamline your workflow.
        </p>

        {/* Call to Action Button */}
        <div className="mt-6">
          <Link href={"/dashboard"}>
            <Button className="px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg md:text-xl font-bold text-white rounded-full shadow-xl bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 hover:from-green-500 hover:via-teal-500 hover:to-blue-500 transition-transform transform hover:scale-105 active:scale-95 duration-300">
              Start Scheduling Now
            </Button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-12 w-full md:w-1/2 justify-center md:block hidden">
        <Image
          src="/poster1.png"
          alt="Scheduling Illustration"
          width={600}
          height={400}
          className="transition-transform transform hover:scale-110 duration-500"
        />
      </div>
    </div>
  );
};

export default Hero;
