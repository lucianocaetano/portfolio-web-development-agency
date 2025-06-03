import ContactSection from "./components/contact-section";
import Banner from "./components/banner";
import OurMethodology from "./components/our-methodology";
import WhoWeAre from "./components/who-we-are";
import OurServices from "./components/our-services";

export default function Home() {
  return (
    <>
      <Banner />
      <WhoWeAre />
      <OurServices />
      <OurMethodology />
      <ContactSection />
    </>
  );
}
