"use client";

import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { links } from "@/lib/data";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { activeSection, setActiveSection, setTimeofLastClick } =
    useActiveSectionContext();

  return (
    <>
      <div className="fixed top-4 right-4 z-50">
        <div
          className="p-2 bg-white rounded-full shadow-md cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {!open ? (
            <AlignJustify className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
        </div>
      </div>

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen z-40 bg-blue-500/70 backdrop-blur-md text-white flex flex-col gap-8 items-center justify-center text-xl">
          {links.map((link) => (
            <Link
              key={link.hash}
              href={link.hash}
              className={`pb-1 ${activeSection === link.name ? "border-b-2 border-white" : ""}`}
              onClick={() => {
                setOpen(false);
                setActiveSection(link.name);
                setTimeofLastClick(Date.now());
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default MobileMenu;
