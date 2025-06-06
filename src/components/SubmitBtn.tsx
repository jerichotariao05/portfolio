"use client";

import React from "react";
import { Send } from "lucide-react";

type SubmitBtnProps = {
  pending: boolean;
};

const SubmitBtn = ({ pending }: SubmitBtnProps) => {
  if (pending) {
    return (
      <button
        type="button"
        className="self-start mt-4 bg-slate-900 text-white px-6 h-10 rounded-full shadow-md inline-flex items-center justify-center font-semibold disabled:opacity-65"
        disabled
      >
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </button>
    );
  }

  return (
    <button
      type="submit"
      className="self-start mt-4 bg-slate-900 text-white px-6 h-10 rounded-full shadow-md hover:bg-slate-900/90 inline-flex items-center gap-2 font-semibold focus:scale-110 hover:scale-110 active:scale-105 transition"
    >
      Submit
      <Send className="size-4" />
    </button>
  );
};

export default SubmitBtn;
