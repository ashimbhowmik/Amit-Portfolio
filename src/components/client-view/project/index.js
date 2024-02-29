/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import img1 from "../../../assest/1.png";
import Image from "next/image";

export default function ClientProjectView() {
  const specificAreaRef = useRef(null);

  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-center text-6xl font-bold mb-[100px] ">
        My <span className="text-[#FFB400] ">Project</span>
      </h1>
      <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 w-[350px] rounded-lg">
        <div class="h-[450px] w-[350px]">
          <img
            class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt=""
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/80 group-hover:via-black/70 group-hover:to-black/80"></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 class="font-dmserif text-3xl font-bold text-white mb-4">
            Beauty
          </h1>
          <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolore adipisci placeat.
          </p>
          <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
            See More
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center mt-[100px]">
        <div className="h-[2px] bg-slate-700 w-[40%]"></div>
      </div>
      <section className="lg:grid grid-cols-2 gap-7">
        <div className="grid grid-cols-2 gap-1 shadow-xl rounded-lg py-5 px-9 bg-black">
          <div className="flex flex-col justify-evenly">
            <div className="w-[50%]">
              <h1 className="text-3xl font-bold">Photography Services</h1>
            </div>
            <div className="w-[50%]">
              <button className="flex px-3 py-2 bg-indigo-500 text-white rounded-lg font-fold text-sm items-center justify-center">
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <Image
              src={img1}
              alt=""
              objectFit="cover"
              className="rounded-lg shadow-md h-[180px] lg:h-[250px]"
            />
          </div>
        </div>
      </section>
      <div id="clientContact"></div>
    </div>
  );
}
