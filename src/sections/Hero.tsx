"use client";

import profileImage from "@/assets/images/profile.png";
import Image from "next/image";
import { ArrowDownToLine, UserRound } from "lucide-react";
import Link from "next/link";
import { useSectionInView } from "@/lib/custom_hook";

const HeroSection = () => {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section
      className="py-32 md:py-48 lg:py-48 relative z-0"
      id="home"
      ref={ref}
    >
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch' /></filter>
        <rect width='100%' height='100%' filter='url(#noiseFilter)' /></svg>")`,
        }}
      ></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={profileImage}
            className="h-24 w-24 rounded-full border-2 border-white drop-shadow-md mb-1"
            alt="Profile"
            quality="95"
            priority={true}
          />
          <div className="bg-green-300 px-4 py-1.5 inline-flex items-center gap-4 rounded-full drop-shadow-sm">
            <div className="text-sm text-green-700 font-medium">
              Available for work
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Developing innovative and user-friendly interfaces
          </h1>
          <p className="mt-4 text-center text-slate-600 md:text-large">
            I specialized in creating intuitive and engaging web and mobile
            interfaces, driven by a passion to blend functionality with
            creativity
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-5">
          <Link href="#contact">
            <button className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 px-6 h-10 rounded-full cursor-pointer hover:bg-blue-500 hover:text-white focus:scale-110 hover:scale-110 active:scale-105 transition">
              <div className="inline-flex items-center gap-2">
                <span className="font-semibold ">Contact me</span>
                <UserRound className="size-4" />
              </div>
            </button>
          </Link>
          <a
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 h-10 rounded-full drop-shadow-md hover:bg-blue-500/80 cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition"
            href="/Resume.pdf"
            download
          >
            <span className="font-semibold">Download resume</span>
            <ArrowDownToLine className="size-4" />
          </a>

          <a
            href="https://www.linkedin.com/in/jericho-joshua-tariao-500284329/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 bg-blue-500 hover:bg-blue-500/80 rounded-full shadow-md cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <title>LinkedIn</title>
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </button>
          </a>

          <a
            href="https://github.com/jerichotariao05"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="p-2 bg-blue-500 hover:bg-blue-500/80 rounded-full shadow-md cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-github-icon lucide-github"
              >
                <title>GitHub</title>
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
