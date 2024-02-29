/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import img from "../../../assest/img copy.jpg";
import styles from "./home.module.css";
import { useState } from "react";
import logo from "../../../assest/linkedin (1).png";
import Navbar from "../navbar";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Typewriter } from "react-simple-typewriter";

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
          <div className="space-y-4 w-[75%]">
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
            <div className="mt-10">
              <button className="mr-5 p-3 shadow-2xl bg-black rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  className="w-6 h-6 fill-current text-[#FFB400]"
                >
                  <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </button>
              <button className="mr-5 p-3 shadow-md rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="currentColor"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"></path>
                </svg>
              </button>
              <button className="mr-5 p-3 shadow-md rounded-lg">
                <Image
                  src={logo}
                  alt=""
                  objectFit="cover"
                  className="w-6 h-6"
                />
              </button>
            </div>
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
          <div className="w-[25%] flex justify-end absolute top-[0px] right-[0px]">
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
}
