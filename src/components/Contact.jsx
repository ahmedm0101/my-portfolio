import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import styles from "../styles";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className="flex-[.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.heroSubText}`}>Get in touch</p>
        <h3 className={`${styles.heroHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              placeholder="What's your name"
              className="bg-tertiary py-4 px-6 rounded-lg border-none font-medium text-white placeholder:text-secondary outline-none "
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              placeholder="What's your email"
              className="bg-tertiary py-4 px-6 rounded-lg border-none font-medium text-white placeholder:text-secondary outline-none "
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 rounded-lg border-none font-medium text-white placeholder:text-secondary outline-none "
              name="message"
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-primary shadow-md rounded-xl cursor-pointer"
            type="submit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
