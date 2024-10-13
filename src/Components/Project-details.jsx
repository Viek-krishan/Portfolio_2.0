import { AnimatePresence, motion , sync} from "framer-motion";
import { useNavigate } from "react-router-dom";
// import Slider from "./Slider";
import { animationVariable } from "../Utils/animationVariable";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectDetails = ({ isHovered, setIsHovered }) => {
  // State variables
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Utlity functions
  const NavigateToProjectPage = () => {
    navigate("/projects");
  };

  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? isHovered.item?.img?.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    if (isHovered?.item?.img?.length === 1) {
      return;
    }
    setCurrentIndex(() =>
      currentIndex === isHovered.item?.img?.length - 1 ? 0 : currentIndex + 1
    );
  };

  const onClose = () => {
    setIsHovered({ visible: false, item: {}, isClicked: false });
  };

  const animationWithExit = (delay, hiddenX) => ({
    enter: { x: hiddenX, opacity: 0 },
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay },
    },
    exit: { x: -100, opacity: 0, transition: { duration: 0.5, delay } },
  });

  return isHovered.visible === true || isHovered.isClicked === true ? (
    <AnimatePresence custom={sync}>
      <motion.div
        variants={animationWithExit(0, 100)}
        initial="enter"
        animate="center"
        exit="exit"
        className="z-50 "
        key={"ProjectDetails"}
      >
        <motion.div
          variants={animationVariable(0, -100, 50)}
          initial="hidden"
          whileInView="visible"
          className="Cut-btn  hidden tablet:flex w-full  justify-end "
        >
          <button className="CloseBtn place-self-end z-50" onClick={onClose}>
            <X size={30} />
          </button>
        </motion.div>
        <div className="ProjectName w-fit mb-5 mx-20 flex flex-col justify-center items-center">
          <h1 className="text-2xl w-fit txt-Blue font-Cormorant font-bold z-50">
            {isHovered?.item?.name}
          </h1>
          <h3 className="text-sm txt-gray font-extralight z-50">
            {isHovered?.item?.bio}
          </h3>
        </div>
        <div className="ProjectImage w-fit mb-20 flex flex-col items-center">
          <img
            src={`${isHovered?.item?.img[currentIndex][0]}`}
            alt={isHovered?.item?.name}
            className=" tablet:w-[60vw] rounded-3xl drop-shadow-2xl mb-5"
          />
          <div className=" w-full flex  items-center justify-between">
            <button
              className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out z-50"
              onClick={prevSlide}
            >
              <ChevronLeft />
            </button>
            <h3 className=" z-50">{isHovered?.item?.img[currentIndex][1]}</h3>
            <button
              className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out z-50"
              onClick={nextSlide}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  ) : (
    <div className="w-full h-full flex justify-center items-center no-scrollbar z-50">
      <div className="about w-full h-full z-0 no-scrollbar ">
        <div className="w-full flex flex-col justify-center items-center phone:mt-10 ml-5   ">
          <motion.h1 className="tablet:hidden phone:text-2xl text-center font-Cormorant  ">
            Hi There, I am{" "}
            <span className="txt-Blue font-Caveat font-[700]">
              Vivek Krishan.
            </span>
          </motion.h1>
        </div>
        <motion.div
          variants={animationVariable(0.5, 100)}
          initial="hidden"
          animate="visible"
          className="AboutMe flex flex-col justify-evenly items-center mb-16  phone:mt-5  "
        >
          <div className="tablet:m-10">
            <h1 className="hidden tablet:block desktop:text-3xl phone:text-2xl text-center font-Cormorant  ">
              Hi There, I am{" "}
              <span className="txt-Blue font-Caveat font-[700]">
                Vivek Krishan.
              </span>
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
        </motion.div>
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
            <motion.h1
              variants={animationVariable(0.3, 100)}
              initial="hidden"
              animate="visible"
              className="text-4xl w-fit font-Cormorant txt-Blue"
            >
              My Skills
            </motion.h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
