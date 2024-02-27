"use client";

export default function PersonalInfo({ personalDataInfo }) {
  console.log(personalDataInfo);
  return (
    <div>
      <h1 className="text-3xl uppercase font-bold">Personal Infos</h1>
      <main>
        <section>
          <div className="mt-10 flex gap-5">
            <div className="">
              <p>{personalDataInfo?.name}</p>
              <p>{personalDataInfo?.age}</p>
              <p>{personalDataInfo?.nationality}</p>
              <p>{personalDataInfo?.work}</p>
              <p>{personalDataInfo?.phone}</p>
            </div>
            <div>
              <p>{personalDataInfo?.adress}</p>
              <p>{personalDataInfo?.email}</p>
              <p>{personalDataInfo?.github}</p>
              <p>{personalDataInfo?.linkdn}</p>
              <p>{personalDataInfo?.language}</p>
            </div>
          </div>
          <button className="button relative ease-in-out duration-200 pl-5 border border-[#FFB400] rounded-full !mt-8 space-x-2 flex items-center">
            <p className="text-xl">Download Cv</p>
            <p className="rounded-full p-3  bg-[#FFB400]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-arrow-big-right"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="text-black"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
              </svg>
            </p>
          </button>
        </section>
        <section></section>
      </main>
    </div>
  );
}
