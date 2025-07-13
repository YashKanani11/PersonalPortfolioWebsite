import React from "react";

const Skills = () => {
  return (
    <section className="text-center py-10">
      <h2 className="text-subtle uppercase text-sm tracking-widest mb-4">
        Skills
      </h2>
      <div className="flex justify-center gap-8">
        {["js", "nextjs", "html5", "css3", "tools"].map((tech, i) => (
          <img
            key={i}
            src={`/icons/${tech}.png`}
            alt={tech}
            className="w-10 h-10 grayscale"
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
