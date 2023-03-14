import React from "react";
import footer from "./Footer.module.css";
export default function Footer() {
  return (
    <div className={footer.box}>
      <div className={footer.content}>
        <p>Let’s work together on your next product.</p>
        <nav>
          <a
            className={footer.git}
            target="_blank"
            href="https://github.com/MeltemElgun"
          >
            Github
          </a>
          <a className={footer.perBlog} target="_blank" href="">
            Personal Blog
          </a>
          <a
            className={footer.link}
            target="_blank"
            href="https://www.linkedin.com/in/meltem-elg%C3%BCn-927a05203/"
          >
            Linkedin
          </a>
          <a
            className={footer.email}
            target="_blank"
            href="mailto:meltemelgun1@gmail.com"
          >
            Email
          </a>
        </nav>
      </div>
    </div>
  );
}
