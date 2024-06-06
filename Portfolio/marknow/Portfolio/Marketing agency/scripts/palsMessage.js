const msgCont = document.querySelector(".testimTxt");
const arrowBut = document.querySelectorAll(".arrow");
const pals = document.querySelector(".client-grid");
const title = document.querySelector("h2");

arrowBut[0].addEventListener("mousemove", () => {
  gsap.set("#arrowBack", {
    x: 0,
  });
  
  gsap.to("#arrowBack", {
    x: -20,
  });
});


arrowBut[1].addEventListener("mousemove", () => {
  gsap.set("#arrowForw", {
    x: 0,
  });

  gsap.to("#arrowForw", {
    x: 20
  });
});