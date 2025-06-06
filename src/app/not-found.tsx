import { Undo2, CircleAlert } from "lucide-react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="relative bg-blue-50 w-full h-screen px-16 md:px-0 flex items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-300/60 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] z-0"></div>
      <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-6 md:px-8 lg:px-10 py-8 rounded-lg shadow-lg z-10">
        <div className="inline-flex items-center gap-2">
          <CircleAlert className="size-10 md:size-12 text-yellow-400" />
          <h3 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-slate-900">
            404
          </h3>
        </div>
        <h5 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-600 mt-4">
          Page Not Found
        </h5>
        <p className="text-gray-600 mt-4 pb-4 border-b-2 text-center">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link href="/">
          <button
            className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 h-10 rounded-full drop-shadow-md hover:bg-blue-500/80 cursor-pointer focus:scale-110 hover:scale-110 active:scale-105 transition mt-6"
            title="Go back"
          >
            <span className="font-semibold">Go back</span>
            <Undo2 className="size-4" />
          </button>
        </Link>
      </div>
    </div>
  );
}
