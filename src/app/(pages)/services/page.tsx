'use client'

import { Section, SectionTitle } from "@/components/section";
import { BookOpen, TabletSmartphone, Server, Atom, PenLine, Palette, ShieldCheck, ShoppingCart, DollarSign, HardDriveUpload, Key, Database, DatabaseZap, ShieldAlert, ArrowUpToLine, Container, Github } from "lucide-react";

type Service = {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const serviceSections = [

  {
    name: 'Frontend',
    services: [
      { name: 'Responsive Interfaces', description: 'Designs that adapt smoothly across all devices.', icon: <TabletSmartphone size={30} /> },
      { name: 'Single Page Applications (SPA)', description: 'Dynamic, fast-loading applications using JavaScript frameworks.', icon: <BookOpen size={30} /> },
      { name: 'Integration with REST and GraphQL APIs', description: 'Connect frontend with real-time backend data.', icon: <Server size={30} /> },
      { name: 'Use of modern frameworks like React', description: 'Clean, maintainable UI with top-tier libraries.', icon: <Atom size={30} /> },
    ],
  },

  {
    name: 'UI/UX',
    services: [
      { name: 'User-centered Design', description: 'Designs tailored to user needs and behaviors.', icon: <PenLine size={30} /> },
      { name: 'Prototypes with Figma', description: 'Interactive design prototypes before development.', icon: <Palette size={30} /> },
      { name: 'Usability Audits', description: 'Evaluate and improve the overall user experience.', icon: <ShieldCheck size={30} /> },
    ],
  },
  /*{
    name: 'Mobile',
    services: [
      { name: 'Hybrid Apps with React Native' },
      { name: 'Mobile API Consumption' },
      { name: 'Publishing on App Store and Google Play' },
    ],
  },*/
  {
    name: 'eCommerce',
    services: [
      { name: 'Custom E-commerce Solutions', description: 'Tailored online store development to fit your business.', icon: <ShoppingCart size={30} /> },
      { name: 'Payment Gateway Integrations (PayPal, Stripe)', description: 'Secure and seamless payment processing.', icon: <DollarSign size={30} /> },
    ],
  },
  {
    name: 'Backend',
    services: [
      { name: 'Documented APIs', description: 'Well-structured APIs with OpenAPI/Swagger documentation.', icon: <HardDriveUpload size={30} /> },
      { name: 'JWT/OAuth Authentication', description: 'Secure user authentication and authorization mechanisms.', icon: <Key size={30} /> },
      { name: 'Database Integration', description: 'Seamless connections with SQL and NoSQL databases.', icon: <Database size={30} /> },
      { name: 'Development with Node.js, Laravel, and Spring Boot', description: 'Backend solutions built with modern frameworks.', icon: <DatabaseZap size={30} /> },
      { name: 'Automated API Testing', description: 'Ensure reliability with unit and integration tests.', icon: <ShieldAlert size={30} /> },
    ],
  },
  {
    name: 'DevOps',
    services: [
      { name: 'Continuous Deployment (CI/CD)', description: 'Automated build, test, and deployment pipelines.', icon: <ArrowUpToLine size={30} /> },
      { name: 'Application Dockerization', description: 'Container-based deployment for portability and scalability.', icon: <Container size={30} /> },
      { name: 'Automation with GitHub Actions', description: 'Custom workflows to streamline development.', icon: <Github size={30} /> },
      { name: 'Monitoring with tools like Prometheus or Grafana', description: 'Track performance and detect issues early.', icon: <PenLine size={30} /> },
    ],
  },
];


const ServiceCard = ({ name, description, icon }: Service) => {
  return (
    <li key={name} className="text-lg justify-between items-center p-8 shadow-sm h-full cursor-pointer">
      <div className="space-y-6">
        <div className="flex justify-center">{icon}</div>
        <h2 className="text-xl">{name}</h2>
      </div>
      <p className="ms-2 text-md text-gray-600">{description}</p>
    </li>
  )
}

const Services = () => {
  return (
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      {serviceSections.map((section) => (
        <div key={section.name} className="my-16">
          <h2 className="text-3xl my-4">{section.name}</h2>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {section.services.map((service) => (
              <ServiceCard key={service.name} {...service} />
            ))}
          </ul>
        </div>
      ))}
    </Section>
  )
}

export default Services
