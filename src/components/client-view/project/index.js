/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import img1 from "../../../assest/1.png";
import Image from "next/image";
import ProjectCard from "./projectCard";

export default function ClientProjectView({ data }) {
  console.log(data);
  return (
    <div className="container mx-auto min-h-screen ">
      <h1>{data.length}</h1>
      <div className=" grid grid-cols-3 gap-6">
        {data?.map((item) => (
          <ProjectCard key={item.id} item={item}></ProjectCard>
        ))}
      </div>
      <div id="clientContact"></div>
    </div>
  );
}
