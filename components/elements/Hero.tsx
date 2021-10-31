import React from "react";
import heroImg from "../../public/images/hero.png";
import Image from "next/image";

export const Hero = (): JSX.Element => {
  return (
    <div
      id="hero"
      className=" container mt-6 flex flex-wrap w-full py-16 px-6 items-center justify-between"
    >
      <div id="hero-text" className="h-full">
        <h1 className="text-6xl font-bold">Between Dream</h1>
        <p className="text-3xl font-normal text-gray-700 pt-7">
          Blog Post That I wrote before
          <br /> diving into dream world
        </p>
      </div>
      <div className="relative w-1/2 ">
        <Image src={heroImg} alt="hero image" />
      </div>
    </div>
  );
};
