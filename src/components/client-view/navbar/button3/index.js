"use client";

import { useRef, useContext, useState, useEffect } from "react";
import { GlobalContext } from "@/context/GlobalContext";

export default function Button3({ view }) {
  const [showEdu, setShowEdu] = useState(false);
  const aboutRef = useRef(null);
  const { setView } = useContext(GlobalContext);

  useEffect(() => {
    aboutRef.current = document.querySelector(
      ".text-center.text-6xl.uppercase.font-bold"
    );
  }, []);

  const handleScroll = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
    setView("project");
  };

  return (
    <div className=" flex items-center justify-end">
      <div className="flex flex-col space-y-3 ">
        <div
          className={`flex justify-end  bg-[#313131] items-center rounded-full  ${
            showEdu ? "bg-[#FFB400] " : ""
          }`}
        >
          <button
            className={` button relative flex gap-2 justify-end p-3 rounded-full items-center font-bold ${
              view === "education" ? "bg-[#FFB400] text-white" : ""
            }`}
            onClick={() => {
              setView("education");
            }}
            onMouseEnter={() => setShowEdu(true)}
            onMouseLeave={() => setShowEdu(false)}
          >
            {showEdu && (
              <span className="button-name ease-in-out duration-200">
                Education
              </span>
            )}
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 9.832v1.793c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875V9.832a3 3 0 0 0-.722-1.952l-3.285-3.832A3 3 0 0 0 16.215 3h-8.43a3 3 0 0 0-2.278 1.048L2.222 7.88A3 3 0 0 0 1.5 9.832ZM7.785 4.5a1.5 1.5 0 0 0-1.139.524L3.881 8.25h3.165a3 3 0 0 1 2.496 1.336l.164.246a1.5 1.5 0 0 0 1.248.668h2.092a1.5 1.5 0 0 0 1.248-.668l.164-.246a3 3 0 0 1 2.496-1.336h3.165l-2.765-3.226a1.5 1.5 0 0 0-1.139-.524h-8.43Z"
                  clipRule="evenodd"
                />
                <path d="M2.813 15c-.725 0-1.313.588-1.313 1.313V18a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-1.688c0-.724-.588-1.312-1.313-1.312h-4.233a3 3 0 0 0-2.496 1.336l-.164.246a1.5 1.5 0 0 1-1.248.668h-2.092a1.5 1.5 0 0 1-1.248-.668l-.164-.246A3 3 0 0 0 7.046 15H2.812Z" />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
