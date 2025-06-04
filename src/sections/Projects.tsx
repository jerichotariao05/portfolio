import { portfolioProjects } from "@/lib/data";
import Image from "next/image";
import { Goal } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Bringing ideas to life"
          title="Featured Projects"
          description="Developing intuitive and engaging digital experiences that help people
          and bring meaningful value through technology."
        />
        {/* Project folders */}
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <>
              <div>
                <div className="bg-sky-100 w-3/4 md:w-2/4 rounded-3xl rounded-bl-none rounded-br-none py-4 px-8">
                  <span className="font-serif text-slate-900 md:text-xl font-semibold sticky-tape rounded-sm shadow-sm py-2 px-4">
                    Project no. {project.id}
                  </span>
                </div>
                {/* Project content */}
                <Card
                  key={project.id}
                  className="rounded-tl-none px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden"
                >
                  <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                      <div className="bg-gradient-to-r from-sky-400 to-blue-600 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.projectType}</span>
                      </div>
                      <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                        {project.name}
                      </h3>
                      <hr className="border-t-2 border-blue-500/50 mt-4 md:mt-5" />
                      <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.descriptions.map((description) => (
                          <li
                            key={description.detail}
                            className="flex gap-2 text-sm md:text-base"
                          >
                            <Goal className="size-4 md:size-6 flex-shrink-0 mt-1 md:mt-0" />
                            <span className="leading-snug">
                              {description.detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative">
                      <Image
                        src={project.image}
                        alt={project.name}
                        className={`aspect-[4/3] mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none 
                          ${
                            project.projectType === "Mobile Application"
                              ? "md:mx-auto"
                              : ""
                          }`}
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
