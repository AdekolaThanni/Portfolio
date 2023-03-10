import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    title: "HTML",
    description:
      "I use this markup language for structuring and presenting web contents",
    colorCode: "#e34f26",
  },
  {
    title: "CSS",
    description:
      "I use the stylesheet language to describe the presentation of markup languages",
    colorCode: "#1b73ba",
  },
  {
    title: "Javascript",
    description:
      "I use the scripting or programming language to implement complex features on web pages",
    colorCode: "#e9ca32",
  },
  {
    title: "Sass",
    description:
      "I use this as a preprocessor scripting language to be compiled into CSS.",
    colorCode: "#CF649A",
  },
  {
    title: "Tailwind CSS",
    description:
      "I use the utility-first CSS framework to rapidly build custom user interfaces",
    colorCode: "#06b6d4",
  },
  {
    title: "Bootstrap",
    description:
      "I use the web framework to ease process of developing responsive, mobile-first websites",
    colorCode: "#7952B3",
  },
  {
    title: "jQuery",
    description:
      "I use the JS library to simplify HTML manipulation, event handling, CSS animation, and Ajax",
    colorCode: "#6ba0ab",
  },
  {
    title: "Figma",
    description:
      "I use the design tool to create websites or web app interfaces",
    colorCode: "#ff7262",
  },
  {
    title: "React",
    description:
      "I use the JavaScript library to build user interfaces based on components",
    colorCode: "#61dafb",
  },
  {
    title: "Framer Motion",
    description:
      "I use the React library to add smooth animation to JSX components",
    colorCode: "#bb4b96",
  },
  {
    title: "React Router",
    description:
      "I use the React library to integrate client side routing for client side rendered apps",
    colorCode: "#CA4245",
  },
  {
    title: "Redux",
    description:
      "I use the JavaScript library to manage and centralize application state in React",
    colorCode: "#764ABC",
  },
  {
    title: "Node js",
    description:
      "I use the back-end JavaScript runtime environment to execute JS code outside the web browser",
    colorCode: "#339933",
  },
  {
    title: "Express js",
    description:
      "I use the back end web application framework to build RESTful APIs with Node.js",
    colorCode: "#fff",
  },
  {
    title: "Mongo DB",
    description:
      "I use the document-oriented NoSQL database to store high volume data",
    colorCode: "#599636",
  },
  {
    title: "Cloudinary",
    description:
      "I use the cloud server to store uploaded media files by users",
    colorCode: "#dc8327",
  },
  {
    title: "Socket.io",
    description:
      "I use the web framework to enable bi-directional communication between the browser and server",
    colorCode: "#ffffff",
  },
  {
    title: "WebRTC",
    description:
      "I use the web framework to enable real-time communication between users on the browser",
    colorCode: "#61dafb",
  },
];

const toolsSlice = createSlice({
  name: "projects",
  initialState,
});

export default toolsSlice.reducer;
