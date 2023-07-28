"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

export default function Header() {
  useEffect(() => {
    let links = gsap.utils.toArray("#nav ul li a");

    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(ScrollTrigger);
  }, []);
  return (
    <header id="header">
      <div className="container">
        <Link href="/">
          <h1>HOONG</h1>
        </Link>
        <nav id="nav">
          <ul>
            <li className="link__about">
              <a href="#introSection2">ABOUT</a>
            </li>
            <li className="link__work">
              <a href="#portSection3">WORK</a>
            </li>
            <li className="link__ability">
              <a href="#horizontality">ABILITY</a>
            </li>
            <li className="link__contact">
              <a href="#contactSection1">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
