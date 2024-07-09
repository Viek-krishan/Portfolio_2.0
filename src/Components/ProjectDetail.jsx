import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

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

  return Details ? (
    <div className=" ">
      <div className="hidden tablet:flex w-full  justify-end ">
        <button className="CloseBtn place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
      </div>
      <div className="ProjectName w-fit mb-5 mx-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl w-fit txt-golden font-Cormorant font-bold">
          {isHovered?.item?.name}
        </h1>
        <h3 className="text-sm txt-gray font-extralight">
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
            className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          <h3>{isHovered?.item?.img[currentIndex][1]}</h3>
          <button
            className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="z-50">
      <div className="ProjectName w-fit mb-5 mx-20 flex flex-col justify-center items-center">
        <h1 className="text-2xl w-fit txt-golden font-Cormorant">
          {isHovered?.item?.name}
        </h1>
        <h3 className="text-sm txt-gray font-extralight">
          {isHovered?.item?.bio}
        </h3>
      </div>
      <div className="ProjectImage w-fit flex flex-col items-center">
        <img
          src={isHovered?.item?.img[currentIndex][0]}
          alt={isHovered?.item?.name}
          className="w-[50vw] h-[50vh] rounded-3xl drop-shadow-2xl mb-5"
        />
        <div className=" w-full flex  items-center justify-between">
          <button
            className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
            onClick={prevSlide}
          >
            <ChevronLeft />
          </button>
          <h3>{isHovered?.item?.img[currentIndex][1]}</h3>
          <button
            className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
