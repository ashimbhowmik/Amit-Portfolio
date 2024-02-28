// CircularProgressBar.js
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgressBar({
  progress1,
  progress2,
  progress3,
  progress4,
  progress5,
  progress6,
  progress7,
  progress8,
}) {
  return (
    <div className="pb-14">
      <section className="w-full flex justify-evenly items-center ">
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress1}
            text={`${progress1}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">HTML</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress2}
            text={`${progress2}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">JAVACRIPT</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress3}
            text={`${progress3}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">CSS</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress4}
            text={`${progress4}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">REACT JS</p>
        </div>
      </section>
      <section className="w-full flex justify-evenly items-center mt-24">
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress5}
            text={`${progress5}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">NEXT JS</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress6}
            text={`${progress6}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">PYTHON</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress7}
            text={`${progress7}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">C++</p>
        </div>
        <div style={{ width: 130, height: 130 }}>
          <CircularProgressbar
            value={progress8}
            text={`${progress8}%`}
            styles={{
              path: { stroke: "#FFB400" },
              text: { fill: "#FFFFFF", fontSize: "24px" },
            }}
          />
          <p className="text-center mt-6">C</p>
        </div>
      </section>
    </div>
  );
}
