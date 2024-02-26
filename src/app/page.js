import ClientAboutView from "@/components/client-view/about";
import ClientContactView from "@/components/client-view/contact";
import ClientExperienceView from "@/components/client-view/experience";
import ClientHomeView from "@/components/client-view/home";
import ClientProjectView from "@/components/client-view/project";
import Image from "next/image";

async function extractAllDatas(currentSection) {
  const res = await fetch(`http://localhost:3000/api/${currentSection}/get`, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();

  return data && data.data;
}

export default async function Home() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");
  return (
    <main className="flex min-h-screen flex-col  p-24 bg-black text-white">
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
    </main>
  );
}
