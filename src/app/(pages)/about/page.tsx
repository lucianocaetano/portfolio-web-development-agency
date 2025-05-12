import Banner from "./components/banner"
import WhoWeAre from "./components/who-we-are"
import SolutionsSection from "./components/solutions_section"
import OurMethodology from "./components/our-methodology"

const About = () => {

  return (
    <div className="mb-8">
      <div className="layout-container flex h-full grow flex-col">
        <div className="lg:px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 space-y-11">
            <div>
              <Banner/> 
              <SolutionsSection/>
            </div>
            <WhoWeAre/>
            <OurMethodology/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
