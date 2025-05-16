import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const OurMethodology = () => {
  return (
    <div className="ps-4 space-y-11">
      <h2 className="text-4xl">Our methodology</h2>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle> Transparency in the process</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You&apos;ll have access to periodic progress reports. <br />
              You&apos;ll see work divided into stages: Pending, In Progress, Ready for Review, etc. <br />
              You work with prioritized tasks, focusing on what&apos;s most valuable to the business first.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle> Flexible prioritization</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              You can change priorities if something important comes up, and you can adapt quickly.
              <br />
              You have a work system that responds to your business needs.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-none">
          <CardHeader>
            <CardTitle> Responsibility and focus  </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Every team member knows what they need to do.
              <br />
              There&apos;s no disorganization or loose tasks.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default OurMethodology
