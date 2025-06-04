import profileImage from "@/assets/images/profile.png";
import Image from "next/image";
import { ArrowDownToLine, UserRound } from "lucide-react";
import grainImage from "@/assets/images/grain.jpg";

const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={profileImage}
            className="h-24 w-24 rounded-full border-2 border-white drop-shadow-md mb-2"
            alt="Profile"
            quality="95"
            priority={true}
          />
          <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-full">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm text-white font-medium">
              Currently expanding skills
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Developing innovative and user-friendly interfaces
          </h1>
          <p className="mt-4 text-center text-slate-600 md:text-large">
            I specialized in creating intuitive and engaging web interfaces,
            driven by a passion to blend functionality with creativity
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-blue-500 px-6 h-10 rounded-full">
            <div className="inline-flex items-center gap-2 text-blue-500">
              <span className="font-semibold">Contact me</span>
              <UserRound className="size-4" />
            </div>
          </button>
          <button className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 h-10 rounded-full drop-shadow-md hover:bg-blue-500/80">
            <span className="font-semibold">Download resume</span>
            <ArrowDownToLine className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
