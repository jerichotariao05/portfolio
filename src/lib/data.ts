import sisImage from "@/assets/images/CRB_login.png";
import petAdoptionImage from "@/assets/images/pet_adoption.avif";
import mathAppImage from "@/assets/images/math_kids.png";
import novelaImage from "@/assets/images/photonovela.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const portfolioProjects = [
  {
    id: 1,
    name: "CRB STEEL INDUSTRIAL SALES, INC. Stocks Inventory System",
    projectType: "Web Application",
    descriptions: [
      {
        detail: "Developed a web application to streamline operations.",
      },
      {
        detail:
          "Improve data tracking, and support net weight-based inventory management.",
      },
    ],
    image: sisImage,
  },
  {
    id: 2,
    name: "Math for Kids",
    projectType: "Mobile Application",
    descriptions: [
      {
        detail:
          "Created a fun and engaging mobile app to help children learn basic math skills through interactive games.",
      },
      {
        detail:
          "Designed to make math enjoyable and accessible for young learners, supporting counting, addition, and subtraction.",
      },
    ],
    image: mathAppImage,
  },
  {
    id: 3,
    name: "Photo Novela",
    projectType: "Mobile Application",
    descriptions: [
      {
        detail:
          "Developed an app where users can share meaningful stories behind their pictures, creating a unique storytelling experience.",
      },
      {
        detail:
          "Designed as a social platform that combines elements of Instagram-style photo sharing with narrative storytelling.",
      },
    ],
    image: novelaImage,
  },
  {
    id: 4,
    name: "Pet Adoption System",
    projectType: "Web Application",
    descriptions: [
      {
        detail:
          "Developed a web application to facilitate the rescue and adoption of stray and homeless pets.",
      },
      {
        detail:
          "Supports users in browsing available pets, submitting adoption requests, and tracking adoption status.",
      },
    ],
    image: petAdoptionImage,
  },
] as const;

export const footerLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jericho-joshua-tariao-500284329/",
  },
  {
    name: "Github",
    href: "https://github.com/jerichotariao05",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jerichotariao",
  },
] as const;
