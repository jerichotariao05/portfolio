import { PropsWithChildren, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type CardContentProps = PropsWithChildren<{
  icon: ReactNode;
  title: string;
  className?: string;
}>;

const CardContent = ({
  icon,
  title,
  children,
  className,
}: CardContentProps) => {
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
