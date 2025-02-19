import React, { useEffect, useState } from "react";
import  styles  from "../styles";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center justify-center !py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-2"
          >
            <img
              src={logo}
              alt="logo portfolio"
              className="w-9 h-9 object-contain"
            />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Ahmed &nbsp;
              <span className="sm:block hidden"> | Frontend Developer</span>
            </p>
          </Link>
          <ul className="list-none hidden sm:flex flex-row gap-10">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] cursor-pointer font-medium`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-7 h-7 object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } !p-6 black-gradient absolute top-12 right-4 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className="list-none justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins text-[16px] cursor-pointer font-medium`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
