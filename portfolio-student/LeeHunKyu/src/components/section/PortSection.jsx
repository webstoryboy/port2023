"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function PortSection() {
  useEffect(() => {
    const introMent = document.querySelector(".introment");

    gsap.registerPlugin(ScrollTrigger);

    const portAni1 = gsap.timeline();
    portAni1.set(introMent, { x: 100, opacity: 0 }).to(introMent, {
      x: 0,
      opacity: 1,
    });

    ScrollTrigger.create({
      animation: portAni1,
      trigger: "#portSection1",
      start: "top top",
      end: "+=2000",
      scrub: 1,
      pin: true,
      // anticipatePin: true,
      markers: false,
      onEnter: function () {
        document.querySelector(".link__work").classList.add("active");
      },
      onLeaveBack: function () {
        document.querySelector(".link__work").classList.remove("active");
      },
    });
  }, []);
  return (
    <section id="portSection1" className="section__item bg__black">
      <h2 className="blind">포트폴리오 첫 번째 영역</h2>
      <div className="container">
        <p>
          <em>Front-End</em> Developer
          <br />
          Creating <em>Captivating</em>
          <em>WEB</em>
          <span className="chosun introment">
            어떤 일이라도 끊임없이 <strong>노력</strong>하면 반드시 좋은
            <strong>결과</strong>가 따라온다고 생각합니다.
            <br />
            모든 시작에 대해 두려워하지 않고 <strong>도전</strong>하고 배움에
            있어 열정과 겸손함을 유지하며
            <br />
            세심하고 꼼꼼하게 파고드는 개발자가 되겠습니다.
          </span>
        </p>
      </div>
    </section>
  );
}
