import React from "react";
import project from "./Projects.module.css";
export default function Projects(props) {
  const { name, description, relative, img } = props.pr;
  return (
    <div className={project.cards}>
      <div className={project.cardA}>
        <p className={project.head}>{name}</p>
        <p className={project.textA}>{description}</p>
        <div className={project.spanA}>
          <span>{relative[0]}</span>
          <span>{relative[1]}</span>
          <span>{relative[2]}</span>
          <span>{relative[3]}</span>
          <span>{relative[4]}</span>
        </div>
        <a className={project.a} href="#">
          View on Github
        </a>
        <a href="#">Go to app</a>{" "}
        <img className={project.imgA} src="resim1.png" />
      </div>
    </div>
  );
}
