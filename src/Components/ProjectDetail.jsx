import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, sync } from "framer-motion";
import { animationVariable } from "../Utils/animationVariable";

const ProjectDetail = ({ isHovered, Details, setIsHovered }) => {
  // Variables
  const [currentIndex, setCurrentIndex] = useState(0);

  // Functions
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

  return (
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
          <h1 className="text-2xl w-fit txt-golden font-Cormorant font-bold z-50">
            {isHovered?.item?.name}
          </h1>
          <h3 className="text-sm txt-gray font-extralight z-50">
            {isHovered?.item?.bio}
          </h3>
        </div>
        <div className="ProjectImage w-fit mb-20 flex flex-col items-center">
          <img
            src={isHovered?.item?.img[currentIndex][0]}
            alt={isHovered?.item?.name}
            className="w-[50vw] h-[50vh] rounded-3xl drop-shadow-2xl mb-5"
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
  );
};

export default ProjectDetail;
