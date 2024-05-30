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
              <a href="https://youtube.com">Learn More</a>
            </button>
            <button className="secondary">
              <a href="https://youtube.com">
                <span>SEE TEAM</span> 
                <FaArrowRight className="buttArrow" />
              </a>
            </button>
          </div>
        </div>

        <div className="imgDiv">
          <picture>
            <img src="" alt="" />
          </picture>
        </div>
      </section>
    </>
  );
};

export default IntroSect;
