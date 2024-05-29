import { useState } from "react";
import { palsInfo } from "../Utils/data";

import arrowPrev from "../icons/back-arrow.svg";
import arrowNext from "../icons/front-arrow.svg";

import poogle from "../img/poogle.webp";
// import faceDuck from "../img/faceduck.png";
import rabbit from "../img/rabbit.webp";
import youDude from "../img/YouDude.png";

const Pals = () => {
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState("$secondary");

  const scrollMsg = (arr) => {
    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
      
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }

    changeColor(position);
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
          <div className="arrowsNav" onClick={() => scrollMsg("Prev")}>
            <picture>
              <img src={arrowPrev} alt="Previous Testimonial" />
            </picture>
          </div>

          <div className="arrowsNav" onClick={() => scrollMsg("Next")}>
            <picture>
              <img src={arrowNext} alt="Next Testimonial" />
            </picture>
          </div>

          <div
            className="msg"
            style={{
              left: position + "%",
            }}
          >
            {palsInfo.map(({ author, quote, ceo }) => {
              return (
                <div className="palsInfo" key={Math.floor(Math.random()) * 100}>
                  <h1 style={{ color: color }}>OUR CLIENTS APPROVE</h1>
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