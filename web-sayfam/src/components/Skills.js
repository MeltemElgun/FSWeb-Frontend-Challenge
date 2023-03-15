import React from "react";
import skills from "./Skills.module.css";
export default function Skills() {
  return (
    <main className={skills.box}>
      <p className={skills.skillText}> Skills</p>

      <div className={skills.skillBoxes}>
        <div className={skills.js}>
          <img src="js.svg" />
          <p>JAVASCRIPT</p>
        </div>
        <div className={skills.react}>
          <img src="react.svg" />
          <p>REACT</p>
        </div>
        <div className={skills.redux}>
          <img src="redux.svg" />
          <p>REDUX</p>
        </div>
        <div className={skills.node}>
          <img src="node.svg" />
          <p>NODE</p>
        </div>
        <div className={skills.vscode}>
          <img src="vscode.svg" />
          <p>VS CODE</p>
        </div>
        <div className={skills.figma}>
          <img src="figma.svg" />
          <p>FİGMA</p>
        </div>
      </div>
    </main>
  );
}
