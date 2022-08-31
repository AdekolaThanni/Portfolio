import React from "react";

function Contact() {
  return (
    <section id="contact" className="">
      {/* Heading */}
      <h2 className="mb-[5rem]">
        <svg
          width="100"
          height="3"
          viewBox="0 0 100 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="1.5"
            x2="100"
            y2="1.5"
            stroke="currentColor"
            stroke-width="3"
          />
        </svg>
        Get in Touch!
      </h2>
      <form className="mx-auto max-w-[50rem] space-y-[2rem] flex flex-col">
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="name" className="text-[2rem] text-white">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full bg-gray-light text-[1.5rem] py-[1rem] px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="email" className="text-[2rem] text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full bg-gray-light text-[1.5rem] py-[1rem] px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="flex flex-col items-start gap-[.2rem] w-full">
          <label htmlFor="message" className="text-[2rem] text-white">
            Message
          </label>
          <textarea
            id="message"
            className="w-full h-[20rem] bg-gray-light text-[1.5rem] py-[1rem] px-[2rem] text-purple-secondary rounded-[.5rem] focus:border-purple-primary focus:border-[.2rem] focus:outline-none scrollbar"
            placeholder="Hi Adekola!"
          ></textarea>
        </div>
        <button className="p-[1rem] px-[2rem] border-purple-primary border text-purple-primary text-[2rem] mt-[5rem] hover:border-white hover:text-white duration-200 rounded-[.5rem] self-end">
          Send Message
        </button>
      </form>
      <div className="flex gap-[2rem] mx-auto max-w-[50rem] mt-[3rem] items-center">
        {/* Linked in link */}
        <a
          href="https://www.linkedin.com/in/adekola-thanni-874a7523b/"
          className=""
          rel="noreferrer"
          target="_blank"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-link-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.7862 11.7112H16.4287V14.0237C17.0975 12.6937 18.8125 11.4987 21.3887 11.4987C26.3275 11.4987 27.5 14.1462 27.5 19.0037V28H22.5V20.11C22.5 17.3437 21.8312 15.7837 20.1287 15.7837C17.7675 15.7837 16.7862 17.465 16.7862 20.1087V28H11.7862V11.7112V11.7112ZM3.2125 27.7875H8.2125V11.4987H3.2125V27.7875V27.7875ZM8.92875 6.1875C8.92893 6.60659 8.84582 7.02154 8.68423 7.40823C8.52265 7.79492 8.28581 8.14564 7.9875 8.44C7.383 9.04078 6.56476 9.37707 5.7125 9.375C4.86174 9.37443 4.04539 9.039 3.44 8.44125C3.14276 8.14589 2.90673 7.79478 2.74543 7.40804C2.58413 7.0213 2.50072 6.60653 2.5 6.1875C2.5 5.34125 2.8375 4.53125 3.44125 3.93375C4.04611 3.3352 4.8628 2.99963 5.71375 3C6.56625 3 7.38375 3.33625 7.9875 3.93375C8.59 4.53125 8.92875 5.34125 8.92875 6.1875Z"
              fill="white"
              className="fill-purple-secondary"
            />
          </svg>
        </a>
        {/* Github link */}
        <a
          href="https://github.com/AdekolaThanni"
          rel="noreferrer"
          target="_blank"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="nav-link-icon"
          >
            <path
              d="M15 0.871277C6.7125 0.871277 0 7.58753 0 15.8713C0 22.5 4.2975 28.1213 10.2562 30.1025C11.0062 30.2438 11.2812 29.78 11.2812 29.3813C11.2812 29.025 11.2688 28.0813 11.2625 26.8313C7.09 27.7363 6.21 24.8188 6.21 24.8188C5.5275 23.0875 4.54125 22.625 4.54125 22.625C3.1825 21.695 4.64625 21.7138 4.64625 21.7138C6.1525 21.8188 6.94375 23.2588 6.94375 23.2588C8.28125 25.5525 10.455 24.89 11.3125 24.5063C11.4475 23.5363 11.8338 22.875 12.2625 22.5C8.93125 22.125 5.43 20.835 5.43 15.0875C5.43 13.45 6.01125 12.1125 6.97375 11.0625C6.805 10.6838 6.29875 9.15878 7.105 7.09253C7.105 7.09253 8.36125 6.69003 11.23 8.63003C12.43 8.29628 13.705 8.13128 14.98 8.12378C16.255 8.13128 17.53 8.29628 18.73 8.63003C21.58 6.69003 22.8362 7.09253 22.8362 7.09253C23.6425 9.15878 23.1362 10.6838 22.9862 11.0625C23.9425 12.1125 24.5237 13.45 24.5237 15.0875C24.5237 20.85 21.0175 22.1188 17.68 22.4875C18.205 22.9375 18.6925 23.8575 18.6925 25.2625C18.6925 27.27 18.6738 28.8825 18.6738 29.37C18.6738 29.7638 18.9362 30.2325 19.705 30.0825C25.7063 28.115 30 22.49 30 15.8713C30 7.58753 23.2837 0.871277 15 0.871277"
              fill="white"
              className="fill-purple-secondary"
            />
          </svg>
        </a>
        {/* Mail link */}
        <span className="text-purple-secondary text-[1.5rem] cursor-pointer hover:text-purple-primary duration-200">
          adekolathanni@gmail.com
        </span>
      </div>
    </section>
  );
}

export default Contact;
