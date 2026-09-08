import { Navbar, Footer } from "../components/layout";
import {
  Hero,
  Introduction,
  Services,
  FeaturedWork,
  Experience,
  TechEcosystem,
  About,
  HowWeWork,
  Contact,
} from "../components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Introduction />
        <Services />
        <FeaturedWork />
        {/* <Experience /> */}
        <TechEcosystem />
        <About />
        <HowWeWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
