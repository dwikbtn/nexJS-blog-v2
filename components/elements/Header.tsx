import React from "react";
import SocmedIcon from "../parts/socmedIcon";
import searchIc from "../../public/images/icons/search.svg";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <nav className="container">
      <div className="mt-5 flex flex-row justify-between ">
        <div id="logo" className="font-bold text-xl">
          Late Me
        </div>
        <div id="search" className="flex ">
          <Image src={searchIc} alt="search Icon" />
          <input
            className="mx-2 border-none w-16"
            type="text"
            placeholder="Search...."
          ></input>
        </div>
        <div className="font-semibold text-base">
          <a href="/">Home</a>
        </div>
        <div id="categories" className="relative inline-block">
          <div className="font-semibold text-base">Category</div>
          <div
            id="categories-list"
            className="absolute bg-gray-50 drop-shadow px-4"
          >
            <div className="flex flex-col font-light ">
              <ul>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>life</li>
              </ul>
            </div>
          </div>
        </div>
        <SocmedIcon padding="mr-2.5" />
      </div>
    </nav>
  );
};
