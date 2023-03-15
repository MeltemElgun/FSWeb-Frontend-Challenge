import React from "react";
import introduce from "./Introduce.module.css";

export default function Introduce() {
  return (
    <header className={introduce.box}>
      <div className={introduce.content}>
        <div className={introduce.text}>
          <p className={introduce.p1}>Hi!👋</p>
          <p className={introduce.p2}>
            I’m Meltem Elgun. I’m a full-stack developer. I can craft solid and
            scalable frontend products.
            <br /> Let’s meet!
          </p>
          <div>
            <nav className={introduce.nav}>
              <a
                href="https://www.linkedin.com/in/meltem-elg%C3%BCn-927a05203/"
                target="_blank"
              >
                <img src="LinkedIn.svg" />
              </a>
              <a href="https://github.com/MeltemElgun" target="_blank">
                <img src="github.svg" />
              </a>
            </nav>
            <p className={introduce.p3}>
              Currently <span className={introduce.red}>Freelancing</span> for{" "}
              <span className={introduce.red}>UX, UI, & Web Design</span>{" "}
              Project . Invite me to join your team →
              <a
                className={introduce.mail}
                target="_blank"
                href="mailto:meltemelgun1@gmail.com"
              >
                meltemelgun1@gmail.com
              </a>
            </p>
          </div>
        </div>
        <figure className={introduce.Img}>
          <img className={introduce.img} src="Img.png" alt="Img" />
        </figure>
      </div>
    </header>
  );
}
