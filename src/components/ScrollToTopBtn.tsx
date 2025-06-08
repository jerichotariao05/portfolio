"use client";

import { useScrollToTop } from "@/lib/custom_hook";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const isVisible = useScrollToTop(20);

  const topFunction = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      title="Go back to top"
      onClick={topFunction}
      className="fixed bottom-4 right-4 p-3 bg-blue-500 hover:bg-blue-500/80 rounded-full shadow-md cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition"
      style={{
        display: isVisible ? "block" : "none",
      }}
    >
      <ArrowUp className="size-4 text-white" />
    </button>
  );
};

export default ScrollToTopButton;
