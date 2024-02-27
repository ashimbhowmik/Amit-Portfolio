"use client";

import PersonalInfo from "./personalInfo";

export default function ClientAboutView({ data, personalDataInfo }) {
  return (
    <div className="pt-[70px] min-h-screen container mx-auto">
      <h1 className="text-center text-6xl uppercase font-bold">
        About <span className="text-[#FFB400]">Me</span>
      </h1>
      <PersonalInfo personalDataInfo={personalDataInfo}></PersonalInfo>
    </div>
  );
}
