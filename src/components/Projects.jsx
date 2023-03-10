import React from "react";
import Section from "./Section";
import Flash from "../assets/3d/Flash.png";
import { useDispatch, useSelector } from "react-redux";
import Render3D from "./Render3D";
import { caseStudyActions } from "../store/caseStudy";
import Image from "./Image";

const ProjectCard = ({ project }) => {
  const tools = useSelector((state) => state.toolsReducer);
  const dispatch = useDispatch();

  return (
    <li className="flex flex-col gap-[3rem]">
      {/* Project title */}
      <h3 className="relative font-bold">
        <span className="absolute  top-[50%] translate-y-[-50%] left-[-5rem] w-[1rem] h-[1rem] rounded-full inline-block bg-white xl:static xl:mr-[2rem]"></span>
        {project.name}
      </h3>

      {/* Project cover */}
      <Image
        src={project.cover}
        alt={project.title}
        containerClassName="h-[60rem] w-full"
        className="h-full w-full object-cover object-left-top"
      />

      {/* Project description */}
      <p className="md-b:text-[2rem]">{project.description}</p>

      {/* Project tools */}
      <div className="flex flex-wrap gap-[2rem]">
        {project.tools.map((tool, index) => {
          // Get tool details
          const toolDetail = tools.find((toolData) => toolData.title === tool);

          if (!toolDetail) return undefined;

          // Get svg src
          const svgSrc = toolDetail.title
            .replaceAll(" ", "")
            .replaceAll(".", "dot")
            .toLowerCase();

          return (
            <span
              key={index}
              className="flex items-center gap-[1.5rem] bg-gray-light rounded-full px-[2rem] py-[1rem]"
            >
              <img
                src={require(`../assets/svg/${svgSrc}.svg`)}
                alt={toolDetail.title}
                className="w-[2rem] h-[2rem]"
              />
              <span
                className="text-[1.6rem]"
                style={{ color: toolDetail.colorCode }}
              >
                {toolDetail.title}
              </span>
            </span>
          );
        })}
      </div>

      {/* Links */}
      <div className="flex items-center md-b:mt-[1rem]">
        {/* Live website link */}
        {project.appLiveVersionLink && (
          <a
            href={project.appLiveVersionLink}
            className={`text-[2rem] hover:opacity-70 duration-100 ease-out border-b border-purple-secondary text-purple-secondary md-b:text-[1.6rem]
             ${
               project.name === "Easybank" &&
               "w-fit px-[3rem] py-[1rem] rounded-full text-[2rem] ml-auto background-gradient hover:opacity-70 duration-100 ease-out md-b:text-[1.6rem] !text-white border-none"
             }`}
            target="_blank"
            rel="noreferrer"
          >
            View Live App &rarr;
          </a>
        )}

        {/* Project */}

        {/* View case study link */}
        {project.name !== "Easybank" && (
          <button
            onClick={() =>
              dispatch(caseStudyActions.showCaseStudy({ ...project }))
            }
            className="w-fit px-[3rem] py-[1rem] rounded-full text-[2rem] ml-auto background-gradient hover:opacity-70 duration-100 ease-out md-b:text-[1.6rem]"
          >
            View Case Study &rarr;
          </button>
        )}
      </div>
    </li>
  );
};

function Projects() {
  const projects = useSelector((state) => state.projectsReducer);

  return (
    <Section id="projects" className="pt-[40rem] relative" title="My Projects">
      {/* 3d icon */}
      <Render3D src3D={Flash} />

      {/* Text */}
      <p className="">
        Well, like I said "building projects upon projects", below are some
        them. You can view the live site of the projects but you can also read
        through the case studies where I extensively explain through text,
        pictures and videos how I planned the project, identified the problems
        to be solved, solved those problems and also tools I used to solve the
        problem.
      </p>

      {/* List of projects */}
      <ul className="mt-[8rem] flex flex-col gap-[15rem]">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </ul>
    </Section>
  );
}

export default Projects;
