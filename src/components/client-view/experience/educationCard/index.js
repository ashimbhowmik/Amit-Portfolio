export default function EducationCard({ item }) {
  //   console.log(item);
  return (
    <section className="">
      <div className="flex justify-center border-b border-slate-600 bg-[#1d1d1d] ">
        <div className="bg-[#FFB400] w-[1%] py-5"></div>
        <div
          className="bg-[#FFB400] py-5 h-[15px] w-[30px] mt-7"
          style={{
            clipPath: "polygon(0% 0%, 60% 0, 88% 18%, 60% 37%, 0 38%)",
          }}
        ></div>
        <div className="w-[99%] pl-5 py-5 mb-2">
          <h1>{item.degree}</h1>
          <div>
            <p>{item.college}</p>
            <p>{item.year}</p>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            quam, aperiam velit quidem ut adipisci. Nesciunt tenetur iste
            aliquid nihil error voluptate laborum esse id, deserunt, sequi
            repellat. Labore, quis praesentium? Ducimus
          </p>
        </div>
      </div>
    </section>
  );
}
