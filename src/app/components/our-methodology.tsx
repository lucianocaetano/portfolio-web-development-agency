import { Section, SectionTitle } from "@/components/section"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card"

const OurMethodology = () => {
  return (
    <Section>
      <SectionTitle>Our methodology</SectionTitle>
      <div className="mt-8 grid md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Transparency in the process</CardTitle>
          </CardHeader>
          <CardContent>
            You&apos;ll have access to periodic progress reports.<br />
            You&apos;ll see work divided into stages: Pending, In Progress, Ready for Review, etc.<br />
            You work with prioritized tasks, focusing on what&apos;s most valuable to the business first.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Flexible prioritization</CardTitle>
          </CardHeader>
          <CardContent>
            You can change priorities if something important comes up, and you can adapt quickly.<br />
            You have a work system that responds to your business needs.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Responsibility and focus</CardTitle>
          </CardHeader>
          <CardContent>
            Every team member knows what they need to do.<br />
            There&apos;s no disorganization or loose tasks.
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export default OurMethodology
