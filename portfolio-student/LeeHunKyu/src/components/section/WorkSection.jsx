"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function WorkSection() {
  useEffect(() => {
    const workRight = document.querySelector("#workSection1 .right__side");
    const workLeft = document.querySelector("#workSection1 .left__side span");
    const workAni1 = gsap.timeline();

    gsap.registerPlugin(ScrollTrigger);

    workAni1
      .set(workRight, { y: "120vh", opacity: "0.8" })
      .to(workRight, { y: "-150vh", opacity: "1" });

    ScrollTrigger.create({
      animation: workAni1,
      ease: "none",
      trigger: "#workSection1",
      start: "top top",
      end: "+=2500",
      pin: "#workSection1",
      anticipatePin: true,
      scrub: 1,
      markers: false,
      onEnter: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onEnterBack: () => {
        document.querySelector("#header").style.transform =
          "translateY(-100px)";
      },
      onLeave: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
      onLeaveBack: () => {
        document.querySelector("#header").style.transform = "translateY(0px)";
      },
    });
  }, []);
  return (
    <section id="workSection1" className="section__item bg__black">
      <h2 className="blind">사이트만들기 작업 첫 번째 영역</h2>
      <div className="container">
        <div className="left__side">
          <span>
            <em>Hoong&lsquo;s</em>Awesome Work.
          </span>
        </div>
        <div className="right__side">
          <div className="works__list">
            <ul>
              <li>
                <strong>Works 1</strong>
                <span>Make blog with PHP</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php/blog/blog.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/tree/main/blog"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 2</strong>
                <span>Make Website with PHP</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/main/main.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/blob/main/back/php/main/main.php"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 3</strong>
                <span>Make join with AJAX</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/join/join.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/tree/main/back/php/join"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 4</strong>
                <span>Make login with AJAX</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/login/login.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/tree/main/back/php/login"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 5</strong>
                <span>Make IDsearch with AJAX</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/login/loginFind.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/tree/main/back/php/login"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 6</strong>
                <span>Make board-write with PHP</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/board/boardWrite.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/blob/main/back/php/board/boardWrite.php"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 7</strong>
                <span>Make board-modify with PHP</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php2/php/board/board.php"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/blob/main/back/php/board/boardModify.php"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              <li>
                <strong>Works 8</strong>
                <span>Make comment with PHP</span>
                <div>
                  <a
                    href="http://hooong.dothome.co.kr/php/blog/blogView.php?blogID=1"
                    target="_blank"
                  >
                    <em>view </em>blog
                  </a>
                  <a
                    href="https://github.com/dlgnsrb227/PHP2023/tree/main/blog"
                    target="_blank"
                  >
                    <em>view </em>source
                  </a>
                </div>
              </li>
              {/* <li>
              <strong>Works 9</strong><span>Make blog with PHP</span>
              <div>
                <a href="#"><em>view </em>blog</a
                ><a href="#"><em>view </em>source</a>
              </div>
            </li>
            <li>
              <strong>Works 10</strong><span>Make blog with PHP</span>
              <div>
                <a href="#"><em>view </em>blog</a
                ><a href="#"><em>view </em>source</a>
              </div>
            </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
