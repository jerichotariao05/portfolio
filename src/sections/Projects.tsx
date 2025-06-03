import { portfolioProjects } from "@/lib/data";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-sky-400 to-blue-600 text-center text-transparent bg-clip-text">
            Functionality with creativity
          </p>
        </div>
        <h3 className="font-serif text-3xl text-center mt-6">
          Featured Projects
        </h3>
        <p className="text-center text-slate-600 mt-4 ">
          Developing intuitive and engaging digital experiences that help people
          and bring meaningful value through technology.
        </p>
        <div className="flex flex-col mt-10">
          {portfolioProjects.map((project) => (
            <div
              key={project.id}
              className="bg-blue-300/50 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/25 p-8"
            >
              <div className="flex">
                <div className="bg-gradient-to-r from-sky-400 to-blue-600 inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                  <span>{project.projectType}</span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mt-2">{project.name}</h3>
              <hr className="border-t-2 border-blue-500/50 mt-4" />
              <ul>
                {project.descriptions.map((description) => (
                  <li className="flex gap-2">
                    <CircleCheck className="size-8" />
                    <span>{description.detail}</span>
                  </li>
                ))}
              </ul>
              <Image src={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
