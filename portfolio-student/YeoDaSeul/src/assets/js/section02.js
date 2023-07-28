gsap.set('.sec02__sticker .s1', { autoAlpha: 0, scale: 1, rotate: 360 }); // 파란색 텍스트 이미지

setTimeout(() => {
  let tl = gsap.timeline();
  tl.to('.sec02__sticker .s1', { autoAlpha: 1, scale: 1, rotate: 0, ease: Power3.easeInOut });
}, 3000);

// 파란색 텍스트 이미지
gsap.to('.sec02__sticker .s1', {
  scale: 1,
  rotate: 180,
  duration: 0.1,
  ease: 'none',
  scrollTrigger: {
    trigger: '#section02',
    start: 'top 90%',
    end: 'center 10%',
    scrub: 1,
    markers: false,
  },
});

// 스마일 이미지
gsap.to('.sec02__sticker .s2', {
  opacity: 0,
  scale: 0.5,
  rotate: 180,
  duration: 0.1,
  ease: 'none',
  scrollTrigger: {
    opacity: 1,
    trigger: '#section02',
    start: 'top 90%',
    end: 'center 10%',
    scrub: 1,
    // markers: true,
  },
});

// 텍스트 올라오는 애니메이션
let typeSplit = new SplitType('.sec02__text > div', {
  types: 'lines, words, chars',
  tagName: 'span',
});

gsap.from('.sec02__text > div .word', {
  y: '110%',
  opacity: 0,
  rotationZ: '10',
  duration: 0.8,
  ease: 'circ.out',
  stagger: 0.1,

  scrollTrigger: {
    trigger: '.sec02__text',
    start: 'top center',
    end: '+=400',
    // markers: true,
    scrub: 1,
    opacity: 1,
  },
});

// 사진 돌아가는 애니메이션
gsap.to('.sec02__image .i1', {
  scale: 1,
  rotate: 360,
  duration: 0.5,
  ease: 'none',
  scrollTrigger: {
    trigger: '#section02',
    start: 'top 90%',
    end: 'bottom 10%',
    scrub: 1,
    markers: false,
  },
});
// 사진 텍스트 돌아가는 애니메이션
gsap.to('.sec02__image .i2', {
  scale: 1,
  rotate: -350,
  duration: 0.5,
  ease: 'none',
  scrollTrigger: {
    trigger: '#section02',
    start: 'top 90%',
    end: 'bottom 10%',
    scrub: 1,
    // markers: true,
  },
});
