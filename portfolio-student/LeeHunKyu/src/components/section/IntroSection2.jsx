"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IntroSection2() {
  useEffect(() => {
    const spinStick = document.querySelector("#introSection2 .spin__stick");
    const T1 = document.querySelector(".spin__text .t1");
    const T2 = document.querySelector(".spin__text .t2");
    const T3 = document.querySelector(".spin__text .t3");
    const T4 = document.querySelector(".spin__text .t4");
    const t4Text = document.querySelector(".spin__text .t4__text");

    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ ease: "none", duration: 2 });
    const introAni2 = gsap.timeline();
    introAni2
      .set(spinStick, { borderRadius: 30, width: "50px", opacity: 1 })
      .to(spinStick, {
        width: "50px",
        height: "420px",
        y: "-210px",
        borderRadius: 30,
      })
      .to(spinStick, { rotationZ: 1350, transformOrigin: "50% 94%" })
      .to(spinStick, {
        rotationZ: 1350,
        transformOrigin: "50% 94%",
        height: "840px",
        y: "-395px",
        x: "394px",
      })
      .set(spinStick, {
        x: "27px",
        y: "-26px",
        rotationZ: -90,
        transformOrigin: "50% 50%",
      })
      .to(spinStick, {
        scale: 25,
      })
      .to(spinStick, { autoAlpha: 0 });
    ScrollTrigger.create({
      animation: introAni2,
      trigger: "#introSection2",
      start: "top top",
      end: "+=2000%",
      scrub: true,
      pin: true,
      anticipatePin: true,
      markers: false,
      onEnter: function () {
        document.querySelector(".link__about").classList.add("active");
      },
      onEnterBack: function () {
        document.querySelector(".link__about").classList.add("active");
      },
      onLeave: function () {
        document.querySelector(".link__about").classList.remove("active");
      },
      onLeaveBack: function () {
        document.querySelector(".link__about").classList.remove("active");
      },
      onUpdate: (self) => {
        let progress = self.progress.toFixed(4);
        // console.log(progress);
        if (progress > 0 && progress < 0.2398) {
          document.querySelectorAll(".spin__text span").forEach((e) => {
            e.classList.remove("active");
          });
          T1.classList.add("active");
        } else if (progress > 0.2398 && progress < 0.2932) {
          document.querySelectorAll(".spin__text span").forEach((e) => {
            e.classList.remove("active");
          });
          T2.classList.add("active");
        } else if (progress > 0.2932 && progress < 0.3465) {
          document.querySelectorAll(".spin__text span").forEach((e) => {
            e.classList.remove("active");
          });
          T3.classList.add("active");
          spinStick.classList.remove("active");
        } else if (progress > 0.3465 && progress < 0.4) {
          document.querySelectorAll(".spin__text span").forEach((e) => {
            e.classList.remove("active");
            T4.classList.add("active");
            t4Text.classList.add("active");
            spinStick.classList.add("active");
          });
        } else if (progress > 0.4) {
          document.querySelectorAll(".spin__text span").forEach((e) => {
            e.classList.remove("active");
          });
          spinStick.classList.remove("active");
        }
      },
    });
  }, []);

  return (
    <section id="introSection2" className="section__item bg__black">
      <h2 className="blind">인트로 두 번째 영역</h2>
      <div className="container">
        <div className="spin__stick"></div>
        <div className="spin__text">
          <span className="t1 active">
            want you to be <em>joyful</em>
          </span>
          <span className="t2">
            want to be with <em>all of you</em>
          </span>
          <span className="t3">
            want you to <em>contact me</em>
          </span>
          <span className="t4">
            want you to <em>meet Hoong</em>
          </span>
          <span className="t4__text chosun">
            안녕하세요 <em>프론트엔드</em> 개발자를 꿈꾸는
            <em>이훈규</em>입니다.
            <br />
            부족한 부분은 끊임없이 <em>공부</em>하고 배우며
            <br />
            항상 <em>최고</em>가 되기위해 노력합니다.
          </span>
        </div>
        <div className="spin__image"></div>
      </div>
    </section>
  );
}
