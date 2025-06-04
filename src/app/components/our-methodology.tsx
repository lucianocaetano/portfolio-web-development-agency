import { Section, SectionTitle } from "@/components/section"

const MethodologyCard = ({ title, content }: { title: string, content: string }) => {
  return (
    <div className="flex flex-col gap-3 p-4 border-none shadow-none bg-[#f0f0f0] items-center rounded-xl">
      <div className="text-center border-b-2 border-foreground pb-2 w-full">
        <p className="text-[#0e141b] text-lg font-medium">{title}</p>
      </div>
      <p className="text-[#306090] text-sm font-normal leading-normal">{content}</p>
    </div>
  )
}

const OurMethodology = () => {
  return (
    <Section>
      <SectionTitle>Our methodology</SectionTitle>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <MethodologyCard title={"Transparency in the process"}
          content={`You'll have access to periodic progress reports. 
                You'll see work divided into stages: Pending, In Progress, Ready for Review, etc.
                You work with prioritized tasks, focusing on what's most valuable to the business first.`} />
        <MethodologyCard title={"Flexible prioritization"}
          content={`You can change priorities if something important comes up, and you can adapt quickly.
                You have a work system that responds to your business needs.`} />
        <MethodologyCard title={"Responsibility and focus"}
          content={`Every team member knows what they need to do.
                There's no disorganization or loose tasks.`} />
      </div>
    </Section>
  )
}

export default OurMethodology
