"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function EducationCard({ item }) {
  //   console.log(item);
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className=" " data-aos="zoom-in-up">
      <div className="flex justify-center border-b lg:h-[250px] border-slate-600 bg-[#1d1d1d] border">
        <div className="bg-[#FFB400] w-[1%] py-5"></div>
        <div
          className="bg-[#FFB400] py-5 h-[15px] w-[30px] mt-7"
          style={{
            clipPath: "polygon(0% 0%, 60% 0, 88% 18%, 60% 37%, 0 38%)",
          }}
        ></div>
        <div className="w-[99%] pl-5 py-5 mb-2  space-y-3">
          <h1 className="lg:text-2xl text-xl font-bold">{item.degree}</h1>
          <div className="hidden  lg:flex items-center text-slate-300 text-sm">
            <p className="">{item.college}</p>
            <span className="px-2">/</span>
            <p className="">{item.year}</p>
          </div>

          <div className="lg:hidden space-y-3 items-center text-slate-300 text-sm">
            <p className="">{item.college}</p>

            <p className="">{item.year}</p>
          </div>
          <p className="text-justify pr-10 text-slate-300 text-sm">
            {item.samary2}
          </p>
        </div>
      </div>
    </section>
  );
}
