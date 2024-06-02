// Importing Hooks
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Importing Data
import { palsInfo } from "../../../Utils/data";

// Importing Images
import arrowPrev from "../../../icons/back-arrow.svg";
import arrowNext from "../../../icons/front-arrow.svg";
import faceDuck from "../../../img/faceduckLogo.png";
import poogle from "../../../img/poogle.webp";
import rabbit from "../../../img/rabbit.webp";
import youDude from "../../../img/YouDude.png";

const Pals = () => {
  const [position, setPosition] = useState(0);
  const [color, setColor] = useState("#EF6F6C");
  const [prevArrOpacity, setPrevArrOpacity] = useState(1);
  const [nextArrOpacity, setNextArrOpacity] = useState(1);

  useGSAP(() => {
    gsap.to(".PrArrow", {
      x: -5,
    });

    gsap.to(".NeArrow", {
      x: 5,
    });
  });

  const scrollMsg = (arr) => {
    switch (position) {
      case 0:
        setColor("#5AD2F4");
        break;

      case -100 && arr === "Prev":
        setColor("#EF6F6C");
        break;
        
      case -100 && arr === "Next":
        setColor("#7FB685");
        break;
        
      case -200 && arr === "Prev":
        setColor("#F9C976");
        break;

        case -200 && arr === "Next":
          setColor("#F9C976");
          break;

      case -300:
        setColor("#7FB685");
        break;

      default:
        break;
    }

    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }
  };

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
  };

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
              <img src={faceDuck} alt="Faceduck" />
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
};

export default Pals;
