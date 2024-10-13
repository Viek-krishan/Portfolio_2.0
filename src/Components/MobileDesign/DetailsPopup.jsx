import { useState } from "react";
import { AnimatePresence, motion, sync } from "framer-motion";
import { animationVariable } from "../../Utils/animationVariable";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function DetailsPopUp({ setIsHovered, item }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // functions
  const prevSlide = () => {
    setCurrentIndex(() =>
      currentIndex === 0 ? item?.img?.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    if (item?.img?.length === 1) {
      return;
    }
    setCurrentIndex(() =>
      currentIndex === item?.img?.length - 1 ? 0 : currentIndex + 1
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
    <div className="flex justify-center items-center min-h-full  min-w-full bg-gradient-to-r from-white to-blue-300 overflow-hidden  p-8">
      <div className="relative w-[95vw] min-h-[80vh] max-h-fit  ">
        <div className="absolute inset-0 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl"></div>
        <div className="relative p-2">
          <AnimatePresence custom={sync}>
            <motion.div
              variants={animationWithExit(0, 100)}
              initial="enter"
              animate="center"
              exit="exit"
              className="Name-bio-and-image "
              key={"ProjectDetails"}
            >
              <motion.div
                variants={animationVariable(0, -100, 50)}
                initial="hidden"
                whileInView="visible"
                className="Cut-btn  flex w-full  justify-end "
              >
                <button
                  className="CloseBtn place-self-end z-50"
                  onClick={onClose}
                >
                  <X size={30} />
                </button>
              </motion.div>
              <div className="ProjectName w-full mb-5 mt-5 flex flex-col justify-center items-center">
                <h1 className="text-2xl w-fit txt-golden font-Cormorant font-bold z-50">
                  {item?.name}
                </h1>
                <h3 className="text-sm txt-gray w-full font-extralight ">
                  {item?.bio}
                </h3>
              </div>
              <div className="ProjectImage w-full mb-20 flex flex-col items-center">
                <img
                  src={`${item?.img[currentIndex][0]}`}
                  alt={item?.name}
                  className=" rounded-3xl drop-shadow-2xl mb-5"
                />
                <div className=" w-full flex  items-center justify-between">
                  <button
                    className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out z-50"
                    onClick={prevSlide}
                  >
                    <ChevronLeft />
                  </button>
                  <h3 className=" z-50">{item?.img[currentIndex][1]}</h3>
                  <button
                    className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out z-50"
                    onClick={nextSlide}
                  >
                    <ChevronRight />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div>{item?.img[currentIndex][2]}</motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
