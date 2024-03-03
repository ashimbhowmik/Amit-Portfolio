/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import React from "react";

export default function ProjectCard({ item }) {
  //   console.log(item);
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div
      className=" "
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <main>
        <section className="flex border border-[#FFB400] hover:bg-slate-900 ease-in-out duration-300  hover:border-white hover:-translate-y-4  lg:pb-4 pb-5 rounded-lg pt-10 lg:pl-6 pl-3 lg:h-[320px] 2xl:h-[400px]  relative overflow-hidden cursor-pointer lg:pr-14">
          <div className="w-[55%] 2xl:w-[55%] lg:w-[55%]">
            <div className="lg:space-y-4 space-y-3">
              <h1 className="lg:text-2xl text-xl font-bold">{item.name}</h1>
              <p className="text-justify hidden 2xl:block text-slate-300">
                {item.samary.split(" ").slice(0, 25).join(" ")}
                <span className="text-[#FFB400]">
                  {item.samary.split(" ").length > 25 && " see more..."}
                </span>
              </p>
              <p className="text-justify lg:hidden text-sm text-slate-300">
                {item.samary.split(" ").slice(0, 10).join(" ")}
                <span className="text-[#FFB400]">
                  {item.samary.split(" ").length > 10 && " see more..."}
                </span>
              </p>
              <p className="text-justify hidden lg:block 2xl:hidden text-sm text-slate-300">
                {item.samary.split(" ").slice(0, 17).join(" ")}
                <span className="text-[#FFB400]">
                  {item.samary.split(" ").length > 17 && " see more..."}
                </span>
              </p>
            </div>

            <div className="lg:flex gap-2 lg:gap-2 hidden flex-wrap lg:mt-[20px] mt-[10px] text-sm">
              {item?.technologies.split(",").map((skill) => (
                <div key={skill._id} className="">
                  <p className="px-2 p-2 text-slate-300 bg-black rounded-full">
                    {skill}
                  </p>
                </div>
              ))}
            </div>

            <button className="button relative pl-5 text-sm  border mt-4 hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 flex items-center ">
              <Link href={item.website} className=" " target="blank">
                View Project
              </Link>
              <p className="rounded-full p-2  bg-[#FFB400]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-big-right"
                  width="20"
                  height="20"
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
          <div className="w-[45%] lg:w-[45%] 2xl:w-[45%] ">
            <img
              src={item.image}
              alt="Product image"
              className="rounded-lg absolute 2xl:w-[500px] lg:h-[400px] w-[500px] h-[350px] 2xl:right-[-180px] lg:right-[-250px] right-[-190px]"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
