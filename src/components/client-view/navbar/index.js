/* eslint-disable react/jsx-key */
"use client";

import { useEffect, useState } from "react";
import { Link as LinkScroll, scroller } from "react-scroll";

const menuItems = [
  {
    id: "home",
    label: "Home",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-home"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user-hexagon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
        <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
        <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-box"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
        <path d="M12 12l8 -4.5" />
        <path d="M12 12l0 9" />
        <path d="M12 12l-8 -4.5" />
      </svg>
    ),
  },
  {
    id: "project",
    label: "projects",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-world-star"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M21 12a9 9 0 1 0 -9.968 8.948" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h6.4" />
        <path d="M11.5 3a17.001 17.001 0 0 0 -1.886 13.802" />
        <path d="M12.5 3a16.982 16.982 0 0 1 2.549 8.01" />
        <path d="M17.8 20.817l-2.172 1.138a.392 .392 0 0 1 -.568 -.41l.415 -2.411l-1.757 -1.707a.389 .389 0 0 1 .217 -.665l2.428 -.352l1.086 -2.193a.392 .392 0 0 1 .702 0l1.086 2.193l2.428 .352a.39 .39 0 0 1 .217 .665l-1.757 1.707l.414 2.41a.39 .39 0 0 1 -.567 .411l-2.172 -1.138z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-mail-opened"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 9l9 6l9 -6l-9 -6l-9 6" />
        <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" />
        <path d="M3 19l6 -6" />
        <path d="M15 13l6 6" />
      </svg>
    ),
  },
];

function CreateMenus({ activeLink, getMenuItems, setActiveLink }) {
  const [showName, setShowName] = useState(false);
  return getMenuItems.map((item) => (
    <LinkScroll
      activeClass="active"
      to={item.id}
      spy={true}
      smooth={true}
      duration={1000}
      onSetActive={() => setActiveLink(item.id)}
      className={`px-4 py-2 mx-2 cursor-pointer text-white animation-hover inline-block relative
    ${
      activeLink === item.id
        ? "text-green-main animation-active shadow-green-main"
        : "text-[#000] font-bold hover:text-green-main"
    }
    `}
    >
      <button
        className="button relative ease-in-out duration-200 flex"
        onMouseEnter={() => setShowName(true)}
        onMouseLeave={() => setShowName(false)}
      >
        <i>{item.svg}</i>
        {showName && (
          <span className="button-name ease-in-out duration-200">
            {item.label}
          </span>
        )}
      </button>
    </LinkScroll>
  ));
}

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.screenY > 20);
    });
  }, []);

  return (
    <>
      <header
        className={` w-full  bg-white-500 transition-all ${
          scrollActive ? "shadow-md pt-0" : "pt-4"
        }`}
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <ul className="hidden lg:flex flex-col col-start-4 col-end-8 text-[#000] items-center">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </nav>
      </header>
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t">
        <div className="bg-white-500 sm:px-3">
          <ul className="overflow-x-auto flex flex-col w-full justify-between items-center text-[#000]">
            <CreateMenus
              setActiveLink={setActiveLink}
              activeLink={activeLink}
              getMenuItems={menuItems}
            />
          </ul>
        </div>
      </nav>
    </>
  );
}
