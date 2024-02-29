import ClientProjectView from "@/components/client-view/project";
import { extractAllDatas, getData } from "@/services";

import React from "react";

export default async function ClientProjectViewPage() {
  const projectSectionData = await extractAllDatas("projects");
  return (
    <div className="pb-10">
      <ClientProjectView data={projectSectionData}></ClientProjectView>
    </div>
  );
}
