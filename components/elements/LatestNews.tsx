import React from "react";
import Image from "next/image";
export const LatestNews = (): JSX.Element => {
  return (
    <div
      id="latest-article"
      className="container grid gap-8 grid-cols-3 grid-rows-2 mt-10 "
    >
      <article className="col-start-1 col-end-4 max-h-6">
        <div className="w-full min-h-60 border shadow flex ">
          <div id="content" className="pt-10 pb-11 px-10 w-3/4">
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
          <div className="relative w-1/2">
            <Image
              src="https://placeimg.com/640/480/tech "
              alt="image placeholder"
              layout="fill"
            />
          </div>
        </div>
      </article>
      <article>
        <div
          id="content"
          className="w-full border shadow flex flex-row flex-wrap justify-center items-center text-center"
        >
          <div id="image-wrapper" className="relative w-full">
            <Image
              src="https://placeimg.com/640/480/tech "
              alt="image placeholder"
              width="300"
              height="165"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full p-4">
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
        </div>
      </article>
      <article>
        <div
          id="content"
          className="w-full border shadow flex flex-row flex-wrap justify-center items-center text-center"
        >
          <div id="image-wrapper" className="relative w-full">
            <Image
              src="https://placeimg.com/640/480/tech "
              alt="image placeholder"
              width="300"
              height="165"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full p-4">
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
        </div>
      </article>
      <article>
        <div
          id="content"
          className="w-full border shadow flex flex-row flex-wrap justify-center items-center text-center"
        >
          <div id="image-wrapper" className="relative w-full">
            <Image
              src="https://placeimg.com/640/480/tech "
              alt="image placeholder"
              width="300"
              height="165"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full p-4">
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
        </div>
      </article>
    </div>
  );
};
