import Home from "./routes/Home.jsx";
import About from "./routes/About.jsx";
// import Projects from "./routes/Pprojects.jsx";
import Contacts from "./routes/Contacts.jsx";
import { Element } from "react-scroll";
import Navbar from "./components/NavBar/navbar.js";
import Pprojects from "./routes/Pprojects.jsx";

// import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/About" element={<About />} />
    //     <Route path="/Projects" element={<Projects />} />
    //     <Route path="/contact" element={<Contacts />} />
    //   </Routes>
    // </BrowserRouter>

<div>
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Pprojects />
      </Element>
      <Element name="contact">
        <Contacts />
      </Element>
    </div>
  );
}

export default App;
