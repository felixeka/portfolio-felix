"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#121212]">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 px-4 sm:px-8 lg:px-16">
        {/* Text Section */}
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-700 to-yellow-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Felix",
                1000,
                "Assistant director",
                1000,
                "Photography",
                1000,
                "Script compiler",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#E0BFBF] text-sm sm:text-lg lg:text-xl mb-6">
            I was a theater actor in junior high school
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto rounded-full bg-gradient-to-br from-red-600 to-red-800 hover:bg-red-900 text-white mb-4 sm:mb-0 sm:mr-4"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 py-1 w-full sm:w-auto rounded-full bg-gradient-to-br from-red-600 to-red-800 hover:bg-black text-white"
            >
              <span className="block bg-[#121212] hover:bg-black rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>

        {/* Image Section with RGB Backlight */}
        <div className="col-span-12 sm:col-span-4 place-self-center mt-8 sm:mt-0 relative flex justify-center">
          {/* RGB Glow Effect with Lucifer-Inspired Colors */}
          <div
            className="absolute w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] rounded-full animate-pulse"
            style={{
              background: "linear-gradient(45deg, #3D0F0F, #B81010, #FFB500, #6A0C0C)", // Dark red to gold
              filter: "blur(50px)",
              animation: "rgbPulse 6s ease-in-out infinite",
            }}
          ></div>
          
          {/* Keyframes for RGB Pulse Animation */}
          <style jsx>{`
            @keyframes rgbPulse {
              0% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.1);
              }
              100% {
                transform: scale(1);
              }
            }
          `}</style>

          {/* Image */}
          <div className="relative w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full">
            <Image
              src="/images/paw.png"
              alt="hero image"
              className="rounded-full object-cover"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
