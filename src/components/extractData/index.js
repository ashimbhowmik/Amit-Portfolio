// "use client";
import { extractAllDatas } from "@/services";
import ClientHomeView from "../client-view/home";
import ClientAboutView from "../client-view/about";
import ClientProjectView from "../client-view/project";
import ClientExperienceView from "../client-view/experience";
import ClientContactView from "../client-view/contact";

export default async function ExtractAllData() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div className="">
      <ClientHomeView data={homeSectionData}></ClientHomeView>
      <ClientAboutView
        data={
          aboutSectionData && aboutSectionData.length ? aboutSectionData[0] : []
        }
      ></ClientAboutView>
      <ClientProjectView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      ></ClientProjectView>
      <ClientExperienceView data={projectSectionData}></ClientExperienceView>
      <ClientContactView></ClientContactView>
    </div>
  );
}
