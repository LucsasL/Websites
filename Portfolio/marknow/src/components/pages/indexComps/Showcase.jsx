// Importing Hooks
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import coffee from "../../../img/coffee.jpg";
import burger from "../../../img/burger.jpg";
import shoes from "../../../img/shoes.jpg";

const Showcase = () => {
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
              <img src={burger} alt="Coffee" />
            </picture>
          </div>
        </div>

        <div className="window small1">
          <div className="bar">X</div>

          <div className="content">
            <picture>
              <img src={shoes} alt="Burger" />
            </picture>
          </div>
        </div>

        <div className="window small2">
          <div className="bar">X</div>

          <div className="content">
            <picture>
              <img src={coffee} alt="Coffee" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;