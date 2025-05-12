import {
  c,
  python,
  javaScript,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  spotify_img,
  simpleshell_img,
  valeriavillas_img,
  realestate_img,
  eduskill,
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

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "javaScript", icon: javaScript },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Pixel Bloom",
    company_name: "Web Developer",
    icon: eduskill,
    iconBg: "#161329",
    date: "Nov 2024 - May 2025",
    points: [
      "Designed, developed, and optimized responsive websites for clients.",
      "Collaborated with designers and marketers to create visually appealing, high performing sites. Built and maintained websites using React, Next.js, and WordPress.",
      "Ensured seamless user experiences with a focus on UI/UX and SEO best practices",
      "Improved website performance, cross-browser compatibility, and accessibility",
      "Integrated third-party tools like Google Analytics, marketing automation platforms, and CRM systems.",
    ],
  },
];

export const projects = [
  {
    name: "Spotify clone",
    description:
      "Built a responsive music streaming platform using React, Tailwind CSS, and RapidAPI for song data. The app allows users to search for songs, play music, browse by genre, and view artist details. Designed with a sleek UI and smooth user experience ",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "React", color: "pink-text-gradient" },
      { name: "API integration", color: "pink-text-gradient" },

    ],
    image: spotify_img,
    source_code_link: "https://github.com/sueKK/spotify-clone-",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "c", color: "blue-text-gradient" },
      { name: "Operating Systems Concepts", color: "green-text-gradient" },
      { name: "machine learning", color: "pink-text-gradient" },
      { name: "shell", color: "pink-text-gradient" },
    ],
    image: simpleshell_img,
    source_code_link: "https://github.com/sueKK/simple_shell",
  },
  {
    name: "Real estate website",
    description:
      "Developed a sleek and responsive website to showcase luxury villas, highlight amenities, and drive user interest. Built with React Js, Tailwind and responsive design principles to ensure a smooth browsing experience across devices ",
    tags: [
      { name: "React Js", color: "blue-text-gradient" },
      { name: "Tailwind Css", color: "green-text-gradient" },
    ],
    image: realestate_img,
    source_code_link:
      "https://github.com/sueKK/real-estate",
  },
  {
    name: "Valeria Villas Website",
    description:
      " Designed and developed a real estate marketing website focused on promoting Valeria Villas, highlighting key amenities, lifestyle benefits, and encouraging buyer interest. Implemented with HTML, CSS, and JavaScript, the site is fully responsive and optimized for performance and SEO",
    tags: [
      { name: "javaScript", color: "blue-text-gradient" },
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "blue-text-gradient" },
    ],
    image: valeriavillas_img,
    source_code_link: "https://github.com/sueKK/Valeria-villa ",
  },
];
