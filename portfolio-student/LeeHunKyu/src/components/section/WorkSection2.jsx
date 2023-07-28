"use client";
import React, { useEffect } from "react";
import Image from "next/image";

export default function WorkSection2() {
  useEffect(() => {
    const images = document.getElementsByClassName("image");

    let globalIndex = 0,
      last = { x: 0, y: 0 };

    const activate = (image, x, y) => {
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;
      image.style.zIndex = globalIndex;

      image.dataset.status = "active";

      last = { x, y };
    };

    const distanceFromLast = (x, y) => {
      return Math.hypot(x - last.x, y - last.y);
    };

    const handleOnMove = (e) => {
      if (distanceFromLast(e.clientX, e.clientY) > window.innerWidth / 20) {
        const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

        activate(lead, e.clientX, e.clientY);

        if (tail) tail.dataset.status = "inactive";

        globalIndex++;
      }
    };

    window.onmousemove = (e) => handleOnMove(e);
    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);
  return (
    <section id="workSection2" className="section__item bg__black">
      <h2 className="blind">사이트만들기 작업 두 번째 영역</h2>
      <div className="backgorund__text">
        <div className="text__inner">
          <span>
            ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·
          </span>
          <span className="textRight">
            ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·
          </span>
          <span>
            ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·ByHoong·
          </span>
        </div>
      </div>
      <div className="background__image">
        <Image
          width={300}
          height={500}
          className="image"
          data-index="0"
          data-status="inactive"
          src="/assets/images/workBack__img01.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="1"
          data-status="inactive"
          src="/assets/images/workBack__img02.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="2"
          data-status="inactive"
          src="/assets/images/workBack__img03.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="3"
          data-status="inactive"
          src="/assets/images/workBack__img04.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="4"
          data-status="inactive"
          src="/assets/images/workBack__img05.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="5"
          data-status="inactive"
          src="/assets/images/workBack__img06.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="6"
          data-status="inactive"
          src="/assets/images/workBack__img07.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="7"
          data-status="inactive"
          src="/assets/images/workBack__img08.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="8"
          data-status="inactive"
          src="/assets/images/workBack__img09.png"
          alt="마우스 배경이미지"
        />
        <Image
          width={300}
          height={500}
          className="image"
          data-index="9"
          data-status="inactive"
          src="/assets/images/workBack__img10.png"
          alt="마우스 배경이미지"
        />
      </div>
    </section>
  );
}
