import AllProject from "@/components/client-view/allProject";
import { extractAllDatas } from "@/services";

export default async function ProjectView() {
  const projectSectionData = await extractAllDatas("projects");
  return (
    <main className="min-h-screen  bg-[#111111] text-white">
      <AllProject data={projectSectionData}></AllProject>
    </main>
  );
}
