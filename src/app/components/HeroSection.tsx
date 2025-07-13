import React from "react";

const HeroSection = () => {
  return (
    <section className="text-center py-20">
      <img
        src="/avatar.png"
        alt="avatar"
        className="mx-auto rounded-full w-40 h-40 mb-6"
      />
      <h1 className="text-4xl font-bold">
        I do code and{" "}
        <span className="text-accent">
          make content <span className="text-warning">about it!</span>
        </span>
      </h1>
      <p className="max-w-xl mx-auto mt-6 text-subtle">
        I am a seasoned full-stack software engineer with over 8 years of
        professional experience, specializing in backend development. My
        expertise lies in crafting robust and scalable SaaS-based architectures
        on the Amazon AWS platform.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-white text-black px-5 py-2 rounded-full">
          Get In Touch
        </button>
        <button className="border border-white px-5 py-2 rounded-full">
          Download CV
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
