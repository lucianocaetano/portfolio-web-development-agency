import Banner from "./components/banner"
import WhoWeAre from "./components/who-we-are"
import SolutionsSection from "./components/solutions_section"
import OurMethodology from "./components/our-methodology"

const About = () => {

  return (
    <>
      <div>
        <Banner />
        <SolutionsSection />
      </div>
      <WhoWeAre />
      <OurMethodology />
    </>
  )
}

export default About
