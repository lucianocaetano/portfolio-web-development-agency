import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Cloud, Database, HeartPlus, Pen, Router, Wrench } from "lucide-react"

const solutions = [
  {
    icon: <Wrench />,
    name: 'Maintenance',
    content: 'We take care of your website, from updates to security patches and ongoing maintenance. We ensure that your website is always up-to-date and secure, so you can focus on growing your business.',
  },
  {
    icon: <Pen />,
    name: 'Frontend Development',
    content: 'We build custom web applications and portals using the latest technologies and frameworks, so your team can focus on building your business.',
  },
  {
    icon: <Cloud />,
    name: 'Deployment',
    content: 'We deploy your website on the most popular cloud platforms, so you can focus on growing your business.',
  },
  {
    icon: <Router />,
    name: 'Serverless',
    content: 'We build serverless applications using the latest technologies and frameworks, so you can focus on building your business.',
  },
  {
    icon: <Database />,
    name: 'Database Management',
    content: 'We manage your database, so you can focus on building your business.',
  },
  {
    icon: <HeartPlus />,
    name: 'Migration Support',
    content: 'We provide migration support for your database, so you can focus on building your business.',
  },
  {
    icon: <Check />,
    name: 'Documented APIs',
    content: 'We design and implement APIs that are easy to use and understand, so your team can integrate your website with other systems and services.',
  },

]

const SolutionsSection = () => {

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {
        solutions.map((item, index) => (
          <Card key={index} className="w-full rounded-sm">
            <CardHeader>
              <p className="mb-3">
                {item.icon}
              </p>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="mt-2">{item.content}</CardDescription>
            </CardHeader>
          </Card>
        ))
      }
    </div>
  )
}

export default SolutionsSection
