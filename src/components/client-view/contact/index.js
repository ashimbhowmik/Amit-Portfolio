"use client";

export default function ClientContactView() {
  return (
    <div className="container min-h-screen mx-auto mt-[80px]">
      <h1 className="text-center text-6xl font-bold mb-[100px] ">
        Get in <span className="text-[#FFB400] ">Touch</span>
      </h1>
      <main className="flex gap-16">
        <section className="w-[55%] space-y-7">
          <h1 className="text-3xl font-semibold">Message Me</h1>
          <div className="flex">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Name"
                className="py-3 px-4 rounded-md bg-[#262626] text-slate-300  w-[95%]"
                required
              ></input>
            </div>
            <div className="flex-1 justify-end flex">
              <input
                type="email"
                placeholder="Email"
                className="py-3 px-4 rounded-md bg-[#262626] text-slate-300 w-[95%]"
                required
              ></input>
            </div>
          </div>
          <div className="flex-1">
            <input
              type="text"
              placeholder="Subject"
              className="py-3 px-4 rounded-md bg-[#262626] text-slate-300  w-full"
              required
            ></input>
          </div>
          <div className="flex-1">
            <textarea
              type="text"
              placeholder="Massage"
              rows="6"
              cols="50"
              className="py-3 px-4 rounded-md bg-[#262626] text-slate-300 w-full"
              required
            ></textarea>
          </div>
          <input
            className="bg-[#FDB300] text-black rounded-lg font-semibold px-8 py-4 cursor-pointer ease-in-out duration-300 hover:bg-black hover:text-white hover:px-9 hover:py-5 hover:shadow-red-600  hover:shadow-md"
            type="submit"
            value="Send Massage"
          />
        </section>
        <section className="w-[45%] space-y-7">
          <h1 className="text-3xl font-semibold ">Contact Info</h1>
          <p className="text-slate-300 text-justify">
            Always available for freelance work if the right project comes
            along, Feel free to contact me!
          </p>
          <div className="flex gap-5 ">
            <div className="w-[7%] flex flex-col items-center">
              <p className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#FDB300]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </p>

              <p className="mt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-10 h-10 text-[#FDB300]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                  />
                </svg>
              </p>

              <p className="mt-9">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-phone-call"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-[#FDB300]"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                  <path d="M15 7a2 2 0 0 1 2 2" />
                  <path d="M15 3a6 6 0 0 1 6 6" />
                </svg>
              </p>
              <p className="mt-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-location"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-[#FDB300]"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
                </svg>
              </p>
            </div>
            <div className="w-[2px] bg-gray-600"></div>
            <div className="w-[92%] space-y-6">
              <div>
                <p className="font-semibold">Name</p>
                <p className="text-slate-300">Ashim Bhowmik Amit</p>
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-slate-300">
                  Mohammadia Housing, Limited Road 6
                </p>
              </div>
              <div>
                <p className="font-semibold">Call Me</p>
                <p className="text-slate-300">+8801770012828</p>
              </div>
              <div>
                <p className="font-semibold">Email Me</p>
                <p className="text-slate-300">ashimbhowmik239@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
