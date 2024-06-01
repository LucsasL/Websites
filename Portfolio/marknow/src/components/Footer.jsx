import sectWaves from "../img/waves.svg";
import { useState } from "react";

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
            <input type="submit" value="→" />
          </div>

          <div>
            <h2>QUICK LINKS:</h2>

            <ul>
              <li>
                <a href="index.html">HOME</a>
              </li>
              <li>
                <a href="about.html">ABOUT US</a>
              </li>
              <li>
                <a href="#services">SERVICES</a>
              </li>
              <li>
                <a href="contact.html">CONTACT</a>
              </li>
            </ul>
          </div>

          <div>
            <h2>MY SOCIALS:</h2>

            <ul>
              <li>
                <a href="https://instagram.com/">@LUCSAS.L</a>
              </li>
              <li>
                <a href="https://github.com/lucsasl">@LUCSASL</a>
              </li>
              <li>
                <a href="https://youtube.com">@LUCAS LIRA</a>
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
