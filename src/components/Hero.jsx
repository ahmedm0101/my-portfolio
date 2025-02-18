import { motion } from "framer-motion";
import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 h-40 sm:h-80 violet-gradient" />
        </div>
        <div className="">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#915eff]">Ahmed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I Develop web applications <br className="sm:block hidden" />
            and interfaces
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="flex justify-center items-center xs:bottom-10 bottom-32 absolute w-full">
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl !border-secondary !border-4 !p-2 items-start
           justify-center flex"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
