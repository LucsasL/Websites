import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div>
          <div>
            <h1>MARKNOW</h1>
          </div>

          <div>
            <ul>
              <li>
                <NavLink to="/">HOME</NavLink>
              </li>

              <li>
                <NavLink to="/about">ABOUT US</NavLink>
              </li>

              <li>
                <a href="/#services">SERVICES</a>
              </li>

              <li>
                <NavLink to="/contact">CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;