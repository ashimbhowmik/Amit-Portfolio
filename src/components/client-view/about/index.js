"use client";
import { useContext, useRef, useState } from "react";
import PersonalInfo from "./personalInfo";
import CircularProgressBar from "./circularProgressBar";
import ServiceClient from "./clientService";

export default function ClientAboutView({ data, personalDataInfo }) {
  const [progress1, setProgress1] = useState(80);
  const [progress2, setProgress2] = useState(70);
  const [progress3, setProgress3] = useState(70);
  const [progress4, setProgress4] = useState(65);
  const [progress5, setProgress5] = useState(60);
  const [progress6, setProgress6] = useState(45);
  const [progress7, setProgress7] = useState(70);
  const [progress8, setProgress8] = useState(70);

  return (
    <div
      className="pt-[70px] min-h-screen container mx-auto overflow-hidden lg:w-[85%] 2xl:w-full "
      id="clientAbout"
    >
      <h1 className="text-center lg:text-6xl text-4xl uppercase font-bold">
        About <span className="text-[#FFB400] ">Me</span>
      </h1>
      <PersonalInfo personalDataInfo={personalDataInfo}></PersonalInfo>
      <div className="w-full flex justify-center lg:mt-[100px] mt-[60px]">
        <div className="h-[2px] bg-slate-700 lg:w-[40%] w-[60%]"></div>
      </div>
      <div>
        <h1 className="text-center text-3xl uppercase font-bold lg:mt-[80px] mt-[50px] lg:mb-[70px] mb-[50px]">
          My Skill
        </h1>
        <CircularProgressBar
          progress1={progress1}
          progress2={progress2}
          progress3={progress3}
          progress4={progress4}
          progress5={progress5}
          progress6={progress6}
          progress7={progress7}
          progress8={progress8}
        />
      </div>
      <div className="w-full flex justify-center lg:mt-[100px] mt-[70px]">
        <div className="h-[2px] bg-slate-700 lg:w-[40%] w-[60%]"></div>
      </div>
      <ServiceClient></ServiceClient>
      <div className="w-full flex justify-center lg:mt-[100px] mt-[70px]">
        <div className="h-[2px] bg-slate-700 lg:w-[40%] w-[60%]"></div>
      </div>
      <div id="clientViewExperiance"></div>
    </div>
  );
}
