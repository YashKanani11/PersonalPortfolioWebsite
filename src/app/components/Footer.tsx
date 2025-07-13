import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
