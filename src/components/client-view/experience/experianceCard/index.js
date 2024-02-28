"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ExperianceCard({ item }) {
  console.log(item);
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="" data-aos="zoom-in-up">
      <div className="flex justify-center border-b border-slate-600 bg-[#1d1d1d] ">
        <div className="bg-[#FFB400] w-[1%] py-5"></div>
        <div
          className="bg-[#FFB400] py-5 h-[15px] w-[30px] mt-7"
          style={{
            clipPath: "polygon(0% 0%, 60% 0, 88% 18%, 60% 37%, 0 38%)",
          }}
        ></div>
        <div className="w-[99%] pl-5 py-5 mb-2">
          <h1>{item.jobprofile}</h1>
          <div>
            <p>{item.duration}</p>
            <p>{item.company}</p>
          </div>
          <p>{item.position}</p>
          <p>{item.jobprofile}</p>
          <p>{item.location}</p>
        </div>
      </div>
    </section>
  );
}
