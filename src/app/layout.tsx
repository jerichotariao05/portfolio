import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import ScrollToTopButton from "@/components/ScrollToTopBtn";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Jericho Joshua Tariao",
  description:
    "Portfolio featuring expertise in web and mobile app development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={twMerge(
          raleway.variable,
          montserrat.variable,
          "bg-blue-50 font-sans text-gray-950 antialiased"
        )}
      >
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
