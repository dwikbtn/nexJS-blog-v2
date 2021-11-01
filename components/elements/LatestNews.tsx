import React from "react";
import Image from "next/image";
export const LatestNews = (): JSX.Element => {
  return (
    <div
      id="latest-article"
      className="container grid gap-8 grid-cols-3 grid-rows-2"
    >
      <article className="col-start-1 col-end-4">
        <div className="w-full max-h-60 border shadow flex ">
          <div id="content" className="pt-10 pb-11 px-10">
            <h1 className="font-bold text-3xl">Title</h1>
            <p className="pt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              totam. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veniam, possimus.
            </p>
            <div className="flex justify-between pt-7 text-gray-600">
              <p>12/12/12</p>
              <a href="http://" className="font-semibold">
                Read More
              </a>
            </div>
          </div>
          <Image
            src="https://placeimg.com/640/480/tech"
            alt="image placeholder"
          />
        </div>
      </article>
      <article>2</article>
      <article>3</article>
      <article>4</article>
    </div>
  );
};
