"use client";

import { useState } from "react";
import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import Button5 from "./button5";

export default function Navber(view, setView) {
  return (
    <div className=" flex items-center pr-10 fixed ">
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
