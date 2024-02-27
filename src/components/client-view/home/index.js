"use client";
import Image from "next/image";
import img from "../../../assest/1688711153913 copy.jpg";
import styles from "./home.module.css";
import { useState } from "react";
import Navbar from "../navbar";

export default function ClientHomeView({ data }) {
  const [showName, setShowName] = useState(false);
  console.log(data, "amit");
  return (
    <div className="flex">
      <div className="relative w-[45%]">
        <div
          className="bg-[#FFB400] w-[600px] min-h-screen absolute"
          style={{
            clipPath: "polygon(0 0, 38% 0, 87% 100%, 0% 100%)",
          }}
        ></div>
        <div className="absolute min-h-screen left-[50px] top-[40px] ">
          <div className="2xl:h-[130px] 2xl:w-[660px] bg-black rounded-t-[40px]"></div>
          <Image
            src={img}
            alt=""
            objectFit="cover"
            className="rounded-b-[40px] 2xl:h-[780px] 2xl:w-[660px] xl:h-[450px] "
          />
        </div>
        <div>
          <h1 className="text-[100px] ">jhd</h1>
        </div>
      </div>
      <div className="w-[55%] border min-h-screen flex items-center">
        <div className="w-full border flex">
          <div className="space-y-3 w-[75%]">
            <h1 className="text-[#FFB400] font-bold text-5xl">
              {data?.heading}.
            </h1>
            <p className="font-bold text-5xl">Web Developer</p>
            <p className="text-xl">{data?.summary}</p>
            <button
              className="button relative ease-in-out duration-200"
              onMouseEnter={() => setShowName(true)}
              onMouseLeave={() => setShowName(false)}
            >
              <i>kkkd</i>
              {showName && (
                <span className="button-name ease-in-out duration-200">
                  Contact Me
                </span>
              )}
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
