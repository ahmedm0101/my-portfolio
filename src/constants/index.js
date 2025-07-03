import {
  mobile,
  backend,
  creator,
  web,
  techMember,
  frontend,
  live,
  freelance,
  sass,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  nextjs,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  shop,
  YC,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Nextjs Developer",
    icon: nextjs,
  },
  {
    title: "Tailwindcss",
    icon: tailwind,
  },
  {
    title: "SASS",
    icon: sass,
  },
  {
    title: "Redux Toolkit",
    icon: redux,
  },
  {
    title: "git",
    icon: git,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Freelance Frontend Developer",
    company_name: "Freelance",
    icon: freelance, // Replace with your actual icon reference
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Designed and developed 10+ responsive and interactive user interfaces using React, HTML, Tailwind, and JavaScript.",
      "Delivered two fully functional e-commerce platforms with shopping carts, payment gateways, and product catalogs, increasing user retention by 20%.",
      "Optimized website performance, reducing load times by up to 30%.",
      "Collaborated with clients across 5+ industries to deliver high-quality, user-focused digital experiences.",
    ],
  },
  {
    title: "Frontend Developer (Graduation Project)",
    company_name: "Cairo University",
    icon: frontend, // Replace with your actual icon reference
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Jul 2025",
    points: [
      "Leading development of a web application for an e-commerce platform with advanced hidden features.",
      "Collaborating with team members to meet deadlines and ensure quality standards.",
      "Utilizing modern libraries and tools to enhance project functionality and user experience.",
      "Improved user satisfaction by 25% through advanced tools and user-centric features.",
    ],
  },
  {
    title: "Tech Club Member",
    company_name: "Cairo University",
    icon: techMember, // Replace with your actual icon reference
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Organized university tech events and hackathons to foster collaboration among students.",
      "Mentored junior students on front-end development best practices.",
      "Contributed to multiple university projects with hands-on involvement.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Testimonial coming soon...",
    name: "Client Name1",
    designation: "Position",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/lego/1.jpg", // Placeholder image
  },
  {
    testimonial:
      "Currently gathering feedback from recent clients. Stay tuned!",
    name: "Client Name2",
    designation: "Position",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/lego/2.jpg",
  },
  {
    testimonial:
      "In progress: testimonials from past and ongoing projects will be added here.",
    name: "Client Name3",
    designation: "Position",
    company: "Company Name",
    image: "https://randomuser.me/api/portraits/lego/3.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "A web-based platform that lets users search, book, and manage car rentals from various providers, offering a convenient, efficient solution for transportation needs with an easy-to-use interface for both short-term and long-term rentals.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "api-ninjas",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/ahmedm0101/cars",
    source_live_link: "https://cars-three-omega.vercel.app/",
  },
  {
    name: "e-commerce",
    description:
      "An e-commerce website is a digital platform that enables users to buy and sell products or services online. It typically includes features like product listings, search functionality, shopping carts, secure checkout. ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_live_link: "https://e-commerce-cyan-chi.vercel.app/",
    source_code_link: "https://github.com/ahmedm0101/e-commerce",
  },
  {
    name: "Yc_directory",
    description:
      "A Next.js 15 platform for entrepreneurs to submit startup ideas, join virtual pitch competitions, explore others’ pitches, and gain exposure. Features clean design and Discord support with 34k+ members for help and collaboration.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: YC,
    source_live_link: "https://yc-directory-kappa-three.vercel.app/",
    source_code_link: "https://yc-directory-kappa-three.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
