import Banner from "./components/banner"
import WhoWeAre from "./components/who-we-are"
import SolutionsSection from "./components/solutions_section"
import OurMethodology from "./components/our-methodology"
import ContactSection from "./components/contact-section"

const About = () => {

  return (
    <>
      <div>
        <Banner />
        <SolutionsSection />
      </div>
      <WhoWeAre />
      <OurMethodology />
      <ContactSection />
    </>
  )
}

export default About
