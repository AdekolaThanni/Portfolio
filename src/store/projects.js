import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    name: "Telegram Clone",
    cover:
      "https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359547/Portfolio/Telegram%20Clone/Dark_Overview_dftjbn.png",
    description:
      "Chatting web app that enables real-time communication by texting friends, sending photos or voice notes, making voice calls or video calls and chatting with a bot",
    tools: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Framer Motion",
      "Node js",
      "Express js",
      "Mongo DB",
      "Cloudinary",
      "Socket.io",
      "WebRTC",
    ],
    appRepositoryLink: "https://github.com/AdekolaThanni/Telegram-Clone",
  },
  {
    name: "Runner",
    cover:
      "https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359554/Portfolio/Runner/Runner_mwrpwv.png",
    description:
      "MERN stack E-commerce project to sell shoes of different brands and accept payment through Stripe",
    tools: [
      "Figma",
      "React",
      "Redux",
      "Framer Motion",
      "Tailwind CSS",
      "React Router",
      "React Helmet",
      "Node js",
      "Express js",
      "Mongo DB",
      "Stripe",
    ],
    appWalkthroughVideoLink:
      "https://www.linkedin.com/posts/adekola-thanni-874a7523b_react-tech-project-activity-6983766078417965057--N7g?utm_source=share&utm_medium=member_desktop",
    appLiveVersionLink: "https://runner-jb71.onrender.com",
    appRepositoryLink: "https://github.com/AdekolaThanni/Runner",
  },
  {
    name: "Shortly",
    cover:
      "https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359532/Portfolio/Shortly/Shortly_ftutib.png",
    description:
      "This is a web app that shortens urls based on the inputted live websitte. Also keeps record of shortened URL’s in the browser local storage for future use. Also allows copying shortened URL to clipboard by clicking a button for easier use.",
    tools: ["React", "Redux", "Tailwind CSS", "LocalStorage API"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://adekolathanni.github.io/Shortly/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Shortly",
  },
  {
    name: "Upblog",
    cover:
      "https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359643/Portfolio/Upblog/Upblog_ylvwvo.png",
    description:
      "A website that connects to The Guardian API to display the latest news from all sections (Sports, Politics, Football, etc).",
    tools: ["HTML", "Sass", "Javascript", "Guardian RESTful API"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://upblog-adekola.netlify.app/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Upblog",
  },
  {
    name: "Easybank",
    cover:
      "https://res.cloudinary.com/dlanhtzbw/image/upload/v1678359562/Portfolio/Easybank/Easybank_sh5djf.png",
    description:
      "A landing page made for a digital bank to display their edging features, latest articles and more.",
    tools: ["React", "Sass"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://easybank-adekola.netlify.app/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Easybank-Landing-Page",
  },
];

const projectsSlice = createSlice({
  name: "projects",
  initialState,
});

export default projectsSlice.reducer;
