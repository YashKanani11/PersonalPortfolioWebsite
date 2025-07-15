import React from "react";
import transparent from "../../../public/transparent.png";
import Image from "next/image";
const HeroSection = () => {
  return (
    <section className="text-center py-1">
      <div className="h-[160px] overflow-hidden">
        <Image
          src={transparent}
          alt="avatar_image"
          width={360}
          height={360}
          className="mx-auto rounded-full -mt-14 ps-12 border-2"
        />
      </div>
      <h1 className="text-4xl font-bold">
        I am an{" "}
        <span className="text-accent">
          <span className="animate-rainbow-text">AI engineer</span> and Love to{" "}
          <span className="animate-rainbow-text delay-2">develop websites</span>
        </span>
      </h1>
      <p className="max-w-xl mx-auto mt-6 text-subtle">
        Full-Stack MERN Developer with hands-on experience building scalable web
        apps and intelligent AI solutions. Strong in React, Node.js, and MongoDB
        with practical exposure to NLP and GenAI. Looking to contribute to
        chalanging high-impact development teams.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-black font-bold px-5 py-2 rounded-full border border-[#60a5fa]">
          Get In Touch
        </button>
        <button className="border border-[#4ade80] px-5 py-2 rounded-full ">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
