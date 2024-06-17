import { useEffect, useState } from "react";
import Slider from "./Slider";
import ProjectDetail from "./ProjectDetail";

const ProjectLookUp = ({ isHovered }) => {
  // State variables

  // console.log(isHovered.isClicked);

  // Utlity functions

  return isHovered.visible === true || isHovered.isClicked === true ? (
    // isHovered.isClicked === true ? (
    //   <ProjectDetail isHovered={isHovered} Details={isHovered.item} />
    // ) : (
    //   <ProjectDetail isHovered={isHovered} />
    // )
    <ProjectDetail isHovered={isHovered} Details={isHovered.item} />
  ) : (
    <div className="w-full h-full flex justify-center items-center no-scrollbar   ">
      <div className="about w-full h-full z-0 no-scrollbar ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="w-fit text-4xl text-center font-Cormorant txt-golden ">
            About Myself
          </h1>
          <pre className="font-Rajdhani txt-gray">
            A web Developer with a advance knowledge of React and great interest
            in developing
          </pre>
          <pre className="font-Rajdhani txt-gray ">
            more interective, responsive and user friendly websites
          </pre>
        </div>
        <div className="AboutMe flex flex-col justify-evenly items-center mb-16 ">
          <div className="m-10">
            <h1 className="text-3xl text-center font-Cormorant  ">
              Hi There, I am <span className="txt-golden">Vivek Krishan.</span>
            </h1>
            <h3>
              I develope a full-fledged full stack interective and responsive
              websites
            </h3>
          </div>
          <pre className="text-base text-center font-Rajdhani">
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
