const useAppHeight = () => {
  const setHeight = () => {
    document.querySelector("#root").style.height = window.innerHeight + "px";
  };

  // set an event listener that detects when innerHeight changes:
  window.addEventListener("resize", setHeight);

  // set initial height:
  setHeight();
};

export default useAppHeight;
