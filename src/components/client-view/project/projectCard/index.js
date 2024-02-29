/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

export default function ProjectCard({ item }) {
  //   console.log(item);
  return (
    <div className=" ">
      <main>
        <section className="flex border rounded-lg pt-10 pl-6">
          <div className="w-[60%] space-y-4">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">{item.name}</h1>
              <p className="">
                {item.samary.split(" ").slice(0, 15).join(" ")}
                {item.samary.split(" ").length > 15 && "..."}
              </p>
            </div>

            <div className="border flex gap-3 flex-wrap">
              {item?.technologies.split(",").map((skill) => (
                <div key={skill._id} className="">
                  <p className="px-3 p-2 text-white bg-black rounded-full">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[40%]">
            <img
              src={item.image}
              alt="Product image"
              className="rounded-lg h-full"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
