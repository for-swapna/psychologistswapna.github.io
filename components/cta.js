import React from "react";
import Container from "./container";
import { IoLogoWhatsapp } from "react-icons/io";


const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Reach out to me. I will be happy to help.
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Even if you do not know what is wrong with you but if you feel, your life isn't joyful as it should be, I can help you figure out what is wrong & then eventually we can solve it together. 
          </p>
        </div>
        <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 items-center sm:flex-row max-w-l text-center">
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