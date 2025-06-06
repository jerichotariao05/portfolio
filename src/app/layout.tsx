import type { Metadata } from "next";
import { Raleway, Montserrat } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import FooterSection from "@/sections/Footer";
import { Toaster } from "react-hot-toast";
import Header from "@/sections/Header";

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
    <html lang="en">
      <body
        className={twMerge(
          raleway.variable,
          montserrat.variable,
          "bg-blue-50 text-gray-950 antialiased font-sans"
        )}
      >
        <Header />
        {children}
        <FooterSection />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
