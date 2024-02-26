import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import { extractAllDatas, getData } from "@/services";

import React from "react";

export default async function Main() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  return (
    <div>
      <ClientHomeView
        data={
          homeSectionData && homeSectionData.length ? homeSectionData[0] : []
        }
      ></ClientHomeView>
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      ></ClientAboutView>
      <ClientProjectView
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
      ></ClientProjectView>
      <ClientExperienceView
        data={
          projectSectionData && projectSectionData ? projectSectionData[0] : []
        }
      ></ClientExperienceView>
      <ClientContactView></ClientContactView>
    </div>
  );
}
