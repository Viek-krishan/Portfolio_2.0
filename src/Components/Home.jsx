import { useState } from "react";
import ProjectsListSection from "./ProjectListSection";
import ProjectLookUp from "./ProjectLookUpSection";

const Home = () => {
  const [isHovered, setIsHovered] = useState({
    visible: false,
    item: {},
    isClicked: false,
  });

  const [imgIndx, setImgIndex] = useState(0);

  // UI for multiple pages displaying under the discription
  const PageUI = ({ page, index }) => {
    return (
      <div className=" m-5 mb-54 w-full flex justify-center items-center ">
        {index === 0 || index % 2 === 0 ? (
          <div className=" m-5 mb-60 w-full flex justify-center items-center ">
            <div className="PageDetails px-5 tablet:w-2/3 ">
              <h1 className="text-2xl font-BodoniModa underline text-center mb-10">
                {page[1]}
              </h1>
              <h3 className="text-sm font-Exo font-extralight">{page[2]}</h3>
            </div>
            <div className="mr-10">
              <img
                src={page[0]}
                alt=""
                className="w-[65vw] h-[47vh] rounded-3xl drop-shadow-2xl"
              />
            </div>
          </div>
        ) : (
          <div className=" m-5 mb-60 w-full flex justify-center items-center ">
            <div className="">
              <img
                src={page[0]}
                alt=""
                className="w-[65vw] h-[47vh] rounded-3xl drop-shadow-2xl"
              />
            </div>
            <div className="PageDetails px-10 tablet:w-2/3">
              <h1 className="text-2xl font-BodoniModa underline text-center mb-10">
                {page[1]}
              </h1>
              <h3 className="text-sm font-Exo font-extralight">{page[2]}</h3>
            </div>
          </div>
        )}
      </div>
    );
  };


  return (
    <div>
      <div className="home w-full h-fit desktop:mt-10 desktop:mb-10 ">
        <h1 className="w-fit desktop:relative desktop:left-[40vw]  desktop:text-4xl  font-medium m-4 desktop:mb-0 pb-2 font-Cormorant txt-golden phone:text-3xl phone:mt-10 phone:text-center   ">
          Building the Web, Building Your Success.
        </h1>
      </div>
      <div className="Project_List_and_Lookup w-full h-fit tablet:flex justify-evenly items-start ">
        <section className="ProjectsList hidden tablet:w-1/4 tablet:flex flex-col items-center justify-center   ">
          <h1 className="text-center phone:text-2xl tablet:text-2xl mb-2 font-Cormorant txt-golden">
            My Projects
          </h1>
          <ProjectsListSection
            isHovered={isHovered}
            setIsHovered={setIsHovered}
          />
        </section>
        <section className="ProjectLookUp tablet:w-4/6 phone:w-screen">
          <ProjectLookUp isHovered={isHovered} setIsHovered={setIsHovered} />
        </section>
      </div>

      {/* Rendering all the pages and it's details of a perticular project */}
      {isHovered.visible === true || isHovered.isClicked === true ? (
        <div className="ProjectDetail">
          {/* TODO:Write the complete project Description for all projects */}
          <div className="Project_Description"></div>

          {/* Looping on all the pages on a perticular project */}
          {isHovered.item.img.map((page, index) => {
            return <PageUI page={page} index={index} key={index + "pages"} />;
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Home;
