import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bottom-0 flex flex-wrap justify-evenly desktop:my-10">
      <section className="Name">
        <h1 className="phone:text-2xl  text-xl ">Vivek Krishan</h1>
      </section>
      <section className="hidden tablet:block">
        <h5 className="text-center text-sm">
          © 2023 CopyFolio. All rights reserved.
        </h5>
        <h5 className="phone:text-left  tablet:text-center text-sm">
          Powered by react
        </h5>
      </section>
      <section className="SocialMedia">
        <div className="phone:gap-2 flex gap-4 ">
          <Link
            className="m-2 hover:scale-105 transition duration-75 ease-in-out"
            to="https://www.linkedin.com/in/vivek-krishan-16705a241/"
          >
            <Linkedin />
          </Link>
          <Link
            className="m-2 hover:scale-105 transition duration-75 ease-in-out"
            to="https://github.com/Viek-krishan"
          >
            <Github />
          </Link>
          <Link
            className="m-2 hover:scale-105 transition duration-75 ease-in-out"
            to="https://www.instagram.com/vivek__krishan?igsh=d21ldGwzM2ZnZDkw"
          >
            <Instagram />
          </Link>
          <Link
            className="m-2 hover:scale-105 transition duration-75 ease-in-out"
            to="https://x.com/Vivek__Krishan?t=D-9xpTIAm7leeFCesMQaGw&s=09"
          >
            <Twitter />
          </Link>
        </div>
      </section>
      <section className="tablet:hidden">
        <h5 className="phone:text-left text-center text-sm">
          ©2023 CopyFolio. All rights reserved.
        </h5>
        <h5 className="text-center text-sm"> Powered by react</h5>
      </section>
    </div>
  );
};

export default Footer;
