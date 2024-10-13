import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import MobileHome from "./Components/MobileDesign/MobileHome";
import Home from "./Components/Home.index";
import ContactUs from "./Components/contactUs";
import useLandscapeAlert from "./Utils/useLandscapeAlert";

// Integrate all the website You have created into the project section which you have created. People can live use that website and experience your project.

function App() {
  useLandscapeAlert();
  return (
    <div className="App.jsx-Main-Div w-screen h-fit overflow-hidden ">
      {/* <div className="h-full w-full absolute   z-0  overflow-hidden ">
        <div className="bg-blue-500 w-[34vw] h-[60vh] absolute  rounded-full -left-10   blur-[500px] scale-150 z-0 opacity-60 "></div>
        <span className="bg-blue-500 w-[34vw] h-[60vh] absolute  rounded-full -right-20 bottom-0   blur-[500px] scale-150 z-0 opacity-60"></span>
      </div> */}

      <div className="My-div  fixed w-screen h-full">
        {/* Sky Blue bg */}
        <div class="absolute top-0 -z-50 h-full w-full bg-white">
          <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[100%] rounded-full bg-blue-500/30 opacity-50 blur-[80px]"></div>
          <div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[80vw] -translate-y-[5vh] rounded-full bg-blue-500/30 opacity-50 blur-[80px]"></div>
        </div>

        {/* Purple */}
        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_30%,#fff_30%,#63e_100%)]"></div> */}

        {/* red */}
        {/* <div class="relative h-full w-full bg-gray-200">
          <div class="absolute bottom-0 left-[60%] right-0 top-[-20%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div class="absolute bottom-0 right-[40%] top-[40%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div> */}

        {/* Dotted */}
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#a3a3a3] bg-[radial-gradient(#ffffff33_1px,#f1f2f2_1px)] bg-[size:20px_20px]"></div> */}

        {/* Orange */}
        {/* <div class="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-orange-400/30 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(250,177,30,.4)_100%)]"></div> */}
      </div>

      <div className="phone:block tablet:hidden h-fit">
        <Routes>
          <Route path="/" element={<MobileHome />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <div className="hidden tablet:block h-fit">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
