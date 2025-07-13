import React from "react";

const Expreince = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-center text-info text-xl font-bold mb-10">
        EXPERIENCE
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {[
          {
            role: "Lead Software Engineer at Google",
            date: "Nov 2019 – Present",
            logo: "google",
            desc: "developing innovative solutions for Google’s core search algorithms...",
          },
          {
            role: "Junior Software Engineer at Apple",
            date: "Jan 2016 – Dec 2017",
            logo: "apple",
            desc: "shaping the architecture of mission-critical software projects...",
          },
          {
            role: "Software Engineer at Meta",
            date: "Jan 2017 – Oct 2019",
            logo: "meta",
            desc: "backend systems for the social media giant’s dynamic platform...",
          },
        ].map((job, i) => (
          <div key={i} className="flex gap-4 items-start">
            <img
              src={`/logos/${job.logo}.png`}
              alt={job.logo}
              className="w-6 h-6 mt-1"
            />
            <div>
              <h3 className="font-semibold text-emphasis">{job.role}</h3>
              <p className="text-sm text-subtle">{job.date}</p>
              <p className="text-sm mt-2 text-subtle">{job.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expreince;
