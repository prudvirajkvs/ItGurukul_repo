const controller = new ScrollMagic.Controller();
// const t1 = gsap
//   .timeline()
//   .fromTo('.logo', { x: 0, scale: 100 }, { x: '50%', scale: 2, duration: 3 });

//timelines ***************
const t2 = new gsap.timeline((id = 1));
const t1 = new gsap.timeline();

// t2.duration(30);
/*****time lines-end */

/*****animation tweens  */
const tween = gsap.fromTo(
  '.logo',
  { scale: 20, rotation: 0 },
  { scale: 3, duration: 10, ease: 'easeInOut', rotation: 90 }
);

const tween2 = gsap.to(
  '.logo',

  { x: -350, duration: 10, rotation: 0 },
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
    display: 'block',
    bottom: '30%',

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
  },
  '>'
);

const tween5 = gsap.fromTo(
  '.txt-anim3',
  { opacity: 0 },
  { bottom: '10%', opacity: 1, duration: 10, zIndex: 2 },
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

  .setPin('.logosec')
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.circles',
});
