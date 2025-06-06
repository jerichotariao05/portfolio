"use client";

import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { SectionName } from "@/lib/types";

export function useSectionInView(section: SectionName, threshold = 0.25) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return {
    ref,
  };
}
