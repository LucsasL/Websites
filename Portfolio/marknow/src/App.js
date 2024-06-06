// Hooks Import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useContext } from "react";

// Pages Import
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
