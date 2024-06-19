import Switcher from "./DarkMode/Swicher";
import About from "./components/About/About2";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience2";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header2";
import Hire from "./components/Hire Me/Hire";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="dark:bg-gray-900 w-[100vw]">
      <Switcher />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Hire />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
