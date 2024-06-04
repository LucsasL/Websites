// Importing Hooks
import { useState, useEffect, useRef } from "react";
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
  // const [prevArrOpacity, setPrevArrOpacity] = useState(1);
  // const [nextArrOpacity, setNextArrOpacity] = useState(1);

  const palsTitle = useRef(null);
  const palsCompCont = useRef(null);

  useGSAP(() => {
    gsap.to(".PrArrow", {
      x: -5,
    });

    gsap.to(".NeArrow", {
      x: 5,
    });
  });

  useEffect(() => {
    palsTitle.current.style.color = {color};
    palsCompCont.current.style.background = {color};
    console.log(`Text color changed to: ${color}`);
    console.log(`Background color changed to: ${color}`);
  });

  const scrollMsg = (arr) => {
    if (arr === "Prev" && position < 0) {
      setPosition(position + 100);
    } else if (arr === "Next" && position > -300) {
      setPosition(position - 100);
    }

    if (arr === "Next") {
      switch (position - 100) {
        case 0:
          setColor("#EF6F6C");
          return;
  
        case -100:
          setColor("#5AD2F4");
          return;
          
        case -200:
          setColor("#7FB685");
          return;
  
        case -300:
          setColor("#F9C976");
          return;
  
        default:
          return;
      }
    }

    switch (position + 100) {
      case 0:
        setColor("#EF6F6C");
        return;

      case -100:
        setColor("#5AD2F4");
        return;
        
      case -200:
        setColor("#7FB685");
        return;

      case -300:
        setColor("#F9C976");
        return;

      default:
        return;
    }
  };

  // const arrOpacity = () => {
  //   if (position === 0) {
  //     console.log(position);
  //     setPrevArrOpacity(0.3);
  //   } else {
  //     console.log(position);
  //     setPrevArrOpacity(1);
  //   }
    
  //   if (position === -300) {
  //     console.log(position);
  //     setNextArrOpacity(0.3);
  //   } else {
  //     console.log(position);
  //     setNextArrOpacity(1);
  //   }
  // };

  return (
    <>
      <section id="pals">
        <div>
          <div
            className="arrowsNav"
            onClick={() => scrollMsg("Prev")}
            // onLoad={() => arrOpacity()}
            // style={{ opacity: prevArrOpacity }}
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
            // onLoad={() => arrOpacity()}
            // style={{ opacity: nextArrOpacity }}
          >
            <picture>
              <img src={arrowNext} alt="Next Testimonial" className="NeArrow" />
            </picture>
          </div>

          <h1 style={{ color: color }} ref={palsTitle}>OUR CLIENTS APPROVE</h1>

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

        <div className="palsComp" style={{ background: color }} ref={palsCompCont}>
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
