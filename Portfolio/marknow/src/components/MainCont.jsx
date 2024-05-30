import IntroSect from "./IntroSect";
import Showcase from "./Showcase";
import About from "./About";
import Pals from "./Pals";
import Services from "./Services";
import Reach from "./Reach";
import Improve from "./Improve"

const MainCont = () => {
  return (
    <main>
      <div>
        <IntroSect />
        <Showcase />
        <About />
        <Pals />
        <Services />
        <Reach />
        <Improve />
      </div>
    </main>
  )
}

export default MainCont;