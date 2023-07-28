(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();gsap.registerPlugin(ScrollTrigger);const y=new Lenis({duration:2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t))});function p(t){y.raf(t),requestAnimationFrame(p)}requestAnimationFrame(p);gsap.set(".introBgImg01",{opacity:0,y:10});gsap.set(".introBgImg02",{opacity:0,y:10});gsap.set(".intro__inner > h1",{opacity:0,y:-10});gsap.set(".intro01 .intro__image .introImg02",{opacity:0,x:100,scale:1,rotate:30});gsap.set(".intro01 .intro__image .introImg03",{opacity:0,y:-50,scale:1});gsap.set(".intro01 .intro__title > h1",{opacity:0,x:-150});gsap.set(".intro01 .intro__image .introImg01",{opacity:0,x:150,y:100,scale:1,rotate:270});gsap.set(".intro01 .intro__image .introImg04",{opacity:0,x:0,scale:1,rotate:360});gsap.set(".intro01 .intro__title > h2",{opacity:0,y:10});setTimeout(()=>{let t=gsap.timeline();t.to(".introBgImg01",{opacity:1,y:0,duration:.3,stagger:.1,ease:Power3.easeInOut},"ee +=0.5"),t.to(".introBgImg02",{opacity:1,y:0,duration:.3,ease:Power3.easeInOut},"ee +=0.5"),t.to(".intro__inner > h1",{opacity:1,y:0,duration:.3,ease:Power3.easeInOut},"ee +=2.5"),t.to(".intro01 .intro__image .introImg02",{opacity:1,x:0,rotate:0,duration:1,ease:Power3.easeInOut},"ee +=3"),t.to(".intro01 .intro__image .introImg03",{opacity:1,y:0,duration:1,ease:Power3.easeInOut},"ee +=3.5"),t.to(".intro__title > h1",{opacity:1,x:0,duration:1,ease:"elastic"},"ee +=1"),t.to(".intro01 .intro__image .introImg01",{opacity:1,x:0,y:0,scale:1,duration:1,rotate:270,ease:"elastic"},"ee +=1"),t.to(".intro01 .intro__image .introImg04",{opacity:1,x:0,scale:1,duration:1,rotate:0,ease:Power3.easeInOut},"ee +=4"),t.to(".intro__title > h2",{opacity:1,y:0,duration:2,ease:"elastic"},"ee +=2")},1e3);gsap.to(".intro01 .intro__image .introImg04",{scale:1,rotate:180,duration:.1,ease:"none",scrollTrigger:{trigger:".intro01 .intro__image .introImg04",start:"center 90%",end:"center 10%",scrub:1}});gsap.to(".intro01 .intro__image .introImg05",{opacity:0,scale:.5,rotate:180,duration:.1,ease:"none",scrollTrigger:{opacity:1,trigger:".intro__inner",start:"center 90%",end:"center 10%",scrub:1}});gsap.to(".intro02 .intro__image .introImg02",{scale:1,rotate:270,duration:.5,ease:"none",scrollTrigger:{trigger:"#section01",start:"center 90%",end:"bottom bottom",scrub:1,markers:!0}});gsap.to(".intro02 .intro__image .introImg01",{scale:1,rotate:-300,duration:.5,ease:"none",scrollTrigger:{trigger:"#section01",start:"center 90%",end:"bottom bottom",scrub:1}});new SplitType(".intro02 .intro__title > h2",{types:"lines, words, chars",tagName:"span"});gsap.from(".intro02 .intro__title > h2 .word",{y:"110%",opacity:0,rotationZ:"10",duration:.8,ease:"circ.out",stagger:.1,scrollTrigger:{trigger:".intro02",start:"top center",end:"+=400",scrub:1,opacity:1}});const b=gsap.timeline().fromTo(".about__image01 .circle01",{xPercent:-300,borderRadius:0,rotate:360},{xPercent:0,borderRadius:500,rotate:0},"first").fromTo(".about__image01 .circle02",{xPercent:300,borderRadius:0},{xPercent:0,borderRadius:300},"first").fromTo(".about__image01 .circle03",{xPercent:-300,borderRadius:20},{xPercent:0,borderRadius:200},"second").fromTo(".about__image01 .circle04",{xPercent:600,borderRadius:0},{xPercent:0,borderRadius:100},"second").fromTo(".about__image01 .aboutImg01",{scale:0,rotate:360},{scale:1.2,rotate:0},"img").from(".about__image01 .aboutImg02",{xPercent:300},"img02").from(".about__image01 .aboutImg03",{yPercent:300},"img");ScrollTrigger.create({animation:b,trigger:"#section02",start:"top top",end:"+=5500",scrub:1,pin:!0,markers:!1,anticipatePin:1});new SplitType(".about02 > h2",{types:"lines, words, chars",tagName:"span"});gsap.from(".about02 > h2 .line",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.3,scrollTrigger:{trigger:".about02",start:"top center",end:"+=800",scrub:1,opacity:1}});const u=gsap.timeline();u.from(".about__image02 .aboutImg04",{y:-100,autoAlpha:0,ease:"circ",duration:.5}).from(".about__image02 .aboutImg01",{y:-100,autoAlpha:0,borderRadius:200}).fromTo(".about__image02 .aboutImg02",{x:-100,autoAlpha:0,rotate:0},{x:0,autoAlpha:1,rotate:10}).fromTo(".about__image02 .aboutImg06",{x:100,autoAlpha:0,rotate:0},{x:0,autoAlpha:1,rotate:-10}).from(".about__image02 .aboutImg03",{y:100,autoAlpha:0,rotate:10,ease:"elastic"}).from(".about__image02 .aboutImg05",{y:100,autoAlpha:0,rotate:-10,ease:"elastic"});ScrollTrigger.create({animation:u,trigger:".about__image02",start:"top top",end:"+=4000",scrub:1,pin:!0,anticipatePin:1,markers:!1});window.matchMedia("(max-width: 600px)");new SplitType(".about__image03 > p",{types:"lines, words, chars",tagName:"span"});gsap.from(".about__image03 > p .line",{y:"120%",opacity:0,duration:.5,ease:"circ.out",stagger:.1,scrollTrigger:{trigger:".about__image03",start:"top top",end:"+=500",markers:!1,scrub:1,opacity:1}});TweenMax.to(".about__image03 .aboutImg01",.4,{x:"+=30",rotation:"+=60",yoyo:!0,duration:.4,repeat:1/0});TweenMax.to(".about__image03 .aboutImg01",.4,{x:"-=30",rotation:"-=30",yoyo:!0,duration:.4,repeat:1/0});TweenMax.to(".about__image03 .aboutImg02",.4,{x:"-=60",rotation:"-=60",yoyo:!0,duration:.4,repeat:1/0});TweenMax.to(".about__image03 .aboutImg02",.4,{x:"+=30",rotation:"+=30",yoyo:!0,duration:.4,repeat:1/0});setTimeout(()=>{gsap.set(".skill__image01 .skillImg01",{opacity:1,scale:2,rotate:0}),gsap.set(".skill__image01 .skillImg02",{opacity:1,scale:2,rotate:0}),gsap.set(".skill__image01 .skillImg03",{opacity:1,scale:2,rotate:0}),gsap.to(".skill__image01 .skillImg01",{duration:.1,opacity:1,scale:1,rotate:-30,y:"20vh",scrollTrigger:{trigger:".skill__image01 .skillImg03",scrub:1}}),gsap.to(".skill__image01 .skillImg02",{duration:.1,opacity:1,scale:1,rotate:30,y:"-5vh",scrollTrigger:{trigger:".skill__image01 .skillImg03",scrub:1}}),gsap.to(".skill__image01 .skillImg03",{duration:.1,opacity:1,scale:1,rotate:-30,y:"10vh",scrollTrigger:{trigger:".skill__image01 .skillImg03",scrub:1}});let t=gsap.timeline({repeat:0,repeatDelay:.2}),i=gsap.timeline({repeat:0,repeatDelay:.5}),r=gsap.timeline({repeat:0,repeatDelay:.5}),a=gsap.timeline({repeat:0,repeatDelay:.5});t.fromTo(".skills__text",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skills__text",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:-150})}}),i.fromTo(".skills__text02",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skills__text02",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:150})}}),r.fromTo(".skills__text03",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skills__text03",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:-300})}}),a.fromTo(".skills__text04",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skills__text04",{scrollTrigger:{trigger:".infinite__item",scrub:1},x:200})}});const e=gsap.timeline();e.from(".mySkill .left",{}),ScrollTrigger.create({animation:e,trigger:".mySkill .left .paint",start:"top 0%",end:"+=3000",scrub:1,pin:".mySkill .left",markers:!1,anticipatePin:1,pinSpacing:!1});const o=gsap.timeline();o.from(".skill__box h2 img",{autoAlpha:0,y:-100,ease:"elastic",duration:.3,stagger:.2}),ScrollTrigger.create({animation:o,trigger:".right",start:"top top",end:"+=3000",scrub:1,markers:!1,anticipatePin:1})});setTimeout(()=>{const t=gsap.timeline().fromTo(".myPic .myPic01",{opacity:1,x:-200},{opacity:1,x:0});ScrollTrigger.create({animation:t,trigger:"#section05",start:"top 10%",end:"+=1500",scrub:1,markers:!1});const i=gsap.timeline().fromTo(".myPic .myPic02",{opacity:1,x:200},{opacity:1,x:0});ScrollTrigger.create({animation:i,trigger:"#section05",start:"top 10%",end:"+=1500",scrub:1,markers:!1});let r=gsap.timeline({repeat:0,repeatDelay:.2}),a=gsap.timeline({repeat:0,repeatDelay:.5}),e=gsap.timeline({repeat:0,repeatDelay:.5});r.fromTo(".skill__image02 .skills__text",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skill__image02 .skills__text",{scrollTrigger:{trigger:".skill__image02 .infinite__item",scrub:1},x:-150})}}),a.fromTo(".skill__image02 .skills__text02",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skill__image02 .skills__text02",{scrollTrigger:{trigger:".skill__image02 .infinite__item",scrub:1},x:150})}}),e.fromTo(".skill__image02 .skills__text03",{opacity:0,transform:"translate3d(0, 100%, 0)",transformOrigin:"bottom"},{opacity:1,transform:"translate3d(0, 0, 0)",transformOrigin:"top",delay:.8,duration:1}),ScrollTrigger.matchMedia({"(min-width: 600px)":function(){gsap.to(".skill__image02 .skills__text03",{scrollTrigger:{trigger:".skill__image02 .infinite__item",scrub:1},x:-300})}})});const c=document.querySelector("#horizontal"),m=gsap.utils.toArray("#horizontal > section");let l=gsap.to(m,{xPercent:-100*(m.length-1),ease:"none",scrollTrigger:{trigger:c,start:"top top",end:()=>"+="+(c.offsetWidth-innerWidth),pin:!0,anticipatePin:1,scrub:1,markers:!1,invalidateOnRefresh:!0}});const h=document.querySelectorAll(".site__title > h2");h.forEach(t=>{gsap.from(t,{opacity:0,y:-250,skewY:20,stagger:.8,scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:l,start:"left center",toggleActions:"play none none none",markers:!1}})});const T=document.querySelectorAll(".site__img img");T.forEach(t=>{gsap.from(t,{y:500,duration:.5,ease:"circ",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:l,start:"left center",toggleActions:"play none none none",markers:!1}})});const x=document.querySelectorAll(".site__cont .site__left");x.forEach(t=>{gsap.from(t,{x:200,opacity:0,duration:1,ease:"elastic",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:l,start:"left center",toggleActions:"play none none none",markers:!1}})});const k=document.querySelectorAll(".site__cont .site__right");k.forEach(t=>{gsap.from(t,{x:-300,opacity:0,duration:1,ease:"elastic",scrollTrigger:{trigger:t.closest("#horizontal > section"),containerAnimation:l,start:"left center",toggleActions:"play none none none",markers:!1}})});setTimeout(()=>{gsap.from(".scriptHead__inner > h2.title01",{x:500,opacity:0,stagger:.8,duration:1,ease:"circ",scrollTrigger:{trigger:"#section15 .bgImg",start:"top top",end:"bottom bottom",markers:!1}}),gsap.from(".scriptHead__inner > h2.title02",{x:-500,opacity:0,stagger:.8,duration:1,ease:"circ",scrollTrigger:{trigger:"#section15 .bgImg",start:"top top",end:"bottom bottom",markers:!1}}),document.querySelectorAll(".hoverItem").forEach(i=>{const r=gsap.timeline({paused:!0});r.to(i,{duration:.5,opacity:0}),i.animation=r,i.addEventListener("mouseenter",function(){this.animation.play()})}),console.clear(),gsap.utils.toArray(".cardCont").forEach(function(i){gsap.set(i,{transformStyle:"preserve-3d",transformPerspective:1e3});const r=gsap.utils.selector(i),a=r(".cardFront"),e=r(".cardBack");gsap.set(e,{rotationY:-180});const o=gsap.timeline({paused:!0}).to(a,{duration:1,rotationY:180}).to(e,{duration:1,rotationY:0},0).to(i,{z:50},0).to(i,{z:0},.5);i.addEventListener("mouseenter",function(){o.play()}),i.addEventListener("mouseleave",function(){o.reverse()})})});setTimeout(()=>{gsap.from(".move__bg .moveBg03 img",{y:-300,duration:.5,opacity:0,ease:"elastic",scrollTrigger:{trigger:"#section16",start:"top top",end:"bottom bottom",markers:!1,scrub:1}}),gsap.from(".move__bg .moveBg03 h2",{y:100,duration:.5,opacity:0,ease:"elastic",scrollTrigger:{trigger:"#section16",start:"top top",end:"bottom bottom",markers:!1,scrub:1}}),gsap.from(".move__bg .moveBg01 img",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".move__bg .moveBg01",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}}),gsap.from(".move__bg .moveBg02 img",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".move__bg .moveBg02",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}}),gsap.from(".move__bg .moveBg04 img",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".move__bg .moveBg04",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}}),gsap.from(".move__bg .moveBg05 img",{rotate:360,duration:1,scale:0,ease:"circ",scrollTrigger:{trigger:".move__bg .moveBg05",start:"top 80%",end:"bottom bottom",markers:!1,scrub:1}})});setTimeout(()=>{const t=r=>{gsap.set(r,{autoAlpha:0})},i=r=>{let a=0,e=0,o=r.dataset.delay;r.classList.contains("reveal_LTR")?(a=-100,e=0):r.classList.contains("reveal_BTT")?(a=0,e=200):r.classList.contains("reveal_TTB")?(a=0,e=-100):(a=100,e=0),gsap.fromTo(r,{autoAlpha:0,x:a,y:e},{autoAlpha:1,x:0,y:0,delay:o,duration:1.25,overwrite:"auto",ease:"expo"})};gsap.utils.toArray(".reveal").forEach(r=>{t(r),ScrollTrigger.create({trigger:r,start:"top bottom",end:"bottom top",markers:!1,onEnter:()=>{i(r)}})})});document.querySelectorAll(".button").forEach(t=>{let i=document.createElement("div"),r=t.textContent.trim().split("");function a(e,o,s){let n=document.createElement("span"),_=o>=s.length/2?-1:1,d=o>=s.length/2?s.length/2-o+(s.length/2-1):o,g=d/(s.length/2),f=1-g;n.innerHTML=e.trim()?e:"&nbsp;",n.style.setProperty("--move",g),n.style.setProperty("--rotate",f),n.style.setProperty("--part",_),i.appendChild(n)}r.forEach(a),t.innerHTML=i.outerHTML,t.addEventListener("mouseenter",e=>{t.classList.contains("out")||t.classList.add("in")}),t.addEventListener("mouseleave",e=>{t.classList.contains("in")&&(t.classList.add("out"),setTimeout(()=>t.classList.remove("in","out"),950))})});
