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
        <div className="container mx-auto min-h-screen relative py-[80px] ">
          <div className="absolute top-[60px] right-[-50px]">
            <button
              className="text-[#FFB400] fixed z-50  hover:text-red-600 ease-in-out duration-150 transform hover:scale-90"
              onClick={() => router.push("/")}
            >
              <FontAwesomeIcon icon={faTimes} className="w-10 h-10 " />
            </button>
          </div>
          <div className=" flex justify-center items-center mb-[80px]">
            <div className="w-full pl-7">
              <h1 className="text-center  text-6xl uppercase font-bold">
                My <span className="text-[#FFB400] ">Project</span>
              </h1>
            </div>
          </div>
          <div className=" grid grid-cols-2 gap-[40px]">
            {data?.map((item) => (
              <ProjectCard key={item.id} item={item}></ProjectCard>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
