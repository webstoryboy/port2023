import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ContactSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#contactSection1",
      start: "top top",
      markers: false,
      onEnter: function () {
        document.querySelector(".link__ability").classList.remove("active");
        document.querySelector(".link__contact").classList.add("active");
      },
      onLeaveBack: function () {
        document.querySelector(".link__ability").classList.add("active");
        document.querySelector(".link__contact").classList.remove("active");
      },
    });
  }, []);
  return (
    <section id="contactSection1" className="section__item bg__black">
      <h2 className="blind">컨택트 영역</h2>
      <div className="container">
        <div className="contact__box">
          <span>Do You Like This Portfolio ?</span>
          <h4>CONTACT ME</h4>
        </div>
        <div className="contact__foot">
          <div className="foot__inner">
            <span>PHONE :</span>
            <span>010. 2593. 0237</span>
          </div>
          <div className="foot__inner">
            <span>MAIL :</span>
            <a href="mailto:dlgnsrb227@gmail.com">dlgnsrb227@gmail.com</a>
          </div>
          <div className="foot__inner social">
            <span>SOCIAL :</span>
            <a href="https://www.instagram.com/hoong_9/" target="_blank">
              INSTAGRAM
            </a>
            <a href="https://hoong-co.tistory.com/" target="_blank">
              TISTORY
            </a>
            <a href="https://github.com/dlgnsrb227" target="_blank">
              GITHUB
            </a>
          </div>
          <div className="foot__inner">
            <span>WORKS FROM :</span>
            <span>2023.06</span>
          </div>
          <div className="foot__inner">
            <Link href="/" className="backtop">
              BACK TO TOP
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
