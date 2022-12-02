const useProjectsList = () => [
  {
    name: "Runner",
    imageUrl: "Runner.png",
    description:
      "MERN stack E-commerce project to sell shoes of different brands and accept payment through Stripe",
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
    appWalkthroughVideoLink:
      "https://www.linkedin.com/posts/adekola-thanni-874a7523b_react-tech-project-activity-6983766078417965057--N7g?utm_source=share&utm_medium=member_desktop",
    appLiveVersionLink: "https://runner-store.herokuapp.com/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Runner",
  },
  {
    name: "Shortly",
    imageUrl: "Shortly.png",
    description:
      "This is a web app that shortens urls based on the inputted live websitte. Also keeps record of shortened URL’s in the browser local storage for future use. Also allows copying shortened URL to clipboard by clicking a button for easier use.",
    tools: ["React", "Redux", "Tailwind CSS", "LocalStorage API"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://adekolathanni.github.io/Shortly/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Shortly",
  },
  {
    name: "Upblog",
    imageUrl: "Upblog.png",
    description:
      "A website that connects to The Guardian API to display the latest news from all sections (Sports, Politics, Football, etc).",
    tools: ["HTML", "SCSS", "Javascript", "Guardian RESTful API"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://upblog-adekola.netlify.app/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Upblog",
  },
  {
    name: "Easybank",
    imageUrl: "Easybank.png",
    description:
      "A landing page made for a digital bank to display their edging features, latest articles and more.",
    tools: ["React", "SCSS"],
    appWalkthroughVideoLink: "",
    appLiveVersionLink: "https://easybank-adekola.netlify.app/",
    appRepositoryLink: "https://github.com/AdekolaThanni/Easybank-Landing-Page",
  },
];

export default useProjectsList;
