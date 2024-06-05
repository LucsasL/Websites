import { NavLink } from "react-router-dom";
import { useState } from "react";

// Images
import sectWaves from "../img/waves.svg";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");

  return (
    <>
      <footer>
        <img src={sectWaves} alt="Waves" className="waves" />

        <div>
          <div>
            <h1>This is MARKDOWN</h1>

            <p>SIGN TO OUR NEWSLETTER:</p>

            <input
              type="text"
              id="inp"
              placeholder="Enter your email..."
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
            />
            <input
              type="submit"
              value=">"
              onClick={() =>
                alert(
                  `This is a fictitious company and all of this site is a project to my portfolio. - Lucsas
Project Link: https://github.com/LucsasL/MARKNOW`
                )
              }
            />
          </div>

          <div>
            <h2>QUICK LINKS:</h2>

            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>
              <li>
                <NavLink to="/#services">SERVICES</NavLink>
              </li>
              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h2>MY SOCIALS:</h2>

            <ul>
              <li>
                <a
                  href="https://www.instagram.com/lucsas.l/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @LUCSAS.L
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lucsasl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @LUCSASL
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/lucsas/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @LUCAS LIRA
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="credit">
          <p>THIS IS A FICTITIOUS COMPANY</p>
          <p>
            BUILT BY <a href="https://github.com/lucsasl">LUCSAS</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
