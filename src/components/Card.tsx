import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <div
        className={twMerge(
          "bg-gradient-to-r from-sky-100 via-blue-200 to-blue-300 rounded-3xl relative shadow-md p-6",
          className
        )}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
