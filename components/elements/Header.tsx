import React from "react";
import SocmedIcon from "../socmedIcon";
import searchIc from "../../public/images/icons/search.svg";
import Image from "next/image";

export const Header = (): JSX.Element => {
  return (
    <nav>
      <div className="mt-5 flex flex-row justify-between max-w-5xl w-full mx-auto">
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
        <SocmedIcon padding="mr-2.5" />
      </div>
    </nav>
  );
};
