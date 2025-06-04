import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const CardContent = ({
  icon,
  title,
  children,
  className,
}: PropsWithChildren<{
  icon: ReactNode;
  title: string;
  className?: string;
}>) => {
  return (
    <div className={twMerge("flex flex-col", className)}>
      <div className="inline-flex items-center gap-2">
        {icon}
        <h3 className="font-serif text-2xl drop-shadow-sm">{title}</h3>
      </div>
      {children}
    </div>
  );
};

export default CardContent;
