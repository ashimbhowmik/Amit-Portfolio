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
import styles from "../home/home.module.css";

export default function ClientHomeView({ data }) {
  return (
    <div className="lg:flex overflow-hidden " id="clientHome">
      <div className="lg:relative lg:w-[45%]">
        <div
          className="bg-[#FFB400] hidden lg:block 2xl:w-[600px] xl:w-[550px] min-h-screen absolute"
          style={{
            clipPath: "polygon(0 0, 38% 0, 87% 100%, 0% 100%)",
          }}
        ></div>
        <div className="lg:absolute hidden lg:block lg:ml-12 lg:top-[40px] lg:rounded-[40px]  lg:shadow-lg">
          <div className="2xl:h-[210px] 2xl:w-[90%] lg:w-[97%]  lg:h-[130px]  bg-black rounded-t-[40px] shadow-lg"></div>
          <Image
            src={img}
            alt=""
            objectFit="cover"
            className="rounded-b-[40px] 2xl:h-full 2xl:w-[90%] lg:w-[97%] xl:h-[480px] shadow-lg"
          />
        </div>
        <div className="lg:hidden">
          <div className={styles.bgImage}></div>
        </div>
      </div>
      {/* pc part */}
      <div className="lg:w-[55%] min-h-screen hidden lg:flex items-center ">
        <div className="w-full items-center flex relative">
          <div className="space-y-5 w-[75%]">
            <h1 className="text-[#FFB400] font-bold lg:text-5xl 2xl:text-5xl">
              <Typewriter
                words={["Hi There !", data.heading]}
                loop={20}
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
              <Cursor></Cursor>
            </h1>
            <p className="font-bold lg:text-5xl 2xl:text-5xl">Web Developer</p>
            <p className="2xl:text-xl text-justify">{data?.summary}</p>
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
            <button className="button pl-5 border !mt-8 hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 flex items-center">
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
          <div className="w-[25%]  hidden lg:flex justify-end -mt-96">
            <Navbar />
          </div>
        </div>
      </div>

      {/* ........................ Mobile Part ..................*/}

      <div className="lg:hidden absolute top-0">
        <div className=" min-h-screen ">
          <div className="w-full items-center flex ">
            <div className="px-8 flex flex-col  gap-2 items-center justify-center min-h-screen">
              <h1 className="text-[#FFB400] font-bold text-[27px] text-center">
                <Typewriter
                  words={["Hi There !", data.heading]}
                  loop={20}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                <Cursor></Cursor>
              </h1>
              <p className="font-bold text-xl text-center mt-2">
                Web Developer
              </p>
              {/* <p className="text-sm text-justify">{data?.summary}</p> */}
              <p className="text-slate-300 text-justify mt-3">
                {data.summary.split(" ").slice(0, 23).join(" ")}
                <span className="text-[#FFB400]">
                  {data.summary.split(" ").length > 23 && " "}
                </span>
              </p>
              <div className="flex items-center mt-5 gap-6">
                <button className=" px-4 py-3  shadow-2xl bg-[#0a1129] hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
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
                <button className=" px-4 py-3  shadow-2xl bg-[#0a1129] hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
                  <a href="https://github.com/ashimbhowmik" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="w-6 h-6 text-[#FFB400]"
                    />
                  </a>
                </button>
                <button className=" px-4 py-3  shadow-2xl bg-[#0a1129] hover:shadow-sm ease-in-out duration-300 hover:shadow-[#FFB400] rounded-lg transform hover:scale-95">
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
              <button className="button relative pl-5 text-sm  border mt-6 hover:bg-[#FFB400] text-slate-300 hover:text-black font-semibold ease-in-out duration-300 border-[#FFB400] rounded-full space-x-2 flex items-center ">
                <p className="">About Me</p>
                <p className="rounded-full p-3  bg-[#FFB400]">
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
          </div>
        </div>
      </div>
    </div>
  );
}
