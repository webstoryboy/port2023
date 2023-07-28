gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 2,
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// 로딩 화면 요소
var loadingElement = document.getElementById('loading');
var loadingTextElement = document.getElementById('loading-text');
// 페이지 로딩 시간을 측정하고 페이지 시작
window.addEventListener('load', measurePageLoadTime);
function measurePageLoadTime() {
  var loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
  // 로딩 화면 요소
  var loadingElement = document.getElementById('loading');
  var loadingTextElement = document.getElementById('loading-text');

  // 로딩 수치 업데이트

  var progress = 0;
  var increment = 100 / loadTime; // 로딩 시간에 따라 증가하는 진행률 계산
  var intervalId = setInterval(function () {
    progress += increment;
    loadingTextElement.textContent = Math.round(progress) + '%';
    if (progress >= 100) {
      clearInterval(intervalId);
      main.style.height = '100%';
      progress = 100; // 진행률(progress)을 100으로 제한
      loadingTextElement.textContent = Math.round(progress) + '%'; // 수치를 100%로 표시
      loadingElement.classList.add('hidden'); // 로딩 화면에 hidden 클래스 추가
      document.body.style.visibility = 'visible'; // 페이지 내용 보이기
      setTimeout(function () {
        loadingElement.style.display = 'none'; // 로딩 화면 숨기기
      }, 500); // 0.5초 후에 로딩 화면 요소 제거
      startPage(); // 페이지 실행 코드
    }
  });
}
function startPage() {
  const targets = gsap.utils.toArray('.split');
  let SplitClient = new SplitType(targets, { type: 'lines, words, chars' });

  gsap.set('#section01 .sec01__bgImg .bgImg01', { autoAlpha: 0, x: 50 });
  gsap.set('#section01 .sec01__bgImg .bgImg02', { autoAlpha: 0, x: -50 });

  gsap.set('#section01 .sec01__text .t1  .char', { autoAlpha: 0, y: 50 });
  gsap.set('#section01 .sec01__text .t2  .char', { autoAlpha: 0, y: 50 });
  gsap.set('#section01 .sec01__text .t3  .char', { autoAlpha: 0, y: 50 });
  gsap.set('#section01 .sec01__text .t4  .char', { autoAlpha: 0, y: 50 });
  // gsap.set('#section01 .sec1-bg', { autoAlpha: 0 });
  gsap.set('#section01 .sec01__image .i1', { autoAlpha: 0, yPercent: 100 });
  gsap.set('#section01 .sec01__image .i2', { autoAlpha: 0, top: 100 });
  gsap.set('#section01 .sec01__image .i3', { autoAlpha: 0, top: 100 });

  setTimeout(() => {
    let tl = gsap.timeline();
    tl.to(
      '#section01 .sec01__bgImg .bgImg01',
      { autoAlpha: 1, x: 0, duration: 0.3, stagger: 0.1, ease: Power3.easeInOut },
      'ee +=0.1',
    );
    tl.to(
      '#section01 .sec01__bgImg .bgImg02',
      { autoAlpha: 1, x: 0, duration: 0.3, ease: Power3.easeInOut },
      'ee +=0.1',
    );
    tl.to(
      '#section01 .sec01__text .t1 .char',
      { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
      '-=0.5',
    );
    tl.to(
      '#section01 .sec01__text .t2 .char',
      { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
      '-=0.5',
    );
    tl.to(
      '#section01 .sec01__text .t3 .char',
      { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
      '-=0.5',
    );
    tl.to(
      '#section01 .sec01__text .t4 .char',
      { duration: 0.5, autoAlpha: 1, stagger: { amount: 0.51, y: 0, from: 'random' } },
      '-=0.5',
    );
    //   tl.to('#section01 .sec1-bg', { autoAlpha: 1 });
    tl.to('#section01 .sec01__image .i1', { autoAlpha: 1, yPercent: 0, ease: 'bounce.out' });
    tl.to('#section01 .sec01__image .i2', { autoAlpha: 1, top: '20vw', ease: 'bounce.out' });
    tl.to('#section01 .sec01__image .i3', { autoAlpha: 1, top: '25vw', ease: 'bounce.out' });
  }, 2000);
}
