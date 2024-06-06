const text = document.querySelector(".txt");

text.innerHTML = text.innerText
  .split("")
  .map(
    (char, i) =>
      `<span style="transform: rotate(${(i * 11.61290)}deg);">${char}</span>`
  )
  .join("");