import gsap from "gsap";

const prevArrow = document.querySelector(".PrArrow");
const nextArrow = document.querySelector(".NeArrow");

const animationPrev = gsap.to(".PrArrow", {
  x: -5,
});

const animationNext = gsap.to(".NeArrow", {
  x: 5,
});

prevArrow.addEventListener("mouseover", () => animationPrev.play());

nextArrow.addEventListener("mouseover", () => animationNext.play());

