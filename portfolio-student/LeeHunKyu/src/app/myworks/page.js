"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function MyWorks() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll(".portpage__image").forEach((e) => {
      e.addEventListener("mouseover", () => {
        e.classList.add("active");
      });
      e.addEventListener("mouseout", () => {
        e.classList.remove("active");
      });
    });

    gsap.to("#portpageSection2", {
      ease: "none",
      x: "-280vw",
      scrollTrigger: {
        trigger: "#horizontal",
        start: "top top",
        end: "+=5000",
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          let progress = self.progress.toFixed(3);
          console.log(progress);
        },
      },
    });
  }, []);
  return (
    <main id="main">
      <section id="portpageSection1" class="section__item bg__black">
        <h2 class="blind">작업결과물 첫 번째 영역</h2>
        <div class="container">
          <h3>My Works</h3>
        </div>
      </section>
      <main id="horizontal">
        <section id="portpageSection2" class="section__item bg__black">
          <h2 class="blind">작업결과물 두 번째 영역</h2>
          <div class="portpage__inner">
            <span>Look around my script works.</span>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img02.png"
                  alt="마우스이펙트 이미지"
                />
              </div>
              <p>Mouse Effects</p>
              <a
                href="https://dlgnsrb227.github.io/web2023/javascript/mouse/mouseEffect01.html"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/web2023/tree/main/javascript/mouse"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img03.png"
                  alt="패럴랙스이펙트 이미지"
                />
              </div>
              <p>Parallax Effects</p>
              <a
                href="https://dlgnsrb227.github.io/web2023/javascript/parallax/parallaxEffect01.html"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/web2023/tree/main/javascript/parallax"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img01.png"
                  alt="게임이펙트 이미지"
                />
              </div>
              <p>Game Effects</p>
              <a
                href="https://hoong-game.web.app/"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/game2023"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img04.png"
                  alt="퀴즈이펙트 이미지"
                />
              </div>
              <p>Quiz Effects</p>
              <a
                href="https://dlgnsrb227.github.io/web2023/javascript/quiz/quizEffect01.html"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/web2023/tree/main/javascript/quiz"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__img05.png"
                  alt="슬라이드이펙트 이미지"
                />
              </div>
              <p>Slide Effects</p>
              <a
                href="https://dlgnsrb227.github.io/web2023/javascript/slider/sliderEffect01.html"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/web2023/tree/main/javascript/slider"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
          </div>
          <div class="portpage__inner">
            <span>Look around my site coding.</span>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__web01.png"
                  alt="리액트사이트 이미지"
                />
              </div>
              <p>React Site (API 사용)</p>
              <a
                href="https://hoongsite-react01.netlify.app"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/react2023-3/blob/main/src/App.js"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__web02.png"
                  alt="뷰사이트 이미지"
                />
              </div>
              <p>Vue Site</p>
              <a
                href="https://hoongsite2023-vue01.netlify.app"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/site2023-vue01"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__web03.png"
                  alt="넥스트페이지 이미지"
                />
              </div>
              <p>Next Site</p>
              <a
                href="https://hoongsite-next01.netlify.app"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/site2023-next01/blob/main/src/app/page.js"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="portpage__image">
              <div class="image__inner">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/portpage__web04.png"
                  alt="유튜브사이트 이미지"
                />
              </div>
              <p>Youtub API Site</p>
              <a
                href="https://hoongtube.netlify.app/"
                target="_blank"
                class="chosun"
              >
                완성화면
              </a>
              <a
                href="https://github.com/dlgnsrb227/site-youtube01/tree/main/src"
                target="_blank"
                class="chosun"
              >
                소스보기
              </a>
            </div>
            <div class="back__image">
              <Link href="/">
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/circle__back.png"
                  alt="메인으로 돌아가기 이미지"
                />
                <Image
                  width={500}
                  height={300}
                  src="/assets/images/arrow02.png"
                  alt="메인으로 돌아가기 이미지"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
}
