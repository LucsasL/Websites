import poogle from "../../../img/poogle.webp";
import faceDuck from "../../../img/faceduckLogo.png";

function Cases() {
  return (
    <>
      <section id="cases">
        <div>
          <h1 className="bolder title center">CASE STUDY</h1>

          <div className="case">
            <div>
              <h2 className="title">Poodle Case</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur a laudantium voluptatum maiores quisquam iure neque
                dolorem voluptates eligendi nisi! Impedit, nemo! Esse qui
                laboriosam voluptate debitis mollitia. Minima, temporibus?
              </p>

              <button>
                <a href="http://youtube.com">Learn More</a>
              </button>
            </div>

            <div>
              <div className="window">
                <div className="bar"></div>

                <div>
                  <picture>
                    <figure>
                      <figcaption>Poogle Case</figcaption>
                      <img src={poogle} alt="Poogle Marketing Case" />
                    </figure>
                  </picture>
                </div>
              </div>
            </div>
          </div>

          <div className="case" style={{ display: "flex", order: "2" }}>
            <div style={{ order: "2" }}>
              <h2 className="title">Faceduck Case</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur a laudantium voluptatum maiores quisquam iure neque
                dolorem voluptates eligendi nisi! Impedit, nemo! Esse qui
                laboriosam voluptate debitis mollitia. Minima, temporibus?
              </p>
              
              <button>
                <a href="http://youtube.com">Learn More</a>
              </button>
            </div>

            <div>
              <div className="window">
                <div className="bar"></div>

                <div>
                  <picture>
                    <figure>
                      <figcaption>FaceDuck Case</figcaption>
                      <img src={faceDuck} alt="FaceDuck Marketing Case" />
                    </figure>
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cases;