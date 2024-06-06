// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);

//     if (entry.isIntersecting) {
//       giant.to()
//     } else {
//       entry.target.classList.remove("longShadow");
//     }
//   });
// });

gsap.set(".window", {
  default: {
    duration: 3,
    ease: "ease-in-out",
  },
});

gsap.to(".window", {
  scale: 1,
})

gsap.to("#left1", {
  x: 800,
  duration: 5,
});

gsap.to("#left2", {
  x: 800,
  duration: 5,
});

gsap.to("#right1", {
  x: -800,
  duration: 5,
});

gsap.to("#right2", {
  x: -800,
  duration: 5,
});