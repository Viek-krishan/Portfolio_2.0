
const Slider = () => {

  const Mycard = (props) => {
    return (
      <div>
        <div className="MyCard w-[30vw] h-52  text-black m-3 rounded-2xl bg-[#142948] flex flex-col justify-center items-center shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out z-5  ">
          <h1 className="text-xl mb-5 m-2 font-Philosopher txt-golden">
            {props.title}
          </h1>
          <p className="mx-5 font-Rajdhani txt-gray">{props.details}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="slider relative overflow-hidden p-5 no-scrollbar">
        <div className="card_container flex flex-wrap  ">
          <Mycard
            title="Full Stack web developer"
            details="A web developer with wide knowledge of Frontend Tech stack like HTML, CSS, REACT, REDUX and Tailwind as well as Backend Technologies like node.js, express.js and mongoDB"
          />
          <Mycard
            title="JavaScript"
            details="In depth knowledge of js and it's core functionlity. "
          />
          <Mycard
            title="Python"
            details="Intermediate level Python programmer. Worked on some web Scrapping and AI assistant projects."
          />
          <Mycard
            title="DSA"
            details="Good command on DSA with C++ and have won Coding Hackathon at my collage."
          />
          <Mycard
            title="Communication Skill"
            details="I have good communicational skill both in English as well as Hindi. I understand the importance of effective and clear cummunication."
          />
          <Mycard
            title="Time-management"
            details="I am very good at Time management along with punctual habit."
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
