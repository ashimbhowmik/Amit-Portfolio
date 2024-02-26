import HomePart from "@/components/portfolio/HomePart/HomePart";
import { homePartData } from "@/services";

export default async function ClientHomeView() {
  const homeSectionData = await homePartData();
  console.log(homeSectionData, "amit");
  return (
    <div>
      {homeSectionData?.map((item) => (
        <div key={item.id}>{item.heading}</div>
      ))}
    </div>
  );
}
