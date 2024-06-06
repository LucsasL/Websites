const servButton = document.querySelectorAll("section#job .prim-button");
const iframeCont = document.querySelector("body");
const servBox = document.querySelectorAll(".block3d");

const iframe = document.createElement("iframe");

iframe.style.position = "fixed";
iframe.style.top = "0";
iframe.style.left = "0";
iframe.style.zIndex = "1";

iframe.style.background = "#EBBAB9";
iframe.width = "100%";
iframe.height = "100%";
iframe.name = "servTour";

for (let i = 0; i < 3; i++) {
  servButton[i].addEventListener("click", () => {
    servBox[i].style.position = "fixed";
    servBox[i].style.top = "0";
    servBox[i].style.left = "0";
    servBox[i].style.width = "100%";
    servBox[i].style.height = "100%";
    servBox[i].style.margin = "0";

    iframeCont.appendChild(iframe);
  })
}