const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("longShadow");

    } else {
      entry.target.classList.remove("longShadow");
    }
  })
})

const block3d = document.querySelectorAll(".block3d");

block3d.forEach((el) => observer.observe(el));