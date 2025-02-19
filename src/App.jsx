/**
 * @copyright 2024 Kamil Szczesiak
 * @license Apache-2.0
 */



/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";


const App = () =>{
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}


export default App;