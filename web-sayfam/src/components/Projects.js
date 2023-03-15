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
    versel,
    background,
  } = props.pr;
  console.log(className);
  return (
    <main className={project.cardA} style={{ background: ` ${background}` }}>
      <p className={project.head}>{name}</p>
      <p className={project.textA}>{description}</p>
      <section className={project.spanA}>
        {relative.map((i) => (
          <span key={i}>{i}</span>
        ))}
      </section>
      <nav>
        <a className={project.a} href={`${github}`} target="_blank">
          View on Github
        </a>
        <a href={`${versel}`} target="_blank">
          Go to app ➔
        </a>
      </nav>
      <figure style={{ paddingTop: ` ${className}` }}>
        <img className={project.img} src={` ${img}`} />
      </figure>
    </main>
  );
}
