import { useState } from "react";
import ProjectList from "../Project-list";
import { motion } from "framer-motion";
import { animationVariable } from "../../Utils/animationVariable";
import DetailsPopUp from "./DetailsPopup";

const MobileHome = () => {
  const [isHovered, setIsHovered] = useState({
    visible: false,
    item: {},
    isClicked: false,
  });

  return (
    <div>
      {/* heading */}
      <div className="home w-full h-fit desktop:mt-10 desktop:mb-10 ">
        <motion.h1
          variants={animationVariable(0, 100)}
          initial="hidden"
          whileInView="visible"
          className="w-fit font-[700] m-4  pb-2 font-Caveat  txt-Blue phone:text-3xl phone:mt-10 phone:text-center    "
        >
          Building the Web, Building Your Success.
        </motion.h1>
      </div>

      <div className="w-full h-full flex justify-center items-center no-scrollbar z-50">
        <div className="about w-full h-full z-0 no-scrollbar ">
          <div className="w-full flex flex-col justify-center items-center   "></div>
          <motion.div
            variants={animationVariable(0.5, 100)}
            initial="hidden"
            animate="visible"
            className="AboutMe flex flex-col justify-evenly items-center mb-16  phone:mt-5  "
          >
            <div className="tablet:m-10">
              <motion.h1 className="tablet:hidden phone:text-2xl text-center font-Cormorant  ">
                Hi There, I am{" "}
                <span className="txt-Blue font-Caveat font-[700]">
                  Vivek Krishan.
                </span>
              </motion.h1>

              <h3 className="px-4">
                I develope a full-fledged full stack interective and responsive
                websites
              </h3>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="ProjectsList    ">
        <motion.h1
          variants={animationVariable(0, -100)}
          initial="hidden"
          whileInView="visible"
          className="text-center phone:text-2xl tablet:text-2xl mb-2 font-Cormorant txt-Blue z-50"
        >
          My Projects
        </motion.h1>
        <ProjectList isHovered={isHovered} setIsHovered={setIsHovered} />
      </section>

      {isHovered.isClicked && (
        <section className="Project-Details absolute z-50 top-0 h-screen w-screen overflow-hidden ">
          <DetailsPopUp setIsHovered={setIsHovered} item={isHovered.item} />
        </section>
      )}
    </div>
  );
};

export default MobileHome;
