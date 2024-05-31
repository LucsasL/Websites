import IntroSect from "./indexComps/IntroSect";
import Showcase from "./indexComps/Showcase";
import About from "./indexComps/About";
import Pals from "./indexComps/Pals";
import Services from "./indexComps/Services";
import Reach from "./indexComps/Reach";
import Improve from "./indexComps/Improve";

function Home() {
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
  );
}

export default Home;
