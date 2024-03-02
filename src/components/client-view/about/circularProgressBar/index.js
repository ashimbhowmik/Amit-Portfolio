// CircularProgressBar.js
"use client";

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="lg:pb-14 pb-7">
      <section
        className="w-full lg:flex justify-evenly items-center "
        data-aos="fade-right"
      >
        <div className="flex justify-around lg:w-[50%]">
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
        </div>
        <div className="flex justify-around lg:w-[50%] lg:mt-0 mt-20">
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
        </div>
      </section>
      <section
        className="w-full hidden  lg:flex justify-evenly items-center mt-24"
        data-aos="fade-left"
      >
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
      <section className="lg:hidden">
        <section
          className="w-full lg:flex  justify-evenly items-center mt-24"
          data-aos="fade-left"
        >
          <div className="flex justify-around lg:w-[50%]">
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
          </div>
          <div className="flex justify-around lg:w-[50%] lg:mt-0 mt-20">
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
          </div>
        </section>
      </section>
    </div>
  );
}
