import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-evenly mt-20">
      <section>
        <h1 className="text-xl">VivekKrishan</h1>
      </section>
      <section>
        <h5 className="text-center text-sm">
          © 2023 CopyFolio. All rights reserved.
        </h5>
        <h5 className="text-center text-sm"> Powered by react</h5>
      </section>
      <section>
        <div className="flex gap-4">
          <Link className="m-2 hover:scale-105 transition duration-75 ease-in-out" to="">
            <Linkedin/>
          </Link>
          <Link className="m-2 hover:scale-105 transition duration-75 ease-in-out" to="">
            <Github/>
          </Link>
          <Link className="m-2 hover:scale-105 transition duration-75 ease-in-out" to="">
            <Instagram/>
          </Link>
          <Link className="m-2 hover:scale-105 transition duration-75 ease-in-out" to="">
            <Twitter/>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
