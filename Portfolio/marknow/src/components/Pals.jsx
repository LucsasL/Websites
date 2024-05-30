// Importing States
import { useState } from "react";

// Importing Data
import { palsInfo, useEffect } from "../Utils/data";

// Importing Images
import arrowPrev from "../icons/back-arrow.svg";
import arrowNext from "../icons/front-arrow.svg";
// import faceDuck from "../img/faceduck.png";
import poogle from "../img/poogle.webp";
import rabbit from "../img/rabbit.webp";
import youDude from "../img/YouDude.png";

const Pals = () => {
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState("$secondary");
  const [prevArrOpacity, setPrevArrOpacity] = useState(1);
  const [nextArrOpacity, setNextArrOpacity] = useState(1);

  const scrollMsg = (arr) => {
    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
      
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }

    changeColor(position);
  }

  const arrOpacity = () => {
    if (position === 0) {
      setPrevArrOpacity(0.3);
    } else {
      setPrevArrOpacity(1);
    }

    if (position === -300) {
      setNextArrOpacity(0.3);
    } else {
      setNextArrOpacity(1);
    }
  }

  const changeColor = (msg) => {
    switch (msg) {
      case 0:
        setColor("$secondary");
        return;

      case -100:
        setColor("$third");
        return;

      case -200:
        setColor("$fourth");
        return;

      case -300:
        setColor("$fifth");
        return;

      default:
        return;
    }
  }
 
  return (
    <>
      <section id="pals">
        <div>
          <div
            className="arrowsNav"
            onClick={() => scrollMsg("Prev")}
            onLoad={() => arrOpacity()}
            style={{ opacity: prevArrOpacity }}
          >
            <picture>
              <img
                src={arrowPrev}
                alt="Previous Testimonial"
                className="PrArrow"
              />
            </picture>
          </div>

          <div
            className="arrowsNav"
            onClick={() => scrollMsg("Next")}
            onLoad={() => arrOpacity()}
            style={{ opacity: nextArrOpacity }}
          >
            <picture>
              <img src={arrowNext} alt="Next Testimonial" className="NeArrow" />
            </picture>
          </div>

          <h1 style={{ color: color }}>OUR CLIENTS APPROVE</h1>

          <div
            className="msg"
            style={{
              left: position + "%",
            }}
          >
            {palsInfo.map(({ author, quote, ceo }) => {
              return (
                <div className="palsInfo" key={Math.floor(Math.random() * 100)}>
                  <p>{quote}</p>
                  <h2 style={{ color: color }}>
                    {author} <br />
                    <span>CEO OF {ceo}</span>
                  </h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="palsComp" style={{ background: color }}>
          <div>
            <picture>
              <img src={poogle} alt="Poogle" />
            </picture>
          </div>

          <div>
            <picture>
              <img src="../src/img/coffee.jpg" alt="Faceduck" />
            </picture>
          </div>

          <div>
            <picture>
              <img src={rabbit} alt="Rabbit" />
            </picture>
          </div>

          <div>
            <picture>
              <img src={youDude} alt="YouCook" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pals;