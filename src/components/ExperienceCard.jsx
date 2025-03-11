import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

export default function ExperienceCard({ experience }) {
  return (
    <>
      <VerticalTimelineElement
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white font-bold text-[24px]">
            {experience.title}
          </h3>
          <p
            className="text-secondary font-semibold text-[16px]!"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-5 ml-5 list-disc">
          {experience.points.map((point, index) => (
            <li
              key={index}
              className="pl-1 text-white-100 tracking-wider text-[14px]"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  );
}
