import { useState } from "react";
import ProjectList from "./Project-list";
import { motion } from "framer-motion";
import { animationVariable } from "../Utils/animationVariable";
import ProjectDetails from "./Project-details";
import Skills from "./Tools";
import { Link } from "react-router-dom";

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    visible: false,
    item: {},
    isClicked: false,
  });

  // UI for multiple pages displaying under the description
  const PageUI = ({ page, index }) => {
    return (
      <div className=" m-5 mb-54 w-full flex justify-center items-center  z-50">
        {index === 0 || index % 2 === 0 ? (
          <motion.div
            variants={animationVariable(0, 0, 200)}
            initial="hidden"
            whileInView="visible"
            className=" p-5 pb-60 w-full flex justify-center items-center  z-50"
          >
            <div className="PageDetails px-5 tablet:w-2/3 ">
              <h1 className="text-2xl font-BodoniModa underline text-center mb-10">
                {page[1]}
              </h1>
              <h3 className="text-sm font-Exo font-extralight">{page[2]}</h3>
            </div>
            <div className="mr-10">
              <img
                src={`${page[0]}`}
                alt=""
                className="tablet:w-[65vw]  rounded-3xl drop-shadow-2xl"
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            variants={animationVariable(0, 0, -200)}
            initial="hidden"
            whileInView="visible"
            className=" p-5 pb-60 w-full flex justify-center items-center z-50"
          >
            <div className="">
              <img
                src={`${page[0]}`}
                alt=""
                className="laptop:w-[65vw]  rounded-3xl drop-shadow-2xl"
              />
            </div>
            <div className="PageDetails px-10 tablet:w-2/3 z-50">
              <h1 className="text-2xl font-BodoniModa underline text-center mb-10">
                {page[1]}
              </h1>
              <h3 className="text-sm font-Exo font-extralight">{page[2]}</h3>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <div>
      {/* heading */}
      <div className="home w-full h-fit desktop:mt-10 desktop:mb-10 ">
        <motion.h1
          variants={animationVariable(0, 100)}
          initial="hidden"
          whileInView="visible"
          className="w-full desktop:relative text-center  desktop:text-[4rem] tablet:text-[3rem] desktop:mb-0 desktop:p-4 font-[700] m-4  pb-2 font-Caveat  txt-Blue phone:text-3xl phone:mt-10   "
        >
          Building the Web, Building Your Success.
        </motion.h1>
        <motion.div
          variants={animationVariable(0, 100)}
          initial="hidden"
          whileInView="visible"
          className="absolute right-20 top-10 "
        >
          <Link
            to={"/contact"}
            className="border px-3 py-1 bg-blue-600 text-white rounded-lg drop-shadow-xl hover:scale-110 transition duration-150 ease-in-out"
          >
            Let's Talk
          </Link>
        </motion.div>
      </div>
      <div className="Project_List_and_Lookup w-full h-fit tablet:flex justify-evenly items-start ">
        <section className="ProjectsList hidden tablet:w-1/4 tablet:flex flex-col items-center justify-center   ">
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
        <section className="ProjectLookUp tablet:w-4/6 phone:w-screen">
          <ProjectDetails isHovered={isHovered} setIsHovered={setIsHovered} />
        </section>
      </div>

      {/* Rendering all the pages and it's details of a perticular project */}
      {isHovered.visible === true || isHovered.isClicked === true ? (
        <div className="ProjectDetail z-50">
          {/* TODO:Write the complete project Description for all projects */}
          <div className="Project_Description"></div>

          {/* Looping on all the pages on a perticular project */}
          {isHovered?.item?.img?.map((page, index) => {
            return <PageUI page={page} index={index} key={index + "pages"} />;
          })}
        </div>
      ) : (
        <div>
          <Skills />
        </div>
      )}
    </div>
  );
};

export default Home;
