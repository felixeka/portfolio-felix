"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
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
      <ul className="list-disc pl-2">
        <li>Theater and Film Studies</li>
        <li>Photography and Visual Arts</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Directing for Theater</li>
        <li>Advanced Photography Techniques</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="bg-[#121212] text-white py-16" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center">
          <div className="p-1 rounded-lg bg-gradient-to-r from-red-700 via-red-500 to-orange-600 shadow-lg">
            <Image
              src="/images/projects/paw.png"
              width={400} // Enlarged width
              height={400} // Enlarged height
              className="rounded-lg"
              alt="About Me Image"
            />
          </div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-600 mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-gray-300">
            I am a theater performer, photographer, and assistant director with
            a passion for creating compelling and visually stunning productions.
            With experience both on stage and behind the camera, I bring
            creativity and dedication to every project. I am always eager to
            expand my artistic and technical skills, and I thrive in
            collaborative environments, working alongside others to bring
            stories and visions to life.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              <span className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 py-2 px-4 rounded-lg shadow-md">
                Skills
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              <span className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 py-2 px-4 rounded-lg shadow-md">
                Education
              </span>
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              <span className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-600 py-2 px-4 rounded-lg shadow-md">
                Certifications
              </span>
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
