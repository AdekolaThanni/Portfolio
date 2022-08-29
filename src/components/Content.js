const Content = () => {
  return (
    <main className="col-span-full md:col-span-1 md:col-start-1 row-start-2 row-span-1 pl-[5rem]">
      {/* Home section */}
      <section
        id="home"
        className="w-full h-full flex items-start flex-col justify-end"
      >
        <h1 className="text-[6.5rem]">
          Software Developer <br /> and UI/UX Designer
        </h1>
        {/* Sub headline */}
        <p className="text-[2rem]">It's Work and Passion</p>
      </section>
    </main>
  );
};

export default Content;
