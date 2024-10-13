import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="z-50 absolute w-full p-5 mt-5 flex flex-wrap justify-evenly ">
      <section className="Name">
        <h1 className="phone:text-2xl laptop:text-4xl txt-Blue font-bold font-Caveat  text-xl ">
          Vivek Krishan
        </h1>
      </section>
      <section className="hidden tablet:block">
        <h5 className="text-center text-sm">
          © 2023 CopyFolio. All rights reserved.
        </h5>
        <h5 className="phone:text-left  tablet:text-center text-sm">
          Powered by react
        </h5>
      </section>
      <section className="SocialMedia z-50">
        <div className="phone:gap-2 flex gap-4 ">
          <Link
            className="m-2 hover:scale-110 rounded transition duration-75 ease-in-out"
            to="https://www.linkedin.com/in/vivek-krishan-16705a241/"
          >
            <Linkedin />
          </Link>
          <Link
            className="m-2 hover:scale-110 rounded transition duration-75 ease-in-out"
            to="https://github.com/Viek-krishan"
          >
            <Github />
          </Link>
          <Link
            className="m-2 hover:scale-110 rounded transition duration-75 ease-in-out"
            to="https://www.instagram.com/vivek._.krishan/"
          >
            <Instagram />
          </Link>
          <Link
            className="m-2 hover:scale-110 rounded transition duration-75 ease-in-out"
            to="https://x.com/Vivek__Krishan?t=D-9xpTIAm7leeFCesMQaGw&s=09"
          >
            <Twitter />
          </Link>
        </div>
      </section>
      <section className="tablet:hidden w-full ">
        <h5 className="phone:text-center text-center text-[0.50rem] mt-2">
          ©2023 CopyFolio. All rights reserved.
          <br /> Powered by react
        </h5>
        <h5 className="text-center text-sm"></h5>
      </section>
    </div>
  );
};

export default Footer;
