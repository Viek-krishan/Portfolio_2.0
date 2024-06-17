import { Route, Routes } from "react-router-dom";
// import ReactHover, { Trigger, Hover } from "react-hover";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import HoverTesting from "./Components/HoverTesting";

function App() {
  return (
    <div className="w-full h-screen overflow-x-hidden bg-[#122541] txt-gray no-scrollbar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<HoverTesting />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
