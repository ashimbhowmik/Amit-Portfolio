/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProjectCard from "../project/projectCard";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PageLoader from "@/components/PageLoader/PageLoader";

export default function AllProject({ data }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center ease-in-out duration-300">
          <PageLoader />
        </div>
      ) : (
        <div className="container mx-auto min-h-screen relative lg:py-[80px] py-[50px] w-[87%] lg:w-full">
          <div className="absolute lg:top-[60px] lg:right-[-50px] top-[15px] right-5 overflow-hidden">
            <button
              className="text-[#FFB400] fixed z-50  hover:text-red-600 ease-in-out duration-150 transform hover:scale-90"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="lg:w-10 lg:h-10 w-8 h-8"
              />
            </button>
          </div>
          <div className=" flex justify-center items-center lg:mb-[80px] mb-12">
            <div className="w-full lg:pl-7">
              <h1 className="text-center  lg:text-6xl text-4xl mt-5 lg:mt-0 uppercase font-bold">
                My <span className="text-[#FFB400] ">Project</span>
              </h1>
            </div>
          </div>
          <div className=" grid lg:grid-cols-2 gap-[40px]">
            {data?.map((item) => (
              <ProjectCard key={item.id} item={item}></ProjectCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
