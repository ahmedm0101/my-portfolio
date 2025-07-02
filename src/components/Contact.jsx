import React, { useRef, useState } from "react";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import styles from "../styles";
import Earth from "./canvas/Earth";
import emailjs from "@emailjs/browser";
//template_zswziyj service_i9diacr WBhEuUV1KOtNvHUgf
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_i9diacr",
        "template_zswziyj",
        {
          from_name: form.name,
          to_name: "ahmed",
          from_email: form.email,
          to_email: "ahmad.mahmoud1472003@gmail.com",
          message: form.message,
        },
        "WBhEuUV1KOtNvHUgf"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you i will ge back to you as soon as possible.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.")
        }
      );
  };
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
      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
