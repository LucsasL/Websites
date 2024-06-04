// Hooks Import
import { useState } from "react";

// Images
import arrowPrev from "../../../icons/back-arrow.svg";
import arrowNext from "../../../icons/front-arrow.svg";

import prof1 from "../../../img/professional-round.jpg";
import prof2 from "../../../img/professional-square.jpg";
import prof3 from "../../../img/professional-triangle.jpg";
import prof4 from "../../../img/Professional-pentagono.jpg";

// Importing Data
import { profInfo } from "../../../Utils/data";

const profs = [prof1, prof2, prof3, prof4];

function Top() {
  const [position, setPosition] = useState(150);
  const [profColor, setProfColor] = useState("#EF6F6C");
  const [profShape, setProfShape] = useState("50%");
  const [prevArrOpacity, setPrevArrOpacity] = useState("50%");
  const [nextArrOpacity, setNextArrOpacity] = useState("50%");

  const changeProf = (Arr) => {
    if (Arr === "Prev" && position < 150) {
      setPosition(position + 100);
    }
    
    if (Arr === "Next" && position > -150) {
      setPosition(position - 100);

    }

    changeProfStyle(position, Arr);
  }

  
  const changeProfStyle = (msg, arr) => {
    if (arr === "Next") {
      switch (msg - 100) {
        case 150:
          setProfColor("#EF6F6C");
          setProfShape("50%");
          return;
  
        case 50:
          setProfColor("#5AD2F4");
          setProfShape("20px");
          return;
          
        case -50:
          setProfColor("#7FB685");
          setProfShape("70%");
          return;
          
        case -150:
          setProfColor("#F9C976");
          setProfShape("20%");
          return;
          
        default:
          return;
      }
    }

    switch (msg + 100) {
      case 150:
        setProfColor("#EF6F6C");
        setProfShape("50%");
        return;

      case 50:
        setProfColor("#5AD2F4");
        setProfShape("20px");
        return;
        
      case -50:
        setProfColor("#7FB685");
        setProfShape("70%");
        return;
        
      case -150:
        setProfColor("#F9C976");
        setProfShape("20%");
        return;
        
      default:
        return;
    }
  }
  
          
  // const arrOpacity = () => {
  //   if (position === 150) {
  //     setPrevArrOpacity(0.3);
  //   } else {
  //     setPrevArrOpacity(1);
  //   }

  //   if (position === -150) {
  //     setNextArrOpacity(0.3);
  //   } else {
  //     setNextArrOpacity(1);
  //   }
  // };

  return (
    <>
      <section id="top">
        <div>
          <div
            className="arrowsNav"
            onClick={() => changeProf("Prev")}
            // onLoad={() => arrOpacity()}
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
            onClick={() => changeProf("Next")}
            // onLoad={() => arrOpacity()}
            style={{ opacity: nextArrOpacity }}
          >
            <picture>
              <img src={arrowNext} alt="Next Testimonial" className="NeArrow" />
            </picture>
          </div>

          <h1 style={{ color: profColor }}>
            Be in the top with the greatest
          </h1>

          <div className="profCont" style={{ left: (position + "%") }}>
          {
            profInfo.map(({ profName, quote, profFunction }, index) => {
              return (
                <div
                  className="profInfo"
                  key={index}
                  style={{ position: "relative", left: `${0}%` }}
                >
                  <div className="profDesc">
                    <p>
                      {quote}
                      {profName}
                      {profFunction}
                    </p>
                    <div className="buttonDiv">
                      <button onClick={() => setPosition(150)}></button>
                      <button onClick={() => setPosition(50)}></button>
                      <button onClick={() => setPosition(-50)}></button>
                      <button onClick={() => setPosition(-150)}></button>
                    </div>
                  </div>

                  <div
                    className="imgProf"
                    style={{
                      border: `15px solid ${profColor}`,
                      borderRadius: profShape,
                    }}
                  >
                    <picture>
                      <img src={profs[index]} alt="Professional" />
                    </picture>
                  </div>
                </div>
              );
              })
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Top;
