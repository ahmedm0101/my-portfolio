import React from "react";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import styles from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";

const Tech = () => {
  return (
    <div className={`flex justify-center flex-wrap flex-row gap-10`}>
      {technologies.map((tech) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
