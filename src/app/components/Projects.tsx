import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-center text-warning text-xl font-bold mb-10">
        PROJECTS
      </h2>
      <div className="flex justify-center gap-6 flex-wrap">
        {["html", "css"].map((proj, i) => (
          <div key={i} className="bg-surface-muted rounded-xl p-4 max-w-xs">
            <img
              src={`/projects/${proj}.png`}
              alt={proj}
              className="rounded mb-4"
            />
            <p className="text-xs text-subtle">CLICK HERE TO VISIT</p>
            <h3 className="text-emphasis font-semibold">
              {proj.toUpperCase()} TUTORIAL
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
