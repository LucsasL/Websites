import IntroSectAbout from "./aboutComps/IntroSectAbout";
import Cases from "./aboutComps/Cases";
import Top from "./aboutComps/Top";
import Join from "./aboutComps/Join";

function About() {
  return (
    <>
      <main>
        <div>
          <IntroSectAbout />
          <Cases />
          <Top />
          <Join />
        </div>
      </main>
    </>
  )
}

export default About;