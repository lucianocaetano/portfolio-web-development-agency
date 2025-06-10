import { Section, SectionTitle } from "@/components/section"

const WhoWeAre = () => {

  return (
    <Section>
      <SectionTitle>Who we are</SectionTitle>
      <div className="mt-8">
        <p className="text-pretty text-lg">
          We are a company specialized in the development and comprehensive management of web pages and applications.
          Our goal is to provide efficient and customized digital solutions that help boost the online presence of companies and startups like yours.
        </p>
        <p className="mt-[2ch] text-pretty text-lg">
          We have a professional team with experience in UX/UI design, front-end and back-end development, and web maintenance.
          We focus on creating websites that not only look good, but also perform optimally on all devices, load quickly, and are results-oriented.
        </p>
      </div>
    </Section>
  )
}

export default WhoWeAre 
