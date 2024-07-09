import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/ProjectsForMobile";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-white txt-gray no-scrollbar">
      <div className="h-full w-full absolute   z-0  overflow-hidden ">
        <div className="bg-blue-500 w-[34vw] h-[60vh] absolute  rounded-full -left-10   blur-[500px] scale-150 z-0 opacity-60 "></div>
        <span className="bg-blue-500 w-[34vw] h-[60vh] absolute  rounded-full -right-20 bottom-0   blur-[500px] scale-150 z-0 opacity-60"></span>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
