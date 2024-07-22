import { motion } from "framer-motion";
import { Tools } from "../Utils/ToolsList";


const Slider = () => {
  
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };


  const MyCard = ({ logo, Title }) => {
    return (
      <motion.div
        variants={item}
        className="phone:flex phone:flex-col phone:w-28  phone:h-28 phone:justify-center phone:items-center tablet:h-32 rounded-xl  my-4 mr-5 border-b-2 border-r-2 border-white drop-shadow-xl"
      >
        <div className="Logo mb-2 tablet:w-24 tablet:h-24 flex justify-center items-center bg-white rounded-lg      border">
          <motion.img
            whileHover={{
              scale: 1.2,
              rotate: 360,
            }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            src={logo}
            alt={"Logo of " + Title}
            className="phone:w-[8vw] tablet:w-20 phone:h-fit "
          />
        </div>
        <div className="Title">
          <h2 className="phone:text-xs">{Title}</h2>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div className="slider relative overflow-hidden  no-scrollbar">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="card_container phone:w-full phone:flex phone:flex-wrap phone:justify-center phone:items-center ml-2  "
        >
          {Tools.map((element, index) => {
            return (
              <MyCard logo={element.url} Title={element.title} key={index} />
            );
          })}
        </motion.div>
      </div>
    </>
  );
};

export default Slider;
