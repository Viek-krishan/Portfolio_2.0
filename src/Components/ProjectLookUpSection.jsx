import { useEffect, useState } from "react";
import Slider from "./Slider";
import ProjectDetail from "./ProjectDetail";
import { Link, useNavigate } from "react-router-dom";

const ProjectLookUp = ({ isHovered, setIsHovered }) => {
  // State variables
  const navigate = useNavigate();


  // Utlity functions
  const NavigateToProjectPage = () => {
    navigate("/projects");
  };


  return isHovered.visible === true || isHovered.isClicked === true ? (
    <ProjectDetail isHovered={isHovered} setIsHovered={setIsHovered} Details={isHovered.item} />
  ) : (
    <div className="w-full h-full flex justify-center items-center no-scrollbar ">
      <div className="about w-full h-full z-0 no-scrollbar ">
        <div className="w-full flex flex-col justify-center items-center phone:mt-10 ml-5   ">
          <h1 className="hidden desktop:block   w-fit desktop:text-4xl desktop:text-center font-Cormorant txt-golden  phone:text-3xl  ">
            About Myself
          </h1>
          <h1 className="tablet:hidden phone:text-2xl text-center font-Cormorant  ">
            Hi There, I am <span className="txt-golden">Vivek Krishan.</span>
          </h1>
          <pre className="font-Rajdhani txt-gray text-wrap phone:p-2">
            A web Developer with a advance knowledge of React and great interest
            in developing more interective, responsive and user friendly
            websites
          </pre>
        </div>
        <div className="AboutMe flex flex-col justify-evenly items-center mb-16  phone:mt-5  ">
          <div className="tablet:m-10">
            <h1 className="hidden tablet:block desktop:text-3xl phone:text-2xl text-center font-Cormorant  ">
              Hi There, I am <span className="txt-golden">Vivek Krishan.</span>
            </h1>
            <h3 className="hidden tablet:block phone:text-center phone:mt-5">
              I develope a full-fledged full stack interective and responsive
              websites
            </h3>
          </div>
          <pre className="text-base text-center font-Rajdhani phone:text-wrap phone:px-2">
            Highly motivated and professional with high-level knowledge of
            React. Proficient in managing calendars, organizing meetings and
            events,
            <br /> handling confidential documents, and communicating with
            internal and external clints. Possess exceptional communication and
            interpersonal skills
            <br />
            with a proven ability to work independently and as part of a team.
          </pre>
        </div>
        <div className="Projects block tablet:hidden  m-5 ">
          <button
            className="border-2 border-black w-full flex justify-center items-center h-10 rounded-lg bg-white text-black drop-shadow-md hover:scale-105 hover:drop-shadow-2xl transition duration-150 ease-in-out "
            onClick={NavigateToProjectPage}
          >
            Projects
          </button>
        </div>
        <div className="skills mb-20 ">
          <div className="flex justify-center">
            <h1 className="text-4xl w-fit font-Cormorant txt-golden">
              My Skills
            </h1>
          </div>

          <div>
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectLookUp;
