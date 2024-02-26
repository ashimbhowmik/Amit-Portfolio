import ExtractAllData from "@/components/extractData";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  p-24 bg-black text-white">
      <h1>home</h1>
      <ExtractAllData></ExtractAllData>
    </main>
  );
}
