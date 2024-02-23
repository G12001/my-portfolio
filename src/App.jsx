import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hire from "./components/Hire Me/Hire";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Hire />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
