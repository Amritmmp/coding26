document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(DrawSVGPlugin);

  gsap.set("#circle, #antenna, #text", { visibility: "visible" });

  let tl = gsap.timeline();

  tl.from("#antenna .cls-1", {
    duration: 1.5,
    drawSVG: 0,
  })

    .from("#circle .cls-1", {
      duration: 1.5,
      drawSVG: 0,
    })

    .from("#text .cls-1", {
      duration: 2,
      drawSVG: 0,
    });
});
