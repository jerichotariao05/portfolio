import { footerLinks } from "@/lib/data";
import { ExternalLink } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="pointer-events-none absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-blue-300/60 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-30"></div>
      <div className="container">
        <div className="border-t-2 border-blue-500/50 py-6 text-sm flex flex-col gap-8 items-center md:flex-row md:justify-between">
          <div className="flex flex-col gap-2 sm:text-center md:text-start">
            <p className="font-serif text-sm">
              &copy; 2025 Jericho. All rights reserved.
            </p>
            <p className="font-serif text-sm">
              Made with Next.js, TypeScript, Tailwind, and Resend.
            </p>
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="z-10 inline-flex items-center gap-1.5 hover:text-blue-500"
              >
                <span className="font-semibold">{link.name}</span>
                <ExternalLink className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
