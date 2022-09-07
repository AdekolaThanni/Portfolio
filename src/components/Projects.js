import React from "react";
import Section from "./Section";

const projectsList = [
  {
    name: "Shortly",
    imageUrl: "Shortly.png",
    description:
      "This is a web app that shortens urls based on the inputted live websitte. Also keeps record of shortened URL’s in the browser local storage for future use. Also allows copying shortened URL to clipboard by clicking a button for easier use.",
    tools: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Mongo DB",
      "Node js",
      "Express js",
      "Stripe",
      "React Router",
      "Figma",
      "Framer Motion",
      "React Helmet",
    ],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "",
    appRepositoryLink: "",
  },
  {
    name: "Shortly",
    imageUrl: "Shortly.png",
    description:
      "This is a web app that shortens urls based on the inputted live websitte. Also keeps record of shortened URL’s in the browser local storage for future use. Also allows copying shortened URL to clipboard by clicking a button for easier use.",
    tools: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Mongo DB",
      "Node js",
      "Express js",
      "Stripe",
      "React Router",
      "Figma",
      "Framer Motion",
      "React Helmet",
    ],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "",
    appRepositoryLink: "",
  },
];
function Projects() {
  return (
    <Section
      id="projects"
      className="flex flex-col gap-[4rem]"
      title="My Projects"
    >
      {/* Projects */}
      {projectsList.map((project, index) => {
        return (
          <div
            key={index}
            className="flex sm:flex-row flex-col md:gap-[4rem] gap-[2rem] max-w-[100rem] mx-auto h-fit mb-[4rem]"
          >
            {/* Project image */}
            <img
              src={require(`../assets/img/${project.imageUrl}`)}
              alt=""
              className="sm:w-[60rem] w-full  sm:h-[60rem]  h-[30rem] object-cover object-left-top"
            />
            {/* Details */}
            <div className="sm:text-left text-left sm:p-0 px-[.5rem] text-[1.6rem] flex justify-between gap-[3rem] flex-col">
              {/* Project name and description */}
              <div className="">
                <h3 className="text-[2.5rem] text-purple-secondary">
                  {project.name}
                </h3>
                <p className="">{project.description}</p>
              </div>
              {/* Tools used */}
              <ul className="sm:block grid grid-cols-2 text-left gap-x-[6rem] gap-y-[1rem]">
                <span className="text-[2rem] text-purple-secondary col-span-full mb-[.5rem]">
                  Tools
                </span>
                {project.tools.map((tool, index) => (
                  <li key={index} className="w-fit">
                    {tool}
                  </li>
                ))}
              </ul>
              {/* Links */}
              <div className="flex gap-[.5rem] flex-col sm:flex-row flex-wrap sm:self-start self-stretch">
                <a
                  href={project.appWalkthroughVideoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#03A400] hover:opacity-[0.8] flex items-center gap-[1rem] p-[1rem] justify-center duration-200"
                >
                  Project Walkthrough
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0714 12.0833V16.25C18.0714 17.283 17.7099 18.1662 16.9869 18.8997C16.2639 19.6332 15.3932 20 14.375 20H3.69643C2.6782 20 1.80757 19.6332 1.08454 18.8997C0.361514 18.1662 0 17.283 0 16.25V5.41667C0 4.38368 0.361514 3.50043 1.08454 2.76693C1.80757 2.03342 2.6782 1.66667 3.69643 1.66667H12.7321C12.8519 1.66667 12.9503 1.70573 13.0273 1.78385C13.1044 1.86198 13.1429 1.96181 13.1429 2.08333V2.91667C13.1429 3.03819 13.1044 3.13802 13.0273 3.21615C12.9503 3.29427 12.8519 3.33333 12.7321 3.33333H3.69643C3.1317 3.33333 2.64825 3.53733 2.24609 3.94531C1.84394 4.3533 1.64286 4.84375 1.64286 5.41667V16.25C1.64286 16.8229 1.84394 17.3134 2.24609 17.7214C2.64825 18.1293 3.1317 18.3333 3.69643 18.3333H14.375C14.9397 18.3333 15.4232 18.1293 15.8253 17.7214C16.2275 17.3134 16.4286 16.8229 16.4286 16.25V12.0833C16.4286 11.9618 16.4671 11.862 16.5441 11.7839C16.6211 11.7057 16.7195 11.6667 16.8393 11.6667H17.6607C17.7805 11.6667 17.8789 11.7057 17.9559 11.7839C18.0329 11.862 18.0714 11.9618 18.0714 12.0833ZM23 0.833333V7.5C23 7.72569 22.9187 7.92101 22.7561 8.08594C22.5936 8.25087 22.401 8.33333 22.1786 8.33333C21.9561 8.33333 21.7636 8.25087 21.601 8.08594L19.3421 5.79427L10.9738 14.2839C10.8882 14.3707 10.7898 14.4141 10.6786 14.4141C10.5673 14.4141 10.4689 14.3707 10.3834 14.2839L8.9202 12.7995C8.83464 12.7127 8.79185 12.6128 8.79185 12.5C8.79185 12.3872 8.83464 12.2873 8.9202 12.2005L17.2885 3.71094L15.0296 1.41927C14.867 1.25434 14.7857 1.05903 14.7857 0.833333C14.7857 0.607639 14.867 0.412326 15.0296 0.247396C15.1922 0.0824653 15.3847 0 15.6071 0H22.1786C22.401 0 22.5936 0.0824653 22.7561 0.247396C22.9187 0.412326 23 0.607639 23 0.833333Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href={project.appLiveVersionLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#10A79E] hover:opacity-[0.8] flex items-center gap-[1rem] p-[1rem] justify-center duration-200"
                >
                  Project Live View
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0714 12.0833V16.25C18.0714 17.283 17.7099 18.1662 16.9869 18.8997C16.2639 19.6332 15.3932 20 14.375 20H3.69643C2.6782 20 1.80757 19.6332 1.08454 18.8997C0.361514 18.1662 0 17.283 0 16.25V5.41667C0 4.38368 0.361514 3.50043 1.08454 2.76693C1.80757 2.03342 2.6782 1.66667 3.69643 1.66667H12.7321C12.8519 1.66667 12.9503 1.70573 13.0273 1.78385C13.1044 1.86198 13.1429 1.96181 13.1429 2.08333V2.91667C13.1429 3.03819 13.1044 3.13802 13.0273 3.21615C12.9503 3.29427 12.8519 3.33333 12.7321 3.33333H3.69643C3.1317 3.33333 2.64825 3.53733 2.24609 3.94531C1.84394 4.3533 1.64286 4.84375 1.64286 5.41667V16.25C1.64286 16.8229 1.84394 17.3134 2.24609 17.7214C2.64825 18.1293 3.1317 18.3333 3.69643 18.3333H14.375C14.9397 18.3333 15.4232 18.1293 15.8253 17.7214C16.2275 17.3134 16.4286 16.8229 16.4286 16.25V12.0833C16.4286 11.9618 16.4671 11.862 16.5441 11.7839C16.6211 11.7057 16.7195 11.6667 16.8393 11.6667H17.6607C17.7805 11.6667 17.8789 11.7057 17.9559 11.7839C18.0329 11.862 18.0714 11.9618 18.0714 12.0833ZM23 0.833333V7.5C23 7.72569 22.9187 7.92101 22.7561 8.08594C22.5936 8.25087 22.401 8.33333 22.1786 8.33333C21.9561 8.33333 21.7636 8.25087 21.601 8.08594L19.3421 5.79427L10.9738 14.2839C10.8882 14.3707 10.7898 14.4141 10.6786 14.4141C10.5673 14.4141 10.4689 14.3707 10.3834 14.2839L8.9202 12.7995C8.83464 12.7127 8.79185 12.6128 8.79185 12.5C8.79185 12.3872 8.83464 12.2873 8.9202 12.2005L17.2885 3.71094L15.0296 1.41927C14.867 1.25434 14.7857 1.05903 14.7857 0.833333C14.7857 0.607639 14.867 0.412326 15.0296 0.247396C15.1922 0.0824653 15.3847 0 15.6071 0H22.1786C22.401 0 22.5936 0.0824653 22.7561 0.247396C22.9187 0.412326 23 0.607639 23 0.833333Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a
                  href={project.appRepositoryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#9A0A0A] hover:opacity-[0.8] flex items-center gap-[1rem] p-[1rem] justify-center duration-200"
                >
                  Project Repo
                  <svg
                    width="23"
                    height="20"
                    viewBox="0 0 23 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.0714 12.0833V16.25C18.0714 17.283 17.7099 18.1662 16.9869 18.8997C16.2639 19.6332 15.3932 20 14.375 20H3.69643C2.6782 20 1.80757 19.6332 1.08454 18.8997C0.361514 18.1662 0 17.283 0 16.25V5.41667C0 4.38368 0.361514 3.50043 1.08454 2.76693C1.80757 2.03342 2.6782 1.66667 3.69643 1.66667H12.7321C12.8519 1.66667 12.9503 1.70573 13.0273 1.78385C13.1044 1.86198 13.1429 1.96181 13.1429 2.08333V2.91667C13.1429 3.03819 13.1044 3.13802 13.0273 3.21615C12.9503 3.29427 12.8519 3.33333 12.7321 3.33333H3.69643C3.1317 3.33333 2.64825 3.53733 2.24609 3.94531C1.84394 4.3533 1.64286 4.84375 1.64286 5.41667V16.25C1.64286 16.8229 1.84394 17.3134 2.24609 17.7214C2.64825 18.1293 3.1317 18.3333 3.69643 18.3333H14.375C14.9397 18.3333 15.4232 18.1293 15.8253 17.7214C16.2275 17.3134 16.4286 16.8229 16.4286 16.25V12.0833C16.4286 11.9618 16.4671 11.862 16.5441 11.7839C16.6211 11.7057 16.7195 11.6667 16.8393 11.6667H17.6607C17.7805 11.6667 17.8789 11.7057 17.9559 11.7839C18.0329 11.862 18.0714 11.9618 18.0714 12.0833ZM23 0.833333V7.5C23 7.72569 22.9187 7.92101 22.7561 8.08594C22.5936 8.25087 22.401 8.33333 22.1786 8.33333C21.9561 8.33333 21.7636 8.25087 21.601 8.08594L19.3421 5.79427L10.9738 14.2839C10.8882 14.3707 10.7898 14.4141 10.6786 14.4141C10.5673 14.4141 10.4689 14.3707 10.3834 14.2839L8.9202 12.7995C8.83464 12.7127 8.79185 12.6128 8.79185 12.5C8.79185 12.3872 8.83464 12.2873 8.9202 12.2005L17.2885 3.71094L15.0296 1.41927C14.867 1.25434 14.7857 1.05903 14.7857 0.833333C14.7857 0.607639 14.867 0.412326 15.0296 0.247396C15.1922 0.0824653 15.3847 0 15.6071 0H22.1786C22.401 0 22.5936 0.0824653 22.7561 0.247396C22.9187 0.412326 23 0.607639 23 0.833333Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </Section>
  );
}

export default Projects;
