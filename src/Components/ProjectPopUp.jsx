import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

const ProjectPopUp = ({ onClose, project }) => {
  const modelRef = useRef();
  const [currentImgIndx, setCurrentImgIndx] = useState(0);

  // Utility functions
  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const prevSlide = () => {
    if (project.img?.length === 1) {
      return;
    }
    setCurrentImgIndx(() =>
      currentImgIndx === 0 ? project.img?.length - 1 : currentImgIndx - 1
    );
  };

  const nextSlide = () => {
    if (project.img?.length === 1) {
      return;
    }
    setCurrentImgIndx(() =>
      currentImgIndx === project.img?.length - 1 ? 0 : currentImgIndx + 1
    );
  };

  // UI for Page Details
  const PageUI = ({ page }) => {
    return (
      <div className=" mb-10 w-full flex justify-center items-center ">
        <div className=" w-full flex flex-col justify-center items-center ">
          <h1 className="PageName text-xl w-full font-BodoniModa underline text-center mb-2 ">
            {page[1]}
          </h1>
          <div className="PageImage w-5/6">
            <img
              src={page[0]}
              alt=""
              className="w-full rounded-3xl drop-shadow-2xl"
            />
          </div>
          <h3 className="PageDescription mt-2 text-sm font-Exo font-extralight p-4">
            {page[2]}
          </h3>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={modelRef}
      onClick={closeModel}
      className="absolute h-screen top-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm flex justify-center items-start  overflow-x-scroll"
    >
      {/* fixed  inset-3 bg-gray-400 bg-opacity-20 backdrop-blur-sm flex justify-center items-start  border border-red-500 */}
      <div className="mt-5 w-full flex flex-col justify-start gap-5 text-white  ">
        <button className="CloseBtn place-self-end" onClick={onClose}>
          <X size={30} />
        </button>
        <div className="Details_Section w-full h-fit overflow-hidden ">
          <div className="Project_Name_&_Bio ml-2">
            <h1 className="text-2xl font-Cormorant">{project.name}</h1>
            <h3 className="text-sm ml-2 text-wrap font-Philosopher">
              {project.bio}
            </h3>
          </div>
          <div className="ImgSlider w-full flex flex-col items-center justify-center">
            <img
              src={project.img[currentImgIndx][0]}
              alt={project.img[currentImgIndx][1]}
              className="w-5/6"
            />
            <div className=" w-5/6 flex  items-center justify-between">
              <button
                className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
                onClick={prevSlide}
              >
                <ChevronLeft />
              </button>
              <h3 className="font-Philosopher">
                {project.img[currentImgIndx][1]}
              </h3>
              <button
                className="border p-1 rounded-full hover:bg-gray-400 scale-105 transition duration-100 ease-in-out"
                onClick={nextSlide}
              >
                <ChevronRight />
              </button>
            </div>
          </div>
          <div className="ProjectDetail">
            {/* TODO:Write the complete project Description for all projects */}
            <div className="Project_Description mt-20 "></div>

            {/* Looping on all the pages on a perticular project */}
            {project.img.map((page, index) => {
              return <PageUI page={page} index={index} key={index + "pages"} />;
            })}
          </div>
        </div>
        <button className="CloseBtn place-self-center mb-10" onClick={onClose}>
          <X size={30} />
        </button>
      </div>
    </div>
  );
};

export default ProjectPopUp;
