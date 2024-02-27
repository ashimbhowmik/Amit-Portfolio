import ClientHomeView from "@/components/client-view/home";
import ExtractAllData from "@/components/extractData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  bg-[#111111] text-white">
      <ExtractAllData></ExtractAllData>
    </main>
  );
}
