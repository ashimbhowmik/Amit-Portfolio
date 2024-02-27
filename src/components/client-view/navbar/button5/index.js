"use client";

import { useState } from "react";

export default function Button5({ view, setView }) {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className=" flex items-center justify-end">
      <div className="flex flex-col space-y-3 ">
        <div
          className={`flex justify-end  bg-[#313131] items-center rounded-full  ${
            showContact ? "bg-[#FFB400] " : ""
          }`}
        >
          <button
            className={` button relative flex gap-2 justify-end p-3 rounded-full items-center font-bold ${
              view === "contact" ? "bg-[#FFB400] text-white" : ""
            }`}
            onClick={() => {
              setView("contact");
            }}
            onMouseEnter={() => setShowContact(true)}
            onMouseLeave={() => setShowContact(false)}
          >
            {showContact && (
              <span className="button-name ease-in-out duration-200">
                Contact
              </span>
            )}
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-mail-opened-filled"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M14.872 14.287l6.522 6.52a2.996 2.996 0 0 1 -2.218 1.188l-.176 .005h-14a2.995 2.995 0 0 1 -2.394 -1.191l6.521 -6.522l2.318 1.545l.116 .066a1 1 0 0 0 .878 0l.116 -.066l2.317 -1.545z"
                  stroke-width="0"
                  fill="#ffffff"
                />
                <path
                  d="M2 9.535l5.429 3.62l-5.429 5.43z"
                  stroke-width="0"
                  fill="#ffffff"
                />
                <path
                  d="M22 9.535v9.05l-5.43 -5.43z"
                  stroke-width="0"
                  fill="#ffffff"
                />
                <path
                  d="M12.44 2.102l.115 .066l8.444 5.629l-8.999 6l-9 -6l8.445 -5.63a1 1 0 0 1 .994 -.065z"
                  stroke-width="0"
                  fill="#ffffff"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
  );
}
