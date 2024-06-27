import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/ProjectsForMobile";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-[#122541] txt-gray no-scrollbar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
