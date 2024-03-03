"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function ClientContactView() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0ujx1up", "template_lhlhin3", form.current, {
        publicKey: "G1u6oCLMeEcuhMoTz",
      })
      .then(
        () => {
          const notify = () => toast.success("Email Send Sucsefully");
          notify();
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container  mx-auto lg:mt-[80px] mt-[50px] lg:w-[85%] 2xl:w-full  lg:pb-[130px] pb-10">
      <h1 className="text-center lg:text-6xl text-4xl font-bold lg:mb-[100px] mb-10 uppercase">
        Get in <span className="text-[#FFB400] ">Touch</span>
      </h1>
      <main className="lg:flex  gap-16 w-[87%] lg:w-full mx-auto">
        <section className="lg:w-[55%] space-y-7">
          <h1 className="lg:text-3xl text-2xl text-center lg:text-left mb-10 lg:mb-0 font-semibold">
            Message Me
          </h1>
          <form ref={form} onSubmit={sendEmail} action="" className="space-y-7">
            <div className="flex">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Name"
                  name="to_name"
                  className="py-3 px-4 rounded-md bg-[#262626] text-slate-300  w-[95%]"
                  required
                ></input>
              </div>
              <div className="flex-1 justify-end flex">
                <input
                  type="email"
                  placeholder="Email"
                  name="from_email"
                  className="py-3 px-4 rounded-md bg-[#262626] text-slate-300 w-[95%]"
                  required
                ></input>
              </div>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Subject"
                name="subject_name"
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
                name="message"
                className="py-3 px-4 rounded-md bg-[#262626] text-slate-300 w-full"
                required
              ></textarea>
            </div>
            <input
              className="border-[#FDB300] border lg:w-[200px] w-[170px] rounded-lg font-semibold px-8 lg:py-4 py-3 cursor-pointer ease-in-out duration-300 hover:bg-black hover:text-white hover:px-9 hover:py-5 hover:shadow-[#FDB300]  hover:shadow-sm"
              type="submit"
              value="Send Massage"
            />
          </form>
        </section>
        <section className="lg:w-[45%] mt-14 lg:mt-0 space-y-7">
          <h1 className="lg:text-3xl text-2xl text-center lg:left font-semibold ">
            Contact Info
          </h1>
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

              <p className="lg:mt-[30px] mt-10">
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

              <p className="lg:mt-8 mt-[44px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10 text-[#FDB300]"
                >
                  <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                  <path
                    fillRule="evenodd"
                    d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                    clipRule="evenodd"
                  />
                </svg>
              </p>
              <p className="lg:mt-7 mt-[30px]">
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
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
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
      <Toaster />
    </div>
  );
}
