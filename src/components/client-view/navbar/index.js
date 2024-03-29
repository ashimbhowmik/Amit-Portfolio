"use client";

import { useContext } from "react";
import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import Button5 from "./button5";
import { GlobalContext } from "@/context/GlobalContext";

export default function Navber() {
  const { view, setView } = useContext(GlobalContext);

  // Function to scroll to the About Me section

  return (
    <div className=" flex items-center pr-10 lg:pr-7 2xl:pr-14 fixed z-50 ">
      <div className="flex flex-col space-y-5 ">
        <Button1 view={view} setView={setView}></Button1>
        <Button2 view={view} setView={setView}></Button2>
        <Button3 view={view} setView={setView}></Button3>
        <Button4 view={view} setView={setView}></Button4>
        <Button5 view={view} setView={setView}></Button5>
      </div>
    </div>
  );
}
