import Iframe from "react-iframe";

import "../../../styles/index.css";

const Services = () => {
  return (
    <>
      <section id="services">
        <h1>IT'S THE WAY WE DO OUR JOB</h1>

        <div>
          <div className="services">
            <h2>MAKE IT HAPPEN</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              dolorum quae fuga perspiciatis, necessitatibus reiciendis hic ex
              praesentium architecto sed soluta sunt temporibus doloribus nulla
              minima eius? Perspiciatis, optio voluptatum.
            </p>

            <button className="primary" target="servIframe">
              <a href="../../iframes/build.jsx" target="servIframe">
                Learn More
              </a>
            </button>
          </div>

          <div className="services">
            <h2>GOOD SIGHT IS ALWAYS NEEDED</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              dolorum quae fuga perspiciatis, necessitatibus reiciendis hic ex
              praesentium architecto sed soluta sunt temporibus doloribus nulla
              minima eius? Perspiciatis, optio voluptatum.
            </p>

            <button className="primary" target="servIframe">
              <a href="../../iframes/persuade.jsx" target="servIframe">
                Learn More
              </a>
            </button>
          </div>

          <div className="services">
            <h2>IMPRESSION THAT CONVERTS</h2>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
              dolorum quae fuga perspiciatis, necessitatibus reiciendis hic ex
              praesentium architecto sed soluta sunt temporibus doloribus nulla
              minima eius? Perspiciatis, optio voluptatum.
            </p>

            <button className="primary" target="servIframe">
              <a href="../../iframes/convert.jsx" target="servIframe">
                Learn More
              </a>
            </button>
          </div>
        </div>

        <Iframe 
          className="servDiv" 
          name="servIframe" 
          title="Services"
        ></Iframe>
      </section>
    </>
  );
}

export default Services;