import About from "./sections/About";
import Home from "./sections/Home";

const Content = () => {
  return (
    <main className="md:pl-[5rem] pl-[2.5rem] h-full w-full snap-y snap-mandatory">
      <Home />
      <About />
    </main>
  );
};

export default Content;
