import React from "react";
import { useSelector } from "react-redux";
import Image from "./Image";
import ProjectCaseStudy from "./ProjectCaseStudy";

function TelegramCaseStudy() {
  const { project } = useSelector((state) => state.caseStudyReducer);
  const tools = useSelector((state) => state.toolsReducer);

  return (
    <ProjectCaseStudy visible={project?.name === "Telegram Clone"}>
      {/* Title */}
      <h2 className="text-[4rem] flex items-center gap-[2rem] text-[#29b6f6] font-bold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
          className="inline-block"
        >
          <path fill="#29b6f6" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z" />
          <path
            fill="#fff"
            d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
          />
          <path
            fill="#b0bec5"
            d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
          />
          <path
            fill="#cfd8dc"
            d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
          />
        </svg>
        Telegram Clone
      </h2>

      {/* Overview to explain what project accomplishes*/}
      <p className="mt-[2rem] mb-[6rem] indent-[3rem]">
        This is a chat application or platform that enables real-time
        communication between users through their computers or mobile devices on
        web browsers with their sensitive information secured by the server.
        Users have been given a lot of features and option to make communication
        between them and their counterparts seamless and fun to engage with.
        <span className="indent-[3rem] block">
          Images, Voice recordings, Text messages filled with emoji options can
          be shared. Real time communication with voice calls or audio calls can
          also be made to keep things more intresting.
        </span>
      </p>

      <h3 className="text-[2rem] text-[#29b6f6] block">Repository link</h3>
      <a
        href={project?.appRepositoryLink}
        className="hover:opacity-70"
        target="_blank"
        rel="noreferrer"
      >
        {project?.appRepositoryLink}
      </a>

      <h3 className="text-[2rem] text-[#29b6f6] mb-[1.5rem] mt-[6rem] block">
        Visual overview of the app
      </h3>
      <video
        src="https://res.cloudinary.com/dlanhtzbw/video/upload/v1678360056/Portfolio/Telegram%20Clone/Telegram_Edited_uphzi0.mp4"
        className="w-full rounded-3xl object-top"
        autoPlay
        controls
        muted
        controlsList="nodownload"
      />

      {/* Features of Application */}
      <h3 className="text-[2rem] text-[#29b6f6] mt-[8rem]">Features:</h3>
      <ul className="list-disc list-inside space-y-[5rem] pt-[2rem]">
        {/* Light or dark theme */}
        <li className="">
          <h4 className="inline-block font-semibold">Light or Dark Theme</h4>
          <div className="mt-[1rem]">
            Light or dark theme option was integrated into the app in order to
            allow users flexibility of choice when it comes to application
            appearance, this was a feature developed with{" "}
            <span className="text-[#29b6f6]">Tailwind CSS</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359530/Portfolio/Telegram%20Clone/Overview_Medium_oscnti.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359507/Portfolio/Telegram%20Clone/Dark_Overview_Medium_mzl8lj.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Chat pinning */}
        <li className="">
          <h4 className="inline-block font-semibold">Chat Pinning</h4>
          <div className="mt-[1rem]">
            Chat pinning feature was enabled so as to allow users to keep their
            favourite chat at the top of the chat list for easy reach, this was
            achievable by using a{" "}
            <span className="text-[#29b6f6]">sorting algorithm</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359486/Portfolio/Telegram%20Clone/Chat_options_llouki.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Chat search */}
        <li className="">
          <h4 className="inline-block font-semibold">Chat Search</h4>
          <div className="mt-[1rem]">
            Chat searching feature is integrated to allow users to search for a
            past chat with a contact that may have gone down the chat list, this
            was a feature developed through a{" "}
            <span className="text-[#29b6f6]">sorting algorithm</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359495/Portfolio/Telegram%20Clone/Search_Feature_bsxzhb.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* New private chat */}
        <li className="">
          <h4 className="inline-block font-semibold">New Private Chat</h4>
          <div className="mt-[1rem]">
            This is a shortcut link created to enable user to start a new chat
            with someone on their contact list, this was developed using{" "}
            <span className="text-[#29b6f6]">Redux dispatch actions</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359495/Portfolio/Telegram%20Clone/New_private_chat_bnox1x.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Delete chat */}
        <li className="">
          <h4 className="inline-block font-semibold">Delete Chat</h4>
          <div className="mt-[1rem]">
            Delete chat feature was integrated so users can get rid of past
            chats they migh not be comfortable with or feel is now obsolete,
            this was developed through the{" "}
            <span className="text-[#29b6f6]">
              server API and Redux dispatch actions
            </span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359493/Portfolio/Telegram%20Clone/Discard_chat_modal_jiraou.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* User settings */}
        <li className="">
          <h4 className="inline-block font-semibold">User Settings</h4>
          <div className="mt-[1rem]">
            User setting is enabled to allow user to change their profile
            settings e.g Uploading a new profile picture, changing username or
            uploading new bio status, this was achieved by using{" "}
            <span className="text-[#29b6f6]">Cloudinary</span> to store picture
            uploads, <span className="text-[#29b6f6]">server API</span> to make
            changes to user profile details
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359497/Portfolio/Telegram%20Clone/Settings_hgu9rs.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Contact List */}
        <li className="">
          <h4 className="inline-block font-semibold">Contact List</h4>
          <div className="mt-[1rem]">
            Contact list feature is integrated so users can go through all the
            contacts they have and and event start a chat with them from there
            by a click, feature was achieved through{" "}
            <span className="text-[#29b6f6]">Redux dispatch actions</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359486/Portfolio/Telegram%20Clone/Contacts_kxpsph.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Contact Search */}
        <li className="">
          <h4 className="inline-block font-semibold">Contact Search</h4>
          <div className="mt-[1rem]">
            Contact search feature is enabled to allow users to search for
            specific contact they would like to start a chat with, feature was
            enabled through{" "}
            <span className="text-[#29b6f6]">sorting algorithms</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359485/Portfolio/Telegram%20Clone/Contact_Search_feature_hj1cj1.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Add Contact */}
        <li className="">
          <h4 className="inline-block font-semibold">Add Contact</h4>
          <div className="mt-[1rem]">
            Add Contact feature was enabled so users can create a new contact
            for someone they just met or have known, feature was achieved
            through{" "}
            <span className="text-[#29b6f6]">
              server API and Redux dispatch actions
            </span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359494/Portfolio/Telegram%20Clone/Add_contact_modal_cnmkhs.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Delete Contact */}
        <li className="">
          <h4 className="inline-block font-semibold">Delete Contact</h4>
          <div className="mt-[1rem]">
            We all have that menace on our contact list we would like to get rid
            of, this feature was made just because of that through{" "}
            <span className="text-[#29b6f6]">
              server API and Redux dispatch actions
            </span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359494/Portfolio/Telegram%20Clone/Delete_contact_modal_n0cqpq.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Contact Profile */}
        <li className="">
          <h4 className="inline-block font-semibold">Contact Profile</h4>
          <div className="mt-[1rem]">
            Contact profile checking feature is enabled to allow user to check
            through contact profile to zoom in on their profile picture and also
            see other details about them, this was mainly achievable using{" "}
            <span className="text-[#29b6f6]">
              React dynamic rendering and Redux dispatch actions
            </span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359516/Portfolio/Telegram%20Clone/User_profile_ywfyjn.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Contact Online Status */}
        <li className="">
          <h4 className="inline-block font-semibold">Contact Online Status</h4>
          <div className="mt-[1rem]">
            Contact online status is a feature enabled so user can see if the
            contact is currently online and if offline when they logged out of
            their app, feature was developed using{" "}
            <span className="text-[#29b6f6]">Socket.io</span> to dispatch
            offline or online status in real-time and{" "}
            <span className="text-[#29b6f6]">MongoDB</span> to store user online
            or offline status
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359500/Portfolio/Telegram%20Clone/user_last_seen_otq1wn.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Emojis */}
        <li className="">
          <h4 className="inline-block font-semibold">Emojis</h4>
          <div className="mt-[1rem]">
            Emoji feature was enabled to allow users to add fun interactions
            during conversations, feature was enabled using the{" "}
            <span className="text-[#29b6f6]">React emoji picker library</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359492/Portfolio/Telegram%20Clone/Emoji_modal_mzbjtf.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Voice recording */}
        <li className="">
          <h4 className="inline-block font-semibold">Voice Recording</h4>
          <div className="mt-[1rem]">
            This feature allows users to record audio and send them to people,
            this feature was accomplished using{" "}
            <span className="text-[#29b6f6]">React media recorder</span> to
            record audio from users and{" "}
            <span className="text-[#29b6f6]">Cloudinary</span> to store uploaded
            audio
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359515/Portfolio/Telegram%20Clone/Voice_message_record_vkzoqn.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Delete voice recording */}
        <li className="">
          <h4 className="inline-block font-semibold">Delete voice recording</h4>
          <div className="mt-[1rem]">
            This feature was enabled so as to allow users to delete voice
            recordings they may not be comfotable with, this feature was
            possible with{" "}
            <span className="text-[#29b6f6]">React media recorder</span>
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359493/Portfolio/Telegram%20Clone/Discard_voice_message_modal_qbdfvx.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Send photo */}
        <li className="">
          <h4 className="inline-block font-semibold">Photo</h4>
          <div className="mt-[1rem]">
            This feature enables users to share photos while chatting, this was
            made possible by using{" "}
            <span className="text-[#29b6f6]">Cloudinary</span> to store uploaded
            photos and <span className="text-[#29b6f6]">Socket.io</span> to
            share photo in real time
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359504/Portfolio/Telegram%20Clone/Upload_photo_modal_jvcfzd.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Calls */}
        <li className="">
          <h4 className="inline-block font-semibold">Calls</h4>
          <div className="mt-[1rem]">
            This feature enables users to make voice or video calls, this was
            achieved by using <span className="text-[#29b6f6]">Socket.io</span>{" "}
            to send call requests to users in real time and{" "}
            <span className="text-[#29b6f6]">WebRTC</span> to enable real-time
            media communication
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359523/Portfolio/Telegram%20Clone/Voice_call_feature_c5uqgf.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Call Records */}
        <li className="">
          <h4 className="inline-block font-semibold">Call Records</h4>
          <div className="mt-[1rem]">
            This feature is integrated to allow users to see records of calls
            they've been on and see their details, this was enabled using{" "}
            <span className="text-[#29b6f6]">React</span> to display record and{" "}
            <span className="text-[#29b6f6]">MongoDB</span> to store records
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359490/Portfolio/Telegram%20Clone/Call_record_ixlvop.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
        {/* Chatbot */}
        <li className="">
          <h4 className="inline-block font-semibold">Chatbot</h4>
          <div className="mt-[1rem]">
            This feature was integrated so that users can have fun on the app
            with the Telegram Chatbot while some of their contacts might be
            offline, this was achieved using a{" "}
            <span className="text-[#29b6f6]">Chatbot RESTful API</span> to send
            message and get responses from chatbot
            <div className="grid grid-cols-2 gap-[2rem] grid-col- mt-[3rem] overflow-hidden md:grid-cols-1">
              <Image
                src="https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359499/Portfolio/Telegram%20Clone/Telegram_Bot_Feature_pldzlr.png"
                alt=""
                className=""
                containerClassName="w-fit"
              />
            </div>
          </div>
        </li>
      </ul>

      {/* Tech stacks used for application */}
      <h3 className="text-[2rem] text-[#29b6f6] mt-[6rem] inline-block mb-[1rem]">
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
      <h3 className="text-[2rem] text-[#29b6f6] mt-[6rem] inline-block mb-[1rem]">
        Requirements Application Had To Fulfill
      </h3>
      <ul className="list-disc list-inside mt-[1rem] space-y-[1rem]">
        <li className="">
          Enabling authentication of users and giving them a unique identifier
          e.g a username for their account. This is needed for two reasons, so
          the server can distinguish all users and authenticate them correctly
          and also users can share this username with other users so that they
          can message them from their end, more like how we share our phone
          numbers with people that would eventually call us in the future the
          username serves that purpose.
        </li>
        <li className="">
          Storing user credentials in order to remember their session the next
          time they visit the website. This avoids the user having to login
          everytime they visit the app.
        </li>
        <li className="">
          Ensuring cross-browser compatibility of the app. This ensures the app
          has a consistent behaviour and outlook on all browsers be it Google
          chrome, Mozilla firefox, Internet explorer, Safari and so on.
        </li>
        <li className="">
          Ensuring real-time updates of app so users can see instant messages,
          sent/delivered/read receipts, online/offline presence of contacts and
          also call requests from their contacts.
        </li>
        <li className="">
          Ensured web application was responsive to all screen sizes to optimize
          accessibility across multiple devices.
        </li>
      </ul>
    </ProjectCaseStudy>
  );
}

export default TelegramCaseStudy;
