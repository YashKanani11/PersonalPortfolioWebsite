// Tailwind CSS v4 upgraded layout using new design tokens
export default function HomePage() {
  return (
    <main className="bg-surface text-emphasis font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-accent">
        <div className="text-2xl font-bold">JM</div>
        <ul className="flex gap-8 text-sm">
          <li>
            <a href="#projects" className="hover:text-accent">
              Projects
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-accent">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-accent">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
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
          expertise lies in crafting robust and scalable SaaS-based
          architectures on the Amazon AWS platform.
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

      {/* Skills Section */}
      <section className="text-center py-10">
        <h2 className="text-subtle uppercase text-sm tracking-widest mb-4">
          Experience With
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

      {/* Projects Section */}
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

      {/* Experience Section */}
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

      {/* Contact Section */}
      <footer
        id="contact"
        className="bg-surface text-center py-10 border-t border-muted"
      >
        <p className="text-subtle max-w-md mx-auto">
          Seasoned Full Stack Software Engineer with 8+ years of hands-on
          experience in designing and implementing robust, scalable, and
          innovative web solutions.
        </p>
        <p className="mt-4 text-sm">ashcodedehub@gmail.com</p>
        <div className="mt-4 flex justify-center gap-4">
          {["github", "linkedin", "twitter"].map((icon, i) => (
            <img
              key={i}
              src={`/icons/${icon}.png`}
              alt={icon}
              className="w-5 h-5"
            />
          ))}
        </div>
      </footer>
    </main>
  );
}
