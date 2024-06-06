const boxElement = document.querySelectorAll(".block3d");

for (let i = 0; i < 16; i++) {
  boxElement[0].style.boxShadow += `-${i}px ${i}px black`;
}