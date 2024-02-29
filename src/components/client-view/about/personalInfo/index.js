"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function PersonalInfo({ personalDataInfo }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="mt-[100px]">
      <h1 className="text-3xl uppercase font-bold">Personal Infos</h1>
      <main className="flex gap-10">
        <section className="w-[60%]">
          <div className="mt-10 flex gap-44 items-center">
            <div className="space-y-5">
              <p className="text-slate-400 font-semibold">
                Name :{" "}
                <span className="text-white">{personalDataInfo?.name}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Age :{" "}
                <span className="text-white">
                  {personalDataInfo?.age} Years
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Nationality :{" "}
                <span className="text-white">
                  {personalDataInfo?.nationality}
                </span>
              </p>
              <p className="text-slate-400 font-semibold">
                Work :{" "}
                <span className="text-white">{personalDataInfo?.work}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Phone :{" "}
                <span className="text-white">{personalDataInfo?.phone}</span>
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-slate-400 font-semibold">
                Address :{" "}
                <span className="text-white">{personalDataInfo?.adress}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Email :{" "}
                <span className="text-white">{personalDataInfo?.email}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Github :{" "}
                <span className="text-white">{personalDataInfo?.github}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Linkedin :{" "}
                <span className="text-white">{personalDataInfo?.linkdn}</span>
              </p>
              <p className="text-slate-400 font-semibold">
                Language :{" "}
                <span className="text-white">{personalDataInfo?.language}</span>
              </p>
            </div>
          </div>
          <button className="button relative ease-in-out duration-200 pl-5 border border-[#FFB400] rounded-full !mt-10 space-x-2 flex items-center">
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
        </section>
        <section className="w-[40%] flex gap-5">
          <div className="w-[50%] flex flex-col gap-5">
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="text-5xl text-[#FFB400] font-bold">2+</p>
              <div className="flex gap-3">
                <div className="h-[2px] bg-white w-[30px] mt-3"></div>
                <p className="text-xl flex flex-col">
                  Years Of <span>Experience</span>
                </p>
              </div>
            </div>
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="text-5xl text-[#FFB400] font-bold">10+</p>
              <div className="flex gap-3">
                <div className="h-[2px] bg-white w-[30px] mt-3"></div>
                <p className="text-xl flex flex-col">
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
              <p className="text-5xl text-[#FFB400] font-bold">2+</p>
              <div className="flex gap-3">
                <div className="h-[2px] bg-white w-[30px] mt-3"></div>
                <p className="text-xl flex flex-col">
                  Years Of <span>Experience</span>
                </p>
              </div>
            </div>
            <div
              className="border-[1px] border-gray-700 p-7 space-y-2 rounded-xl hover:border-[#FFB400] "
              data-aos="zoom-in"
            >
              <p className="text-5xl text-[#FFB400] font-bold">5+</p>
              <div className="flex gap-3">
                <div className="h-[2px] bg-white w-[30px] mt-3"></div>
                <p className="text-xl flex flex-col">
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
