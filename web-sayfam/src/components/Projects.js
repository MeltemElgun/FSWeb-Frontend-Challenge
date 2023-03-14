import React from "react";
import project from "./Projects.module.css";
export default function Projects() {
  return (
    <div className={project.box}>
      <div className={project.p}>Projects</div>
      <div className={project.cards}>
        <div className={project.cardA}>
          <p className={project.head}>Random Jokes</p>
          <p className={project.textA}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <div className={project.spanA}>
            <span>react</span>
            <span>vercel</span>
            <span>axios</span>
            <span>router</span>
          </div>
          <a className={project.a} href="#">
            View on Github
          </a>
          <a href="#">Go to app</a>{" "}
          <img className={project.imgA} src="resim1.png" />
        </div>
        <div className={project.cardB}>
          <p className={project.head}>Are you bored?</p>
          <p className={project.textB}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus
            ratione soluta aperiam sit voluptate? Dicta quod deserunt quam
            temporibus cumque magnam!
          </p>
          <div className={project.spanB}>
            <span>react</span>
            <span>redux</span>
            <span>axios</span>
            <span>router</span>
            <span>vercel</span>
          </div>
          <a className={project.a}>View on Github</a>
          <a>Go to app</a>
          <img className={project.imgB} src="resim2.png" />
        </div>
      </div>
    </div>
  );
}
