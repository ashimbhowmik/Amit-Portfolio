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
    // Use setTimeout to set loading to false after 3 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center bg-white ease-in-out duration-300">
          <PageLoader />
        </div>
      ) : (
        <div className="container mx-auto min-h-screen py-[80px]">
          <div className="border">
            <h1 className="text-center text-6xl uppercase font-bold mb-[80px]">
              My <span className="text-[#FFB400] ">Project</span>
            </h1>
            <button onClick={() => router.push("/")}>
              <FontAwesomeIcon icon={faTimes} className="w-10 h-10 " />
            </button>
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
