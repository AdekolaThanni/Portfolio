import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";
import ProjectCaseStudy from "./ProjectCaseStudy";

function UpblogCaseStudy() {
  const { project } = useSelector((state) => state.caseStudyReducer);
  const tools = useSelector((state) => state.toolsReducer);

  return (
    <ProjectCaseStudy visible={project?.name === "Upblog"}>
      {/* Title */}
      <h2 className="text-[4rem] flex items-center gap-[2rem]  font-bold ">
        Upblog
      </h2>

      {/* Overview of what project accomplishes */}
      <p className="mt-[2rem] mb-[6rem] indent-[3rem]">
        This is a news platform that gives access for readers to see the latest
        news from all niche they might be intrested in like Sports, Politics,
        Entertainment, Technology, e.t.c on the internet through their Computers
        or mobile devices.
      </p>

      {/* Live app link */}
      <h3 className="text-[2rem]  block">Live App link</h3>
      <a
        href={project?.appRepositoryLink}
        className="hover:opacity-70"
        target="_blank"
        rel="noreferrer"
      >
        {project?.appRepositoryLink}
      </a>
      {/* Repository link */}
      <h3 className="text-[2rem]  block mt-[2rem]">Repository link</h3>
      <a
        href={project?.appRepositoryLink}
        className="hover:opacity-70"
        target="_blank"
        rel="noreferrer"
      >
        {project?.appRepositoryLink}
      </a>

      <h3 className="text-[2rem]  mb-[1.5rem] mt-[6rem] block">
        Visual overview of the app
      </h3>
      <video
        src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1678457536/Portfolio/Upblog/Upblog_summary_rnfsgn.mp4"
        className="w-full rounded-3xl object-top"
        autoPlay
        controls
        controlsList="nodownload"
      />

      <ul className="list-disc list-inside space-y-[5rem] pt-[2rem]">
        {/* News Feed */}
        <li className="">
          <h4 className="inline-block font-semibold">News Feed</h4>
          <div className="mt-[1rem]">
            The News Feed is the page where readers see collections of the
            latest news in the current section they are in, this was made
            possible using{" "}
            <span className=" font-bold">Javascript Fetch API</span> to request
            for latest news on The Guardian Newspaper API
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678459400/Portfolio/Upblog/Overview_bef011.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>

        {/* News Sections */}
        <li className="">
          <h4 className="inline-block font-semibold">News Sections</h4>
          <div className="mt-[1rem]">
            The News Sections feature allows readers to change between sections
            they'd like to read up on, from Sports, Technology, Politics,
            Entertainment and more, this was built using{" "}
            <span className=" font-bold">HTML and CSS</span> to create a
            dropdown menu and <span className=" font-bold">Javascript</span> to
            request for an update to the news feed.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678459348/Portfolio/Upblog/Categories_sxi64k.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>

        {/* Pagination */}
        <li className="">
          <h4 className="inline-block font-semibold">Pagination</h4>
          <div className="mt-[1rem]">
            The Pagination feature helps to limit articles that appear in a
            single news feed to keep it from boring readers, this was possible
            using <span className=" font-bold">Javascript</span> to limit the
            number of articles requested in a single news feed and also to keep
            track and update the current page reader is in.
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678459347/Portfolio/Upblog/Pagination_dfvnef.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>

        {/* Article Info */}
        <li className="">
          <h4 className="inline-block font-semibold">Article Info</h4>
          <div className="mt-[1rem]">
            Article info page shows reader the full news report on an headline
            so they can digest the true information and not the hot headlines,
            this was possible using{" "}
            <span className=" font-bold">Javascript</span> to request for the
            full article and also to show it dynamically
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678459362/Portfolio/Upblog/Article_fnscsw.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
      </ul>

      {/* Tech stacks used for application */}
      <h3 className="text-[2rem]  mt-[6rem] inline-block mb-[1rem]">
        Tech stacks
      </h3>
      <p className="">
        Summary of the technological tools used to develop the app are:
      </p>
      {/* Project tools */}
      <div className="flex flex-wrap gap-[2rem] mt-[2rem]">
        {project?.tools.map((tool, index) => {
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

      {/* Requirements application fulfilled */}
      <h3 className="text-[2rem]  mt-[6rem] inline-block mb-[1rem]">
        Requirements Application Had To Fulfill
      </h3>
      <ul className="list-disc list-inside mt-[1rem] space-y-[1rem]">
        <li className="">
          Ensuring cross-browser compatibility of the app. This ensures the app
          has a consistent behaviour and outlook on all browsers be it Google
          chrome, Mozilla firefox, Internet explorer, Safari and so on.
        </li>
        <li className="">
          Ensured web application was responsive to all screen sizes to optimize
          accessibility across multiple devices.
        </li>
      </ul>
    </ProjectCaseStudy>
  );
}

export default UpblogCaseStudy;
