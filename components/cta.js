import React from "react";
import Container from "./container";

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
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
        <a
          href="https://wa.me/918801543815"
          target="_blank"
          rel="noopener"
          className="px-8 py-4 text-lg font-medium text-center text-white bg-green-400 rounded-md ">
          Ping me on Whatsapp
        </a>
        </div>
      </div>
    </Container>
  );
}

export default Cta;