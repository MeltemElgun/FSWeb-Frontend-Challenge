import React from "react";
import project from "./Projects.module.css";
export default function Projects(props) {
  const {
    name,
    description,
    relative,
    img,
    className,
    github,
    vercel,
    background,
  } = props.pr;
  console.log(className);
  return (
    <main>
      <section
        className={project.cardA}
        style={{ background: ` ${background}` }}
      >
        <p className={project.head}>{name}</p>
        <p className={project.textA}>{description}</p>
        <div className={project.spanA}>
          {relative.map((i) => (
            <span key={i}>{i}</span>
          ))}
        </div>
        <nav>
          <a className={project.a} href={`${github}`} target="_blank">
            View on Github
          </a>
          <a href={`${vercel}`} target="_blank">
            Go to app ➔
          </a>
        </nav>
        <div style={{ paddingTop: ` ${className}` }}>
          <img className={project.img} src={` ${img}`} />
        </div>
      </section>
    </main>
  );
}
