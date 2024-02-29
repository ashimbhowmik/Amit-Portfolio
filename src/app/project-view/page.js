import ClientHomeView from "@/components/client-view/home";
import ClientProjectViewPage from "@/components/clientProjectView";
import ExtractAllData from "@/components/extractData";
import Image from "next/image";

export default function ProjectView() {
  return (
    <main className="min-h-screen  bg-[#111111] text-white">
      <ClientProjectViewPage></ClientProjectViewPage>
    </main>
  );
}
