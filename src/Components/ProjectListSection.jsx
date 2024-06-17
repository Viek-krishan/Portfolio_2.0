import { Link } from "react-router-dom";
import { ProjectList } from "../Utils/ProjectList";

const ProjectsListSection = ({ setIsHovered, isHovered }) => {
  // Utility functions

  //  List Element UI
  const ProjectListUI = ({ project, index }) => {
    return (
      <Link
        to={""}
        key={index + "Project"}
        onMouseEnter={() => {
          setIsHovered({
            visible: true,
            item: project,
            isClicked: isHovered.isClicked,
          });
        }}
        onMouseLeave={() => {
          console.log("end", project.name);
          setIsHovered({
            visible: false,
            item: {},
            isClicked: isHovered.isClicked,
          });
        }}
        onClick={() => {
          setIsHovered({ visible: true, item: project, isClicked: true });
          console.log("clicked");
        }}
      >
        <div className="flex justify-between">
          <h3 className="text-md font-Philosopher">{project.name}</h3>
          <h3 className="w-fit text-sm text-gray-500 ">{project.date}</h3>
        </div>
      </Link>
    );
  };

  return (
    <div className="w-3/5 ">
      <div>
        {ProjectList.map((project, index) => {
          return isHovered.item.name === project.name ? (
            <div
              className=" p-2 m-2 mb-3 h-10  rounded-2xl scale-110 bg-[#162d50] drop-shadow-2xl    transition duration-100 ease-in-out "
              key={index}
              onMouseLeave={() => {
                console.log("end", project.name);
                setIsHovered({
                  visible: false,
                  item: {},
                  isClicked: isHovered.isClicked,
                });
              }}
            >
              <ProjectListUI index={index} project={project} />
            </div>
          ) : (
            <div
              className=" p-2 m-2 mb-3 h-10  rounded-2xl hover:scale-110 hover:bg-[#162d50] hover:drop-shadow-2xl    transition duration-100 ease-in-out "
              key={index}
              onMouseLeave={() => {
                console.log("end", project.name);
                setIsHovered({ visible: false, item: {} });
              }}
            >
              <ProjectListUI index={index} project={project} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsListSection;
