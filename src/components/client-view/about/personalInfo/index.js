"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PersonalInfo({ personalDataInfo }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="lg:mt-[100px] overflow-hidden w-[87%] lg:w-full mx-auto">
      <h1 className="lg:text-3xl text-2xl hidden lg:block uppercase font-bold text-center lg:text-left">
        Personal Infos
      </h1>
      <main className="lg:flex gap-10 mt-[50px] lg:mt-0">
        <section className="lg:w-[60%] ">
          <div className="mt-10 flex items-center text-[12px] lg:text-[18px]">
            <div className="space-y-5  w-[50%] lg:w-full ">
              <p className="text-slate-400 font-semibold">
                Name :{" "}
                <span className="block lg:inline text-white">
                  {personalDataInfo?.name}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Age :{" "}
                <span className="block lg:inline text-white">
                  {personalDataInfo?.age} Years
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Nationality :{" "}
                <span className="block lg:inline text-white">
                  {personalDataInfo?.nationality}
                </span>
              </p>
              <p className="text-slate-400 font-semibold ">
                Work :{" "}
                <span className=" text-white block lg:inline">
                  {personalDataInfo?.work}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Phone :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.phone}
                </span>
              </p>
            </div>
            <div className="space-y-5 lg:mt-0   w-[50%] lg:w-full">
              <p className="text-slate-400 font-semibold">
                Address :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.adress}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Email :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.email}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Github :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.github}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Linkedin :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.linkdn}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Language :{" "}
                <span className="text-white block lg:inline">
                  {personalDataInfo?.language}
                </span>
              </p>
            </div>
          </div>
          <button className="button hidden text-sm relative pl-5 border hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 lg:flex items-center !mt-10">
            <a
              href="https://drive.google.com/file/d/1qEXX5dgEHUCw5Rd0D-VShmxgFeQjXRoJ/view?usp=sharing"
              className="text-xl"
              target="_blank"
            >
              Download Cv
            </a>
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
          <div className="lg:hidden flex justify-center mt-6 mb-12">
            <button className="button relative  pl-5 text-sm  border mt-6 hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 flex items-center ">
              <a className="">Download CV</a>
              <p className="rounded-full p-3  bg-[#FFB400]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-arrow-big-right"
                  width="18"
                  height="18"
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
        </section>

        <section className="lg:w-[40%] flex gap-5">
          <div className="w-[50%] flex flex-col gap-5">
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="lg:text-5xl text-3xl text-[#FFB400] font-bold">
                2+
              </p>
              <div className="flex gap-3">
                <div className="h-[2px] hidden lg:block bg-white w-[30px] mt-3"></div>
                <p className="lg:text-xl flex flex-col">
                  Years Of <span>Experience</span>
                </p>
              </div>
            </div>
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="lg:text-5xl text-3xl text-[#FFB400] font-bold">
                10+
              </p>
              <div className="flex gap-3">
                <div className="h-[2px] hidden lg:block bg-white w-[30px] mt-3"></div>
                <p className="lg:text-xl flex flex-col">
                  Completed <span>Projects</span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-5">
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="lg:text-5xl text-3xl text-[#FFB400] font-bold">
                2+
              </p>
              <div className="flex gap-3">
                <div className="h-[2px] hidden lg:block bg-white w-[30px] mt-3"></div>
                <p className="lg:text-xl flex flex-col">
                  Years Of <span>Experience</span>
                </p>
              </div>
            </div>
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="lg:text-5xl text-3xl text-[#FFB400] font-bold">
                5+
              </p>
              <div className="flex gap-3">
                <div className="h-[2px] hidden lg:block bg-white w-[30px] mt-3"></div>
                <p className="lg:text-xl flex flex-col">
                  Certificate <span>Achive</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
