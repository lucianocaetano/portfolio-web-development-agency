import ContactSection from "./(pages)/about/components/contact-section";
import Banner from "./components/banner";
import OurMethodology from "./components/our-methodology";
import OurServices from "./components/our-services";
import SolutionsSection from "./components/solutions_section";
import WhoWeAre from "./components/who-we-are";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="w-full max-w-7xl mx-auto space-y-11">
        <SolutionsSection/>
        <OurServices />
        <WhoWeAre/>
        <OurMethodology/>
        <ContactSection/>
      </div>
    </>
  );
}
