import React from "react";
import Input from "../UI/Input";
import Label from "../UI/Label";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const contactUs = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-20 tablet:h-[85vh]">
      <h1 className="text-4xl font-BodoniModa text-center">Contact Us</h1>

      <Link to={"/"} className="absolute z-50 top-20 right-20 ">
        <X />
      </Link>
      <div className="tablet:grid tablet:grid-cols-2 phone:grid-cols-1">
        <div className="Personal-Info phone:border-b-2  mb-4 tablet:border-none tablet:ml-10">
          <h2 className="text-3xl font-Cormorant text-center">Personal Info</h2>
          <div className="Address mb-4">
            <Label htmlFor="address">Address:</Label>
            <p className="text-sm text-gray-700 font-Philosopher">
              Ranchi, Jharkhand, India, 835222
            </p>
          </div>
          <div className="Email mb-4 flex flex-col">
            <Label htmlFor="email">Email:</Label>
            <a
              className="text-sm font-Philosopher w-fit "
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRHpCLZhmdQxMMtWvXdZWJrKvvZmFkvRmBGNWfNRTkVCcdRPdMhPWrKQCDvSLRhrXKRNQ"
            >
              vivekkrishan999@gmail.com
            </a>
            <a
              className="text-sm font-Philosopher w-fit "
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDZqnZxrjCccvNNZHgxgrzkvdTMXfxFNvdGKpqPGrwCLWZbpvFxWTxHVJqWNrlcFGvRQkML"
            >
              vivekkrishan440@gmail.com
            </a>
          </div>
          <div className="Phone">
            <Label htmlFor="phone">Phone:</Label>
            <p className="text-sm text-gray-700 font-Philosopher">
              +91 6202089501
            </p>
          </div>
        </div>
        <form action="" className=" grid laptop:grid-cols-2 phone:grid-cols-1">
          <div className="Name">
            <Label htmlFor="name">Name:</Label>
            <Input
              id={"name"}
              type="text"
              placeholder="Please enter your name "
              name="name"
            />
          </div>
          <div className="Email">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="joe@example.com"
            />
          </div>
          <div className="Phone">
            <Label htmlFor="phone">Phone:</Label>
            <Input
              type="phone"
              id="phone"
              name="phone"
              placeholder="9955****"
            />
          </div>
          <div className="Subject">
            <Label htmlFor="subject">Subject:</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="mention your subject"
            />
          </div>

          <div className="Message">
            <Label htmlFor="message">Message:</Label>
            <textarea
              className=" border-l-2 border-b-2 backdrop-blur-xl border-gray-900/30 txt-light-brown text-sm rounded-lg block phone:w-5/6 laptop:w-full p-2.5 dark:placeholder-gray-900 dark:text-black drop-shadow-xl focus:outline-none  "
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <div></div>
          <Link
            to={"/contact"}
            className="border w-fit mt-20 px-3 py-1 bg-blue-600 text-white rounded-lg drop-shadow-xl hover:scale-105 transition duration-150 ease-in-out"
          >
            Let's Talk
          </Link>
        </form>
      </div>
    </div>
  );
};

export default contactUs;
