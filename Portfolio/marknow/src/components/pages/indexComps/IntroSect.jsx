// Hooks Import
import { NavLink } from "react-router-dom";

// Images
import introImg from "../../../img/introImg.jpg";

// Icons
import { FaArrowRight } from "react-icons/fa";

const IntroSect = () => {
  return (
    <>
      <section id="intro">
        <div className="introInfo">
          <h1>LOREM IPSULUM DOLORS</h1>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            consequuntur quae fuga non animi hic soluta laudantium neque.
            Recusandae, inventore voluptas rem facere corrupti repellendus vitae
            laudantium tempore veritatis magni.
          </p>

          <div>
            <button className="primary">
              <a href="#about">Learn More</a>
            </button>
            <button className="secondary">
              <NavLink to="/about">
                <span>SEE TEAM</span> 
                <FaArrowRight className="buttArrow" />
              </NavLink>
            </button>
          </div>
        </div>

        <div className="imgDiv">
          <picture>
            <img src={introImg} alt="Marketing Office" />
          </picture>
        </div>
      </section>
    </>
  );
};

export default IntroSect;
