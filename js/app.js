const controller = new ScrollMagic.Controller();
// const t1 = gsap
//   .timeline()
//   .fromTo('.logo', { x: 0, scale: 100 }, { x: '50%', scale: 2, duration: 3 });

//timelines ***************
const t2 = new gsap.timeline((id = 1));
console.log(window.innerWidth);
// t2.duration(30);
/*****time lines-end */
let windowWidth = window.innerWidth;
window.addEventListener('resize', () => {
  windowWidth = window.innerWidth;
});

/*****animation tweens  */
const tween = gsap.fromTo(
  '.logo',
  {
    scale: () => {
      console.log(windowWidth);
      return windowWidth > 756 ? 20 : 3;
    },
    rotation: 0,
  },
  {
    scale: () => (windowWidth > 756 ? 3 : 2),
    duration: 10,
    ease: 'easeInOut',
    rotation: 90,
  }
);

const tween2 = gsap.to(
  '.logo',

  {
    left: () => (windowWidth > 756 ? 400 : 0),
    top: () => (windowWidth > 756 ? '50%' : '-100%'),
    transform: 'translate(-50%,-50%%)',
    scale: 3,
    duration: 10,
    rotation: 0,
  },

  '>'
);
const txt1 = document.getElementById('txt-span');
const tween3 = gsap.fromTo(
  '.txt-anim',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    fontSize: () => (windowWidth > 756 ? '60px' : '40px'),
    display: 'block',
    bottom: '30%',
    scale: () => (windowWidth > 756 ? 2 : 1),

    duration: 10,
  },
  '>'
);

const tween4 = gsap.fromTo(
  '.txt-anim2',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    bottom: '40%',
    duration: 10,
    fontSize: () => (windowWidth > 756 ? '60px' : '40px'),
  },
  '>'
);

const tween5 = gsap.fromTo(
  '.txt-anim3',
  { opacity: 0 },
  {
    bottom: '10%',
    opacity: 1,
    fontSize: () => (windowWidth > 756 ? '60px' : '40px'),

    duration: 10,
    zIndex: 2,
  },
  '>'
);

/********animation -tweens -end  */
t2.add(tween);
t2.add(tween2);
t2.add(tween3);
t2.add(tween4);
t2.add(tween5);
const scene = new ScrollMagic.Scene({
  triggerElement: '.logosec',
  duration: 5000,
  triggerHook: 0,
  offset: 50,
  endOffset: 50,
})
  .setTween(t2)
  .addIndicators()
  .setPin('.logosec')
  .addTo(controller);
