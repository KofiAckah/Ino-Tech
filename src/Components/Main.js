import React from "react";
import Arrow from "./../Images/Arrow 1.svg";

export default function Main() {
  return (
    <div className="flex flex-col mt-20">
      <div className="flex">
        {/* Text or Topic */}
        <div className="mx-auto">
          <h1 className="text-white uppercase text-9xl font-bold">
            Exploiting
          </h1>
          <div className="flex items-center gap-7">
            <h1 className="text-white uppercase text-9xl font-bold">
              The Power{" "}
            </h1>
            <p className="text-white uppercase border-white border rounded-full p-8">
              of
            </p>
          </div>
          <h1 className="text-primary uppercase text-9xl font-bold">
            Creativity
          </h1>
        </div>
      </div>
      <footer className="flex flex-col">
        <div className="flex mx-auto mt-5 gap-28">
          <div className="flex items-start relative">
            {/* Circle */}
            <div className="bg-gray-400 rounded-full h-3 w-3 relative top-2"></div>
            {/* Line */}
            <div className="border-b border-gray-400 w-20 mx-1 relative top-3"></div>
            <p className="text-gray-400 font-light w-28">
              We help brands that do good look good
            </p>
          </div>
          <div className="flex items-start relative">
            {/* Circle */}
            <div className="bg-gray-400 rounded-full h-3 w-3 relative top-2"></div>
            {/* Line */}
            <div className="border-b border-gray-400 w-20 mx-1 relative top-3"></div>
            <p className="text-gray-400 font-light w-36">
              We elevate creativity making brilliance visibly captivating
            </p>
          </div>
        </div>
        <div className="bg-gray-700 mt-2 mx-auto py-2 px-5 rounded-full">
          <div className="inline">
            <img src={Arrow} alt="Arrow" className="inline" />
          </div>
          <p className="inline text-gray-300">More</p>
        </div>
      </footer>
    </div>
  );
}
