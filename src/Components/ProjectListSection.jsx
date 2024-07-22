import { ProjectList } from "../Utils/ProjectList";
import { animationVariable } from "../Utils/animationVariable";
import { motion } from "framer-motion";

const ProjectsListSection = ({ setIsHovered, isHovered }) => {
  // Utility functions

  //  List Element UI
  const ProjectListUI = ({ project, index }) => {
    return (
      <div className="flex justify-between">
        <h3 className="text-md font-Philosopher">{project.name}</h3>
        <h3 className="w-fit text-sm text-gray-500 ">{project.date}</h3>
      </div>
      // <Link
      //   to={""}
      //   key={index + "Project"}
      //   onMouseEnter={() => {
      //     setIsHovered({
      //       visible: true,
      //       item: project,
      //       isClicked: isHovered.isClicked,
      //     });
      //   }}
      //   onMouseLeave={() => {
      //     console.log("end", project.name);
      //     setIsHovered({
      //       visible: false,
      //       item: {},
      //       isClicked: isHovered.isClicked,
      //     });
      //   }}
      //   onClick={() => {
      //     setIsHovered({ visible: true, item: project, isClicked: true });
      //     console.log("clicked");
      //   }}
      // >
      //   <div className="flex justify-between">
      //     <h3 className="text-md font-Philosopher">{project.name}</h3>
      //     <h3 className="w-fit text-sm text-gray-500 ">{project.date}</h3>
      //   </div>
      // </Link>
    );
  };

  return (
    <div className="tablet:w-4/5  laptop:w-3/5  z-50">
      <div>
        {ProjectList.map((project, index) => {
          return isHovered.item.name === project.name ? (
            <motion.button
              variants={animationVariable(index / 10, -100)}
              initial="hidden"
              whileInView="visible"
              className="p-2  mb-3 h-10 w-full  rounded-2xl scale-110 bg-blue-200 drop-shadow-2xl    transition duration-100 ease-in-out  "
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
              whileInView="visible"
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

export default ProjectsListSection;
