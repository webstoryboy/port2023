"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AbilitySection() {
  useEffect(() => {
    const horizon = document.querySelector("#horizontality");
    const sections = gsap.utils.toArray("#horizontality > section");

    gsap.registerPlugin(ScrollTrigger);

    gsap.to(sections, {
      ease: "none",
      x: "-400.1vw",
      scrollTrigger: {
        trigger: "#horizontality",
        start: "top top",
        end: () => "+=" + (horizon.offsetWidth - innerWidth),
        pin: true,
        scrub: 0.1,
        onUpdate: (self) => {
          let progress = self.progress.toFixed(3);
          // console.log(progress);
          if (progress > 0.5) {
            document
              .querySelector("#abilitySection2")
              .classList.add("bg__black");
            document
              .querySelector("#abilitySection2")
              .classList.remove("bg__white");
            document.querySelector("#abilitySection2").style.color = "#ffffff";
            document.querySelector("#horizontality").style.backgroundColor =
              "#000000";
          } else if (progress < 0.5 && progress > 0) {
            document
              .querySelector("#abilitySection2")
              .classList.add("bg__white");
            document.querySelector("#abilitySection2").style.color = "#000000";
            document.querySelector("#horizontality").style.backgroundColor =
              "#ffffff";
          }
        },
        onLeave: () => {
          document.querySelector("#workSection1").style.opacity = "1";
        },
        onEnterBack: () => {
          document.querySelector("#workSection1").style.opacity = "0";
        },
        onEnter: function () {
          document.querySelector(".link__ability").classList.add("active");
        },
        onLeaveBack: function () {
          document.querySelector(".link__ability").classList.remove("active");
        },
      },
    });
  }, []);

  useEffect(() => {
    const abilitySpan = document.querySelectorAll(".skew__eff");

    let proxy = { skew: 0 },
      skewSetter = gsap.quickSetter(abilitySpan, "skewX", "deg"), // fast
      clamp = gsap.utils.clamp(-20, 20);
    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / -50);
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skew = skew;
          gsap.to(proxy, {
            skew: 0,
            duration: 0.5,
            ease: "power1",
            overwrite: true,
            onUpdate: () => skewSetter(proxy.skew),
          });
        }
      },
    });
  }, []);
  return (
    <main id="horizontality">
      <section id="abilitySection1" className="section__item bg__white">
        <h2 className="blind">스킬부분 첫 번째 영역</h2>
        <div className="container">
          <h3>
            By<em>ScriptCoding</em>
          </h3>
        </div>
      </section>
      <section id="abilitySection2" className="section__item bg__white">
        <h2 className="blind">스킬부분 두 번째 영역</h2>
        <div className="ability__inner">
          <span className="skew__eff">Photoshop</span>
          <span className="skew__eff">illustrator</span>
          <span className="skew__eff">Figma</span>
          <span className="skew__eff">Html</span>
          <span className="skew__eff">CSS</span>
          <span className="skew__eff">SASS</span>
          <span className="skew__eff">Javascript</span>
          <span className="skew__eff">jQuery</span>
          <span className="skew__eff">React</span>
          <span className="skew__eff">Vue</span>
          <span className="skew__eff">Vite</span>
          <span className="skew__eff">Next</span>
        </div>
      </section>
      <section id="abilitySection3" className="section__item bg__black">
        <h2 className="blind">스킬부분 세 번째 영역</h2>
        <div className="container">
          <div className="left__side">
            <span className="skew__eff">
              <em>Hoong&lsquo;s</em>Awesome Work.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
