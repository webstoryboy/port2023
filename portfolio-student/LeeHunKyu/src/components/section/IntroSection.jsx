"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IntroSection() {
  useEffect(() => {
    const backLogo = document.querySelector("#introSection1 svg");
    const introDesc = document.querySelector("#introSection1 p");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(introDesc, {
      opacity: 0,
      y: -400,
      scrollTrigger: {
        trigger: "#introSection1",
        scrub: 1,
        start: "300px top",
        end: "bottom -150%",
        markers: false,
      },
    });

    gsap.defaults({ ease: "none", duration: 2 });
    const introAni1 = gsap.timeline();
    introAni1
      .set(backLogo, { opacity: 0.4 })
      .to(backLogo, { x: -200, y: -800, rotation: 345, scale: 5, opacity: 1 })
      .to(backLogo, {
        x: -200,
        y: -1500,
        rotation: 375,
        scale: 5,
        opacity: 0,
      });

    ScrollTrigger.create({
      animation: introAni1,
      trigger: "#introSection1",
      start: "top top",
      end: "+=300%",
      scrub: 1,
      pin: true,
      anticipatePin: true,
      markers: false,
    });
  }, []);

  return (
    <section id="introSection1" className="section__item bg__black">
      <h2 className="blind">인트로 첫 번째 영역</h2>
      <div className="container">
        <p>
          Front-End <em>Dveloper</em>
          <br />
          <em>Creating</em> <em>Captivating</em>
          <br />
          <em>WEB</em> <em>Experience</em>
        </p>
        <svg
          width="1394"
          height="1668"
          viewBox="0 0 1394 1668"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M683.439 273.11V0C582.919 55.0013 342.051 185.487 182.737 267.42C23.4225 349.353 -5.02648 449.494 0.663317 489.322V762.432C156.184 678.982 489.986 498.426 581.023 443.804C672.059 389.182 687.232 307.249 683.439 273.11Z"
            fill="#666666"
          />
          <path
            d="M1018.47 500.702V0C1094.34 39.8286 1260.86 128.589 1320.03 165.004C1379.21 201.419 1394 267.42 1394 295.869V500.702V1388.31C1394 1438.38 1356.07 1469.86 1337.1 1479.35L1018.47 1661.42V898.988L369.837 1251.75V1667.11C280.697 1614.01 92.1747 1500.97 51.2082 1473.66C10.2416 1446.35 0 1390.21 0 1365.55V1160.72C0 1069.68 75.8639 1008.99 113.796 990.024L1018.47 500.702Z"
            fill="#666666"
          />
        </svg>
      </div>
    </section>
  );
}
