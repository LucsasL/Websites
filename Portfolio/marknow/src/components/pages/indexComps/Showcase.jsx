// Importing Hooks
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import coffee from "../../../img/coffee.jpg";
import burger from "../../../img/burger.jpg";
import shoes from "../../../img/shoes.jpg";

const Showcase = () => {
  const mouseMoveCont = useRef(null);
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);

  useGSAP(() => {
    gsap.fromTo("span:nth-child(odd)",
    {
      x: -100
    },
    {
      x: 100,
    });

    gsap.fromTo(
      "span:nth-child(even)",
      {
        x: 100,
      },
      {
        x: -100,
      }
    );
  });

  return (
    <>
      <section id="showcase">
        <span>
          THE NEW WAY TO <br />
          MAKE ADVERTS
        </span>

        <span>
          HAS BECOME <br />
          THE MAIN TREND
        </span>

        <span>
          THE NEW WAY TO <br />
          MAKE ADVERTS
        </span>

        <span>
          HAS BECOME <br />
          THE MAIN TREND
        </span>

        <div className="window big">
          <div className="bar">X</div>

          <div className="content">
            <picture>
              <img src={burger} alt="Coffee" ref={img1} />
            </picture>
          </div>
        </div>

        <div className="window small1">
          <div className="bar">X</div>

          <div className="content">
            <picture>
              <img src={shoes} alt="Burger" ref={img2} />
            </picture>
          </div>
        </div>

        <div className="window small2">
          <div className="bar">X</div>

          <div className="content">
            <picture>
              <img src={coffee} alt="Coffee" ref={img3} />
            </picture>
          </div>
        </div>

        {/* <div className="mouse" ref={mouseMoveCont}></div> */}
      </section>
    </>
  );
}

export default Showcase;