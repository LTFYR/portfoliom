import React from "react";
import Image from "next/image";
import { appointment, ecommerce, instagram, travel } from "../public/images";
const Works = () => {
  return (
    <section id="works" className="w-full h-full bg-black text-white py-28">
      <h1 className="text-3xl uppercase myworklsp text-center font-semibold">
        My Featured Works
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2 myworksh1000 mt-16 px-6">
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={appointment}
            alt="ecommerce"
          />
          <div
            style={{ height: "500px" }}
            className="absolute w-full left-0 top-0"
          >
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-yellow-500 px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Appointment
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={ecommerce}
            alt="ecommerce"
          />
          <div className="absolute w-full myworkh500 left-0 top-0">
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-yellow-500 px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Ecommerce
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={instagram}
            alt="ecommerce"
          />
          <div
            style={{ height: "500px" }}
            className="absolute w-full left-0 top-0"
          >
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-yellow-500 px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Social Media
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full h-full relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover scale-125 group-hover:scale-100 duration-500"
            src={travel}
            alt="ecommerce"
          />
          <div
            style={{ height: "500px" }}
            className="absolute w-full left-0 top-0"
          >
            <div className="w-full h-full relative bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
              <h1 className="text-2xl text-center font-bold bg-yellow-500 px-6 py-2 w-60 absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Traveling system
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
