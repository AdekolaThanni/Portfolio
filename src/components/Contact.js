import React, { useRef } from "react";
import Section from "./Section";

function Contact() {
  const form = useRef();
  return (
    <Section id="contact" title="Get in Touch!" className="">
      <form
        autoComplete="off"
        ref={form}
        className="mx-auto max-w-[60rem] space-y-[2rem] flex flex-col"
      >
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="name" className="text-[2rem] text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-gray-light text-[1.5rem] py-[1rem] px-[1rem] sm:px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none"
            placeholder="John Doe"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="email" className="text-[2rem] text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-gray-light text-[1.5rem] py-[1rem] px-[1rem] sm:px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none"
            placeholder="johndoe@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="message" className="text-[2rem] text-white">
            Message
          </label>
          <textarea
            id="message"
            className="resize-none w-full h-[30rem] bg-gray-light text-[1.5rem] py-[1rem] px-[1rem] sm:px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none scrollbar"
            placeholder="Hi Adekola!"
            required
          ></textarea>
        </div>
        <button className="p-[1rem] px-[2rem] border-purple-primary border text-purple-primary text-[2rem] mt-[4.8rem] hover:border-white hover:text-white duration-200 rounded-[.5rem] self-end">
          Send Message
        </button>
      </form>
    </Section>
  );
}

export default Contact;
