import React from "react";

const Skills = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-subtle uppercase text-md tracking-widest mb-8">
        Skills
      </h2>
      <div className="flex justify-center">
        <div className="flex justify-around gap-8">
          {[
            "nextjs",
            "tailwindcss",
            "mongo",
            "nodejs",
            "AI",
            "Version_control",
          ].map((tech, i) => (
            <div key={i}>
              <div className="justify-center items-center flex flex-col">
                <p>{tech}</p>
                <img
                  src={`/${tech}_logo.png`}
                  alt={tech}
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
