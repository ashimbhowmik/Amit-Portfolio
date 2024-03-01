/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import img from "../../../assest/img copy.jpg";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Navbar from "../navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClientHomeView({ data }) {
  const { text } = useTypewriter({
    words: ["Developer", "Programmer"],
    loop: {},
  });
  return (
    <div className="flex" id="clientHome">
      <div className="relative w-[45%]">
        <div
          className="bg-[#FFB400] w-[600px] min-h-screen absolute"
          style={{
            clipPath: "polygon(0 0, 38% 0, 87% 100%, 0% 100%)",
          }}
        ></div>
        <div className="absolute  left-[50px] top-[40px] rounded-[40px]  shadow-lg">
          <div className="2xl:h-[170px] 2xl:w-[680px] bg-black rounded-t-[40px] shadow-lg"></div>
          <Image
            src={img}
            alt=""
            objectFit="cover"
            className="rounded-b-[40px] 2xl:h-[740px] 2xl:w-[680px] xl:h-[450px] shadow-lg"
          />
        </div>
      </div>
      <div className="w-[55%] min-h-screen flex items-center ">
        <div className="w-full items-center flex relative">
          <div className="space-y-5 w-[75%]">
            <h1 className="text-[#FFB400] font-bold text-6xl">
              <Typewriter
                words={["Hi There !", data.heading]}
                loop={20}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <Cursor></Cursor>
            </h1>
            <p className="font-bold text-6xl">Web Developer</p>
            <p className="text-xl text-justify">{data?.summary}</p>
            <div className="flex items-center">
              <button className="mr-5 px-4 py-3  shadow-2xl bg-black hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
                <a
                  href="https://www.facebook.com/ashim.bhowmik.amit.2000"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-6 h-6 text-[#FFB400]"
                  />
                </a>
              </button>
              <button className="mr-5 px-4 py-3  shadow-2xl bg-black hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
                <a href="https://github.com/ashimbhowmik" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-6 h-6 text-[#FFB400]"
                  />
                </a>
              </button>
              <button className="mr-5 px-4 py-3  shadow-2xl bg-black hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
                <a
                  href="https://www.linkedin.com/in/ashimbhowmik/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="w-6 h-6 text-[#FFB400]"
                  />
                </a>
              </button>
            </div>
            <button className="button relative pl-5 border !mt-8 hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 flex items-center">
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
          <div className="w-[25%] flex justify-end absolute top-[0px] right-[0px]">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
