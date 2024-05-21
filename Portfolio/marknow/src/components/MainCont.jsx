import IntroSect from "./IntroSect";
import About from "./About";
import Pals from "./Pals";
import Services from "./Services";
import Reach from "./Reach";

const MainCont = () => {
  return (
    <main>
      <div>
        <IntroSect />
        <About />
        <Pals />
        <Services />
        <Reach />
      </div>
    </main>
  )
}

export default MainCont;