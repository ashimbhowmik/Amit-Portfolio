"use client";

import { useState } from "react";

export default function Button2({ view, setView }) {
  const [aboutName, setAboutName] = useState(false);

  return (
    <div className=" flex items-center justify-end">
      <div className="flex flex-col space-y-3 ">
        <div
          className={`flex justify-end  bg-[#313131] items-center rounded-full  ${
            aboutName ? "bg-[#FFB400] " : ""
          }`}
        >
          <button
            // className="button relative ease-in-out duration-200 flex gap-2 justify-end"
            className={` button relative flex gap-2 justify-end p-3 rounded-full items-center font-bold ${
              view === "about" ? "bg-[#FFB400] text-white" : ""
            }`}
            onClick={() => {
              setView("about");
            }}
            onMouseEnter={() => setAboutName(true)}
            onMouseLeave={() => setAboutName(false)}
          >
            {aboutName && (
              <span className="button-name ease-in-out duration-200">
                About
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
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
