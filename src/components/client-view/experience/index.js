"use client";

import EducationCard from "./educationCard";
import ExperianceCard from "./experianceCard";

export default function ClientExperienceView({
  experienceData,
  educationData,
}) {
  return (
    <section className="container mx-auto mt-[80px] mb-[80px]">
      <h1 className="text-center text-6xl font-bold mb-[50px] ">
        Experience <span className="text-[#FFB400] ">& Education</span>
      </h1>
      <section className="flex gap-14 mt-24">
        <div className="flex-1 relative ">
          <h1 className="text-3xl font-bold mb-10">Experiance</h1>
          {experienceData?.map((item) => (
            <ExperianceCard key={item.id} item={item}></ExperianceCard>
          ))}
          <p className="bg-[#111111] h-[10px] absolute bottom-0 w-full "></p>
        </div>
        <div className=" flex-1 relative ">
          <h1 className="text-3xl font-bold mb-10">Education</h1>
          {educationData?.map((item) => (
            <EducationCard key={item.id} item={item}></EducationCard>
          ))}
          <p className="bg-[#111111] h-[22px] absolute bottom-0 w-full "></p>
        </div>
      </section>
      <div className="w-full flex justify-center mt-[100px]">
        <div className="h-[2px] bg-slate-700 w-[40%]"></div>
      </div>
      <div id="clientProjectView"></div>
    </section>
  );
}
