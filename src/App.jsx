import { About } from "./components/About"
import { Articles } from "./components/Articles"
import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Proyects } from "./components/Proyects"
import { Testimonials } from "./components/Testimonials"


export const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Proyects />
      <Articles />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
