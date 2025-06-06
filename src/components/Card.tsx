import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

type CardProps = ComponentPropsWithRef<"div">;

const Card = ({ className, children, ...otherProp }: CardProps) => {
  return (
    <>
      <div
        className={twMerge(
          "bg-gradient-to-br from-sky-100 via-blue-200 to-blue-300 rounded-3xl border border-t-blue-100 relative z-0 p-6 overflow-clip shadow-none transition-shadow duration-300 hover:shadow-md",
          className
        )}
        {...otherProp}
      >
        <div
          className="absolute inset-0 -z-10 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'><filter id='noiseFilter'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch' /></filter>
        <rect width='100%' height='100%' filter='url(#noiseFilter)' /></svg>")`,
          }}
        ></div>
        {children}
      </div>
    </>
  );
};

export default Card;
