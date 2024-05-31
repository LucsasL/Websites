function Cases() {
  return (
    <>
      <section id="cases">
        <div class="cont">
          <h1 class="bolder title center">CASE STUDY</h1>

          <div class="two-columns">
            <div>
              <h2 class="title">Poodle Case</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur a laudantium voluptatum maiores quisquam iure neque
                dolorem voluptates eligendi nisi! Impedit, nemo! Esse qui
                laboriosam voluptate debitis mollitia. Minima, temporibus?
              </p>
            </div>

            <div>
              <div class="window">
                <div class="bar-window"></div>
              </div>
            </div>
          </div>

          <div class="two-columns" style={{ display: "flex", order: "2" }}>
            <div style={{ order: "2" }}>
              <h2 class="title">Poodle Case</h2>

              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Consectetur a laudantium voluptatum maiores quisquam iure neque
                dolorem voluptates eligendi nisi! Impedit, nemo! Esse qui
                laboriosam voluptate debitis mollitia. Minima, temporibus?
              </p>
            </div>

            <div>
              <div class="window" style={{ boxShadow: "-10px 10px black" }}>
                <div class="bar-window"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cases;