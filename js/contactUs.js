const contact_time = new gsap.timeline({ onstart: circlesStart });

const contact_tween = gsap.fromTo(
  '.contact',
  { left: '-100%' },
  { left: '50%', top: '50%', transform: 'translate(-50%,-50%)', duration: 10 }
);

contact_time.add(contact_tween);

const contact_scene = new ScrollMagic.Scene({
  triggerElement: '.contact-container',
  duration: 900,
  triggerHook: 0,
})
  .setTween(contact_time)

  .setPin('.contact-container')
  .addTo(controller);
