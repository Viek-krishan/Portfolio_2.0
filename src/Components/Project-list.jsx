import { AllProjectList } from "../Utils/AllConstants";
import { animationVariable } from "../Utils/animationVariable";
import { motion } from "framer-motion";

const ProjectList = ({ setIsHovered, isHovered }) => {
  // Utility functions

  //  List Element UI
  const ProjectListUI = ({ project }) => {
    return (
      <div className="flex justify-between">
        <h3 className="text-md font-Philosopher">{project.name}</h3>
        <h3 className="w-fit text-sm text-gray-500 ">{project.date}</h3>
      </div>
    );
  };

  return (
    <div className="Project-List phone:flex phone:justify-center  tablet:w-4/5  laptop:w-3/5  z-50 ">
      <div className="phone:grid phone:grid-cols-1  phone:w-[70vw] ">
        {AllProjectList.map((project, index) => {
          return isHovered.item.name === project.name ? (
            <motion.button
              variants={animationVariable(index / 10, -100)}
              initial="hidden"
              animate="visible"
              className="p-2  mb-3 h-10 w-full  rounded-2xl scale-110 bg-blue-200 drop-shadow-2xl   transition duration-100 ease-in-out  "
              key={index}
              onMouseLeave={() => {
                if (isHovered.isClicked) {
                  setIsHovered({
                    visible: true,
                    item: project,
                    isClicked: isHovered.isClicked,
                  });
                  return;
                } else {
                  setIsHovered({
                    visible: false,
                    item: {},
                    isClicked: false,
                  });
                }
              }}
              onMouseEnter={() => {
                if (isHovered.isClicked) {
                  return;
                } else {
                  setIsHovered({
                    visible: true,
                    item: project,
                    isClicked: isHovered.isClicked,
                  });
                }
              }}
              onClick={() => {
                setIsHovered({ visible: true, item: project, isClicked: true });
                console.log("clicked");
                return;
              }}
            >
              <ProjectListUI index={index} project={project} />
            </motion.button>
          ) : (
            <motion.button
              variants={animationVariable(index / 10, -100)}
              initial="hidden"
              animate="visible"
              className="p-2 mb-3 h-10 tablet:w-full  rounded-2xl  laptop:hover:scale-110 laptop:hover:bg-blue-200 laptop:hover:drop-shadow-2xl    transition duration-100 ease-in-out   "
              key={index}
              onMouseEnter={() => {
                setIsHovered({
                  visible: true,
                  item: project,
                  isClicked: false,
                });
              }}
            >
              <ProjectListUI index={index} project={project} />
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectList;
