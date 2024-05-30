import earth from "../img/earth.png";

function rotateText() {
  const text = document.querySelector(".txt");

  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform: rotate(${i * 11.6129}deg);">${char}</span>`
    )
    .join("");
}

const Reach = () => {
  return (
    <>
      <section id="reach">
        <div className="ceo"></div>

        <div className="earth">
          <picture>
            <p className="txt" onLoad={() => rotateText()}>
              REACHING. CONVERSION. RELATION.
            </p>
            <img src={earth} alt="Earth" style={{ transform: "scale(1.01)" }} />
          </picture>
        </div>
      </section>
    </>
  );
}

export default Reach;