import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-surface text-center py-10 border-t border-muted"
    >
      <p className="text-subtle max-w-md mx-auto">
        Full-Stack MERN Developer with hands-on experience building scalable web
        apps and intelligent AI solutions. Strong in React, Node.js, and MongoDB
        with practical exposure to NLP and GenAI. Looking to contribute to
        chalanging high-impact development teams.
      </p>
      <p className="mt-4 text-sm">ykkanani.yk@outlook</p>
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
  );
};

export default Footer;
