/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import img1 from "../../../assest/1.png";
import Image from "next/image";
import ProjectCard from "./projectCard";

export default function ClientProjectView({ data }) {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const toggleShowAllProjects = () => {
    setShowAllProjects((prev) => !prev);
  };

  return (
    <div className="container mx-auto min-h-screen ">
      <h1 className="text-center text-6xl uppercase font-bold mb-[80px]">
        My <span className="text-[#FFB400] ">Project</span>
      </h1>
      <div className=" grid grid-cols-3 gap-6">
        {showAllProjects
          ? data?.map((item) => (
              <ProjectCard key={item.id} item={item}></ProjectCard>
            ))
          : data
              .slice(0, 6)
              .map((item) => (
                <ProjectCard key={item.id} item={item}></ProjectCard>
              ))}
      </div>
      <div className="w-full flex justify-center mt-[100px]">
        <div className="h-[2px] bg-slate-700 w-[40%]"></div>
      </div>
      <div id="clientContact"></div>
      <button
        className="bg-[#FDB300] text-black rounded-lg font-semibold px-8 py-4 cursor-pointer ease-in-out duration-300 hover:bg-black hover:text-white hover:px-9 hover:py-5 hover:shadow-red-600  hover:shadow-md"
        onClick={toggleShowAllProjects}
      >
        {showAllProjects ? "Show Less" : "See More"}
      </button>
    </div>
  );
}
