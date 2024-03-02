/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import ProjectCard from "./projectCard";
import { useRouter } from "next/navigation";

export default function ClientProjectView({ data }) {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const router = useRouter();

  const toggleShowAllProjects = () => {
    router.push("/project-view");
    setShowAllProjects((prev) => !prev);
  };

  return (
    <>
      <div className="container mx-auto min-h-screen">
        <h1 className="text-center text-6xl uppercase font-bold mb-[80px]">
          My <span className="text-[#FFB400] ">Project</span>
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-[40px]">
          {data?.slice(0, 4)?.map((item) => (
            <ProjectCard key={item.id} item={item}></ProjectCard>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center mt-[60px]">
          <button
            className="border-[#FDB300] border w-[200px] rounded-lg font-semibold px-8 py-4 cursor-pointer ease-in-out duration-300 hover:bg-black hover:text-white hover:px-9 hover:py-5 hover:shadow-[#FDB300]  hover:shadow-sm"
            onClick={toggleShowAllProjects}
          >
            See More
          </button>
        </div>
        <div className="w-full flex justify-center mt-[100px]">
          <div className="h-[2px] bg-slate-700 w-[40%]"></div>
        </div>
        <div id="clientContact"></div>
      </div>
    </>
  );
}
