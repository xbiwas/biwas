import React from "react";
import "./Skills.css";
import Frontend from "./Frontend";
import Python from "./Python";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My tech levels</span>

      <div className="skills__container container grid">
        <Frontend />
        <Python />
      </div>
    </section>
  );
};

export default Skills;
