"use client";
import Image from "next/image";
import img from "../../../assest/img copy.jpg";
import styles from "./home.module.css";
import { useState } from "react";
import Navbar from "../navbar";

export default function ClientHomeView({ data }) {
  return (
    <div className="flex">
      <div className="relative w-[45%]">
        <div
          className="bg-[#FFB400] w-[600px] min-h-screen absolute"
          style={{
            clipPath: "polygon(0 0, 38% 0, 87% 100%, 0% 100%)",
          }}
        ></div>
        <div className="absolute  left-[50px] top-[40px] ">
          <div className="2xl:h-[170px] 2xl:w-[680px] bg-black rounded-t-[40px]"></div>
          <Image
            src={img}
            alt=""
            objectFit="cover"
            className="rounded-b-[40px] 2xl:h-[740px] 2xl:w-[680px] xl:h-[450px] "
          />
        </div>
      </div>
      <div className="w-[55%] min-h-screen flex items-center">
        <div className="w-full items-center flex">
          <div className="space-y-4 w-[75%]">
            <h1 className="text-[#FFB400] font-bold text-6xl">
              {data?.heading}.
            </h1>
            <p className="font-bold text-6xl">Web Developer</p>
            <p className="text-xl text-justify">{data?.summary}</p>
            <button className="button relative ease-in-out duration-200 pl-5 border border-[#FFB400] rounded-full !mt-8 space-x-2 flex items-center">
              <p className="text-xl">More About Me</p>
              <p className="rounded-full p-3  bg-[#FFB400]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-big-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-black"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                </svg>
              </p>
            </button>
          </div>
          <div className="w-[25%] flex justify-end">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
