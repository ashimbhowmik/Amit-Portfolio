/* eslint-disable @next/next/no-img-element */
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3Alt, faCodepen } from "@fortawesome/free-brands-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faPenFancy,
  faUser,
  faBook,
} from "@fortawesome/free-solid-svg-icons";

export default function ServiceClient() {
  return (
    <section>
      <main className="w-[87%] mx-auto lg:w-full overflow-hidden">
        <h1 className="text-center text-3xl uppercase font-bold lg:mt-[70px] mt-[50px] mb-[60px]">
          My Services
        </h1>
        <section>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12 ">
            <div className=" bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              <FontAwesomeIcon
                icon={faCss3Alt}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Web Development
              </h1>
              <p className="text-justify text-slate-300">
                Web development is the process of creating and maintaining
                websites and applications for the internet. It involves a
                combination of design, coding, and content management to deliver
                a seamless user experience.
              </p>
            </div>
            <div className="  bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              {/* <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 " /> */}
              <FontAwesomeIcon
                icon={faCodepen}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Problem Solver
              </h1>
              <p className="text-justify text-slate-300">
                A problem solver is an individual skilled at identifying,
                analyzing, and resolving complex issues or obstacles, often
                through a combination of critical thinking, creativity
                knowledge. They employ various problem-solving techniques such
                as root cause analysis, brainstorming, or seeking expert advice
              </p>
            </div>
            <div className="  bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              {/* <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 " /> */}
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Software Engineer
              </h1>
              <p className="text-justify text-slate-300">
                A software engineer is a professional who designs, develops,
                tests, and maintains software, applications, and systems to meet
                specific user needs, utilizing various programming languages,
                tools, and frameworks to create efficient and reliable
                solutions.
              </p>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-12">
            <div className="  bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              {/* <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 " /> */}
              <FontAwesomeIcon
                icon={faUser}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Customer Support
              </h1>
              <p className="text-justify text-slate-300">
                Customer support is a service provided to users to help them
                with issues, questions, or concerns related to a product or
                service. Support is typically provided through various channels
                such as email, chat, phone, or in-person, and aims to provide
                timely and effective assistance to ensure customer satisfaction.
              </p>
            </div>
            <div className="  bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              {/* <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 " /> */}
              <FontAwesomeIcon
                icon={faPenFancy}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Desginer
              </h1>
              <p className="text-justify text-slate-300">
                A designer is a professional who visualizes, plans, and creates
                aesthetic and functional solutions to meet specific needs or
                solve problems, often using design principles, creativity, and
                technology to create user-centered experiences or products.
              </p>
            </div>
            <div className="  bg-[#1D1D1D] hover:border-b-[2px] border-[#FFB400] ease-in-out duration-300 transform hover:scale-110 p-10 cursor-pointer">
              {/* <FontAwesomeIcon icon={faCss3Alt} className="w-10 h-10 " /> */}
              <FontAwesomeIcon
                icon={faBook}
                className="w-12 h-12 text-[#FFB400]"
              />

              <h1 className="lg:text-3xl text-2xl font-semibold mt-6 mb-4">
                Researcher
              </h1>
              <p className="text-justify text-slate-300">
                A researcher is an individual who conducts systematic inquiry or
                investigation into a particular subject matter, using various
                methodologies and data analysis techniques to contribute to the
                body of knowledge in that field or scientific inquiry, data
                collection, analysis, and interpretation
              </p>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
