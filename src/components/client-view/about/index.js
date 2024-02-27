"use client";

import PersonalInfo from "./personalInfo";

export default function ClientAboutView() {
  return (
    <div className="pt-[70px] min-h-screen">
      <h1 className="text-center text-6xl uppercase font-bold">
        About <span className="text-[#FFB400]">Me</span>
      </h1>
      <PersonalInfo></PersonalInfo>
      <h1>Client About</h1>
    </div>
  );
}
