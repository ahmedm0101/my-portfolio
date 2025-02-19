import React from "react";
import styles from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import SectionWrapper from "../hoc/SectionWrapper";
const ServiceCard = ({ index, title, icon }) => {
  return (
    <>
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", .5 * index, 0.75)}
          className="w-full green-pink-gradient !p-[1px] rounded-[20px] shadow-card]"
        >
          <div
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary rounded-[20px] !py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white !font-bold text-center !text-[20px]">
            {title}

            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        className="text-secondary max-w-3xl !mt-4 text-[17px] leading-7"
        variants={fadeIn("", "", 0.1, 1)}
      >
        A skilled front-end developer with expertise in React, Next and a solid
        Computer Science background from Cairo University, specializing in
        Mathematics. Experienced in designing and developing user-centric,
        responsive websites using modern frameworks and tools. Proven ability to
        translate client requirements into high-performing, accessible digital
        solutions. Strong communication and collaboration skills ensure seamless
        teamwork and client satisfaction.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About,"about");
