// Hooks Import
import { useState, useRef } from "react";

// Imgs Import
import googleAds from "../../../img/googleAds.webp";
import metaAds from "../../../img/metaAds.webp";

function Join() {
  const [windowIntersect, setWindowIntersect] = useState(false);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setWindowIntersect(true);
      }
    })
  })

  return (
    <>
      <section id="join">
        <div>
          <h1>JOIN US</h1>

          <div className="joinContent">
            <div className="adsImg">
              <picture>
                <source media="(min-width: )" srcset="" />
                <figure>
                  <img
                    src={metaAds}
                    alt="Google Ads is a powerful ads software, allowing you to make ads all over the internet."
                  />
                  <figcaption>
                    Meta Ads is a powerful ads software, allowing you to make ads
                    all over the internet.
                  </figcaption>
                </figure>
              </picture>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In non
                itaque repellat aliquid exercitationem debitis vero rem. Voluptas
                iste tempora deleniti adipisci quos quaerat reiciendis culpa nam
                in, sapiente laboriosam.
              </p>
            </div>
            <div className="adsImg">
              <picture>
                <source media="(min-width: )" srcset="" />
                <figure>
                  <img
                    src={googleAds}
                    alt="Google Ads is a powerful ads software, allowing you to make ads all over the internet."
                  />
                  <figcaption>
                    Google Ads is a powerful ads software, allowing you to make
                    ads all over the internet.
                  </figcaption>
                </figure>
              </picture>
            </div>
          </div>

          <div>
            <button>
              <a href="https://youtube.com">COME HERE</a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Join;