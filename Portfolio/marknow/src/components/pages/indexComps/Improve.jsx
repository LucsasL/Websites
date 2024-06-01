import sectWaves from "../../../img/waves.svg";

const Improve = () => {
  return (
    <>
      <section id="improve">
        <img src={sectWaves} alt="Waves" className="waves" />

        <div className="grid">
          <div>
            <h1>
              SELL LIKE A PRO
            </h1>
          </div>

          <div>
            <h2>
              BUY OUR BOOK
            </h2>

            <button className="primary">
              <a href="https://youtube.com">IMPROVE</a>
            </button>
          </div>

          <div>
            <h2>
              AHEAD OF <br />
              <span style={{ fontSize: "2.6em", marginTop: 0 }}>99%</span>
            </h2>
          </div>

          <div>
            <button className="primary">
              <a href="https://youtube.com">IMPROVE</a>
            </button>

            <button className="primary">
              <a href="https://youtube.com">IMPROVE</a>
            </button>

            <button className="primary">
              <a href="https://youtube.com">IMPROVE</a>
            </button>

            <button className="primary">
              <a href="https://youtube.com">IMPROVE</a>
            </button>

          </div>
        </div>
      </section>
    </>
  )
}

export default Improve