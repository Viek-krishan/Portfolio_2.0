import { useState } from "react";

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: 20,
  shiftY: 0,
};

const HoverTesting = () => {
  const [isHovered, setIsHovered] = useState({ visible: false, item: "" });

  return (
    <div>
      <div
        onMouseMove={() => {
          setIsHovered({ visible: true, item: "testing" });
        }}
        onMouseOut={() => {
          setIsHovered({ visible: false, item: "" });
        }}
        className="trigger w-full h-[50vh] border"
      >
        <h1 className="">Testing the react-hover</h1>
      </div>
      {isHovered.visible === true && isHovered.item === "testing" ? (
        <div className="hover">
          <h3 className="text-white text-xl">React-Hover is working grt </h3>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default HoverTesting;
