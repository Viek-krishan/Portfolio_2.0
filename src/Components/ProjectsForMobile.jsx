import { Link, useLocation } from "react-router-dom";
import { ProjectList } from "../Utils/ProjectList";
import { useState } from "react";
import ProjectPopUp from "./ProjectPopUp";

const Projects = () => {
  // local variables
  const [projectClicked, setProjectClicked] = useState({
    clicked: false,
    clickedItem: {},
  });

  // Utility functions
  const onClose = () => {
    setProjectClicked({
      clicked: false,
      clickedItem: {},
    });
  };

  const ProjectListUI = ({ project, index }) => {
    return projectClicked.clickedItem.name === project.name ? (
      <ProjectPopUp onClose={onClose} project={projectClicked.clickedItem} />
    ) : (
      <Link
        to={""}
        key={index + "Project"}
        onClick={() => {
          setProjectClicked({
            clicked: true,
            clickedItem: project,
          });
          // setIsHovered({ visible: true, item: project, isClicked: true });
        }}
      >
        <div className="flex justify-between p-2 m-4 mb-6  h-10   rounded-2xl">
          <h3 className="text-md font-Philosopher">{project.name}</h3>
          <h3 className="w-fit text-sm text-gray-500 ">{project.date}</h3>
        </div>
      </Link>
    );
  };

  return (
    <div className="mt-10 h-[80vh]">
      {ProjectList.map((project, index) => {
        return (
          <div className={`${project.name}   `} key={index}>
            <ProjectListUI index={index} project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
