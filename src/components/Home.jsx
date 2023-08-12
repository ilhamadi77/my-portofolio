import React from "react";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600"> Hi, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Ilham A. Irawan{" "}
        </h1>
        <h2 className="text-4xl sm :text-7xl font-bold text-[#8892b0]">
          {" "}
          I'm a junior full-stack developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          temporibus magnam aut amet sunt! Sed est corporis optio maxime quae
          alias at illo reprehenderit, dolor vitae pariatur nulla aut
          necessitatibus?
        </p>

        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FiArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
