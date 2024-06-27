import { Tools } from "../Utils/ToolsList";

const Slider = () => {
  // const Mycard = ({logo, Title}) => {
  //   return (
  //     <div>
  //       <div
  //         className="MyCard desktop:w-[30vw] h-52  text-black m-3 rounded-2xl bg-[#142948] flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out z-5
  //        phone:w-[85vw] phone:h-32
  //        "
  //       >
  //         <h1 className="desktop:text-xl desktop:mb-5 m-2 font-Philosopher txt-golden   phone:text-lg ">
  //           {props.title}
  //         </h1>
  //         <p className="mx-5 font-Rajdhani txt-gray">{props.details}</p>
  //       </div>
  //     </div>
  //   );
  // };

  const MyCard = ({ logo, Title }) => {
    return (
      <div className="phone:flex phone:flex-col phone:w-28  phone:h-28 phone:justify-center phone:items-center tablet:h-32 rounded-xl  my-4 mr-5 border-b-2 border-r-2 border-white drop-shadow-xl">
        <div className="Logo mb-2 tablet:w-24 tablet:h-24 flex justify-center items-center bg-white rounded-lg      border">
          <img
            src={logo}
            alt={"Logo of " + Title}
            className="phone:w-[8vw] tablet:w-20 phone:h-fit "
          />
        </div>
        <div className="Title">
          <h2 className="phone:text-xs">{Title}</h2>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="slider relative overflow-hidden  no-scrollbar">
        <div className="card_container phone:w-full phone:flex phone:flex-wrap phone:justify-center phone:items-center ml-2  ">
          {Tools.map((element,index) => {
            return <MyCard logo={element.url} Title={element.title} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
