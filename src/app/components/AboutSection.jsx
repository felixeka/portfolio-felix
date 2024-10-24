"use client";
import React, { useTransition, useState, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>Theater Performance</li>
        <li>Directing</li>
        <li>Photography</li>
        <li>Stage Management</li>
        <li>Creative Collaboration</li>
        <li>Production Planning</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>Theater and Film Studies</li>
        <li>Photography and Visual Arts</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4 text-gray-100">
        <li>Directing for Theater</li>
        <li>Advanced Photography Techniques</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.2 });

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      className="bg-[#1A1A1D] text-white py-16"
      id="about"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Image Section with RGB Backlight */}
        <motion.div
          className="flex justify-center items-center relative"
          variants={childVariants}
        >
          {/* RGB Glow with Lucifer-inspired colors */}
          <div
            className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] rounded-full animate-pulse"
            style={{
              background: "linear-gradient(45deg, #3D0F0F, #B81010, #FFB500, #6A0C0C)", // Dark red to gold
              filter: "blur(50px)",
              animation: "rgbPulse 6s ease-in-out infinite",
            }}
          ></div>

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

          {/* Circular Image without gradient border */}
          <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] overflow-hidden rounded-full">
            <Image
              src="/images/lix.png"
              layout="fill" // Ensure it fills the parent
              className="rounded-full object-cover" // Make it circular
              alt="About Me Image"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          variants={childVariants}
        >
          <h2 className="text-4xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
            I am a theater performer, photographer, and assistant director with
            a passion for creating compelling and visually stunning productions.
            My experience spans both on stage and behind the camera, bringing
            creativity and dedication to every project. I thrive in collaborative
            environments, working alongside others to bring stories and visions to life.
          </p>

          {/* Tab Buttons */}
          <div className="flex flex-row justify-start mt-8 space-x-4">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                <span
                  className={`bg-gradient-to-r from-pink-600 via-red-500 to-yellow-500 py-2 px-4 rounded-lg shadow-md hover:from-purple-700 hover:via-pink-600 hover:to-red-600 transition-all duration-300 ${
                    tab === tabData.id ? "opacity-100" : "opacity-70"
                  }`}
                >
                  {tabData.title}
                </span>
              </TabButton>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-8">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
