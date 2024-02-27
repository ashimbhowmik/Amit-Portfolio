/* eslint-disable @next/next/no-async-client-component */
"use client";

import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import { extractAllDatas, getData } from "@/services";
import PersonalInfo from "../client-view/about/personalInfo";

import React, { useState } from "react";
import Navber from "../client-view/navbar";

export default async function ExtractAllData() {
  const [view, setView] = useState("home");
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const personalSectionData = await extractAllDatas("personal");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  return (
    <div className="relative">
      <div className="flex justify-end absolute top-[330px] right-0">
        <Navber view={view} setView={setView}></Navber>
      </div>
      <div>
        <ClientHomeView
          data={
            homeSectionData && homeSectionData.length ? homeSectionData[0] : []
          }
        ></ClientHomeView>
      </div>

      <div>
        <ClientAboutView
          data={
            aboutSectionData && aboutSectionData.length
              ? aboutSectionData[0]
              : []
          }
          personalDataInfo={
            personalSectionData && personalSectionData.length
              ? personalSectionData[0]
              : []
          }
        ></ClientAboutView>
      </div>
      {/* <ClientProjectView
        educationData={
          educationSectionData && educationSectionData
            ? educationSectionData[0]
            : []
        }
        experienceData={
          experienceSectionData && experienceSectionData
            ? experienceSectionData[0]
            : []
        }
      ></ClientProjectView> */}
      {/* <ClientExperienceView
        data={
          projectSectionData && projectSectionData ? projectSectionData[0] : []
        }
      ></ClientExperienceView> */}
      {/* <ClientContactView></ClientContactView> */}
    </div>
  );
}
