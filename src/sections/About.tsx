"use client";

import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import {
  GraduationCap,
  BriefcaseBusiness,
  CodeXml,
  Wrench,
} from "lucide-react";
import { skillItems } from "@/lib/logo_svgs";
import CardContent from "@/components/CardHeader";
import { useSectionInView } from "@/lib/custom_hook";

const AboutSection = () => {
  const { ref } = useSectionInView("About");

  return (
    <section className="py-20" id="about" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Sync with my journey"
          description="I am a recent information technology graduate and an aspiring web and mobile developer passionate about combining creativity and functionality to build intuitive and engaging digital solutions. My current tech stack is React, Next.js, PHP, and MySQL. I am enthusiastic about continuously learning new technologies and expanding my skills."
        />
        <div className="mt-20 flex flex-col gap-8 md:flex-row md:gap-6">
          <div className="flex flex-col gap-8 md:gap-6 md:w-[45%] ">
            <Card>
              <CardContent
                icon={<GraduationCap className="size-6" />}
                title="Education"
              >
                <div className="flex flex-col gap-1 mt-4">
                  <p>PHINMA Cagayan de Oro College</p>
                  <p>August 2020 - May 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent
                icon={<CodeXml className="size-6" />}
                title="Tech Stack"
              >
                <p className="mt-2">
                  These are the technologies and tools I use.
                </p>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(48px,1fr))] gap-x-16 gap-y-6 justify-items-center mt-4 p-6">
                  {skillItems.map(({ title, icon, color }) => (
                    <div
                      key={title}
                      className="flex flex-col items-center justify-center min-w-[6rem] min-h-[6rem] sticky-tape rounded-md shadow-sm focus:scale-110 hover:scale-110 active:scale-105 transition"
                      style={{ color }}
                    >
                      <span className="size-10">{icon}</span>
                      <p
                        className="text-slate-900 text-sm text-center mt-2"
                        title={title}
                      >
                        {title}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="md:w-[55%]">
            <Card>
              <CardContent
                icon={<BriefcaseBusiness className="size-6" />}
                title="Work Experiences"
              >
                <p className="mt-2">These are my career highlights.</p>
                <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid mt-6">
                  <div className="flex md:contents flex-row-reverse">
                    <div className="relative p-4 my-6 text-slate-900 sticky-tape rounded-sm col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                      <p className="text-sm md:text-base lg:text-lg font-semibold">
                        IT Support Intern
                      </p>
                      <p className="text-sm">Speakify Team</p>
                      <span className="text-xs text-slate-600">
                        November 2024 - March 2025
                      </span>
                      <p className="mt-4 text-sm text-slate-600">
                        Provided technical support for software, hardware, and
                        network-related issues, improving system reliability and
                        user productivity.
                      </p>
                    </div>
                    <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                      <div className="flex items-center justify-center w-6 h-full">
                        <div className="w-1 h-full rounded-t-full bg-blue-500 "></div>
                      </div>
                      <div className="absolute w-9 h-9 -mt-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center">
                        <Wrench className="w-4 h-4 text-blue-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
