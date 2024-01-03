import React from "react";
import Container from "./container";
import { IoLogoWhatsapp } from "react-icons/io";


const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            "YOU ARE NOT ALONE" 
            Reach out to me  .... anytime....happy to help..
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
       
           If your life isn't joyful as it should be, am right here.... Let's figure it out together. 
          </p>
        </div>
        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center sm:flex-row max-w-full min-w-max text-center">
          <a
            href="https://wa.me/918801543815"
            target="_blank"
            rel="noopener"
            className="px-8 py-4 text-lg font-medium text-white bg-green-400 rounded-md ">
              <IoLogoWhatsapp className="bg-green-400 float-left w-7 h-7 mr-1" /><span className="text-lg"> Whatsapp Me</span>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;
