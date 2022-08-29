import Content from "./components/Content";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import useVanta from "./hooks/useVanta";

function App() {
  const vantaRef = useVanta();
  return (
    <div ref={vantaRef} className="bg-black w-screen h-screen grid text-white">
      {/* Header */}
      <Header />
      {/* Sidebar */}
      {/* <Sidebar /> */}
      {/* Content */}
      <Content />
    </div>
  );
}

export default App;
