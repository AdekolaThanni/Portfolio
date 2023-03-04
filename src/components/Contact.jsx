import React, { useState } from "react";
import Section from "./Section";
import useEmail from "../hooks/useEmail";
import Feedback from "./Feedback";
import { AnimatePresence } from "framer-motion";
import Github from "../assets/svg/github.svg";
import LinkedIn from "../assets/svg/linkedin.svg";
import Twitter from "../assets/svg/twitter.svg";
import Gmail from "../assets/svg/gmail.svg";
import Hashtag from "../assets/3d/Hashtag.png";
import Resume from "../assets/file/Resume.pdf";
import Render3D from "./Render3D";

function Contact() {
  const { formRef, sendEmail, status } = useEmail();
  const [feedback, setFeedback] = useState(false);
  const sendForm = (event) => {
    event.preventDefault();
    sendEmail();
    setFeedback(true);
  };
  return (
    <Section
      id="contact"
      title="Get In Touch!"
      className="pt-[40rem] pb-[20rem] relative"
    >
      {/* 3d icon */}
      <Render3D src3D={Hashtag} />

      <p className="mb-[3rem]">
        If you would like to connect or ask a few questions feel free to reach
        out to me at these social handles.
      </p>

      {/* Social links */}
      <div className=" flex items-center gap-y-[2rem] gap-x-[5rem] flex-wrap">
        {/* Github link */}
        <a
          href="https://www.github.com/AdekolaThanni"
          className="flex items-center gap-[1.5rem]"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Github} alt="" className="w-[3rem] h-[3rem]" />
          <span className="text-[2rem] lowercase">GitHub/AdekolaThanni</span>
        </a>
        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/adekola-thanni/"
          className="flex items-center gap-[1.5rem]"
          target="_blank"
          rel="noreferrer"
        >
          <img src={LinkedIn} alt="" className="w-[3rem] h-[3rem]" />
          <span className="text-[2rem] lowercase">LinkedIn/AdekolaThanni</span>
        </a>
        {/* Twitter Link */}
        <a
          href="https://twitter.com/AdekolaThanni6"
          className="flex items-center gap-[1.5rem]"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="" className="w-[3rem] h-[3rem]" />
          <span className="text-[2rem] lowercase">twitter/AdekolaThanni6</span>
        </a>
        {/* Gmail Link*/}
        <a
          href="https://mailto:adekolathanni@gmail.com"
          className="flex items-center gap-[1.5rem]"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Gmail} alt="" className="w-[3rem] h-[3rem]" />
          <span className="text-[2rem] lowercase">adekolathanni@gmail.com</span>
        </a>
      </div>

      <p className="mt-[10rem]">Or you can fill out a quick form!</p>

      {/* Form */}
      <form
        className="mt-[3rem] flex flex-col gap-[3rem]"
        autoComplete="off"
        ref={formRef}
        onSubmit={sendForm}
      >
        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-[1rem] text-purple-secondary">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="bg-gray-dark rounded-xl text-[2rem] px-[3rem] py-[1rem] focus-within:border-purple-secondary focus-within:outline-none focus-within:border"
          />
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-[1rem] text-purple-secondary">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@me.com"
            className="bg-gray-dark rounded-xl text-[2rem] px-[3rem] py-[1rem] focus-within:border-purple-secondary focus-within:outline-none focus-within:border"
          />
        </div>
        {/* Message */}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-[1rem] text-purple-secondary">
            Message
          </label>
          <textarea
            type="text"
            id="message"
            placeholder="Hi Adekola!"
            className="bg-gray-dark rounded-xl text-[2rem] px-[3rem] py-[2rem] focus-within:border-purple-secondary focus-within:outline-none focus-within:border h-[30rem] resize-none"
          />
        </div>

        <button className="w-fit px-[4rem] py-[1rem] rounded-full text-[2rem] ml-auto background-gradient hover:opacity-70 duration-100 ease-out my-[2rem]">
          Hit me up!
        </button>
      </form>

      <p className="mt-[10rem]">You might need a copy of my resume</p>

      <a
        href={Resume}
        type="application/pdf"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-[1rem] text-[2rem] mt-[2rem] text-purple-secondary"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"
          />
        </svg>
        <span className="">resume.pdf</span>
      </a>

      {
        <AnimatePresence>
          {feedback && (
            <Feedback
              status={status}
              closeFeedback={() => setFeedback(false)}
            />
          )}
        </AnimatePresence>
      }
    </Section>
  );
}

export default Contact;
