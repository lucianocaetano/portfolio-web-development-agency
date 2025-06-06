'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Section, SectionTitle } from "@/components/section";
import { TabletSmartphone, Server, PenLine, Palette, ShoppingCart, DollarSign } from "lucide-react";

type Service = {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const serviceSections = [
  {
    name: 'Web & Mobile Development',
    services: [
      { name: 'Responsive Websites', description: 'Websites that look great and work smoothly on any device, from phones to desktops.', icon: <TabletSmartphone size={30} /> },
      { name: 'Mobile App Development', description: 'Custom mobile apps for iOS and Android to help your business reach more customers.', icon: <TabletSmartphone size={30} /> },
      { name: 'Custom Features', description: 'We build the unique tools and features your business needs to stand out online.', icon: <Server size={30} /> },
      { name: 'Fast-Loading Pages', description: 'Web pages that open quickly and provide a seamless experience for your visitors.', icon: <Server size={30} /> },
    ],
  },
  {
    name: 'UI/UX',
    services: [
      { name: 'User-Friendly Design', description: 'We design with your customers in mind, making everything simple and enjoyable to use.', icon: <PenLine size={30} /> },
      { name: 'Interactive Previews', description: 'See and test your website design before it goes live.', icon: <Palette size={30} /> },
      { name: 'Consistent Branding', description: 'We ensure your brand looks and feels the same everywhere online.', icon: <Palette size={30} /> },
      { name: 'Experience Reviews', description: `We check your website to make sure it's easy and pleasant for everyone.`, icon: <PenLine size={30} /> },
    ],
  },
  {
    name: 'eCommerce',
    services: [
      { name: 'Online Stores', description: 'Custom online shops built for your business needs.', icon: <ShoppingCart size={30} /> },
      { name: 'Easy & Secure Payments', description: 'We set up safe and simple payment options for your customers.', icon: <DollarSign size={30} /> },
      { name: 'Order Tracking', description: 'Let your customers track their orders with ease.', icon: <Server size={30} /> },
      { name: 'Product Management', description: 'Easily add, update, or remove products from your store.', icon: <ShoppingCart size={30} /> },
    ],
  }
];

const ServiceCard = ({ name, description, icon }: Service) => {
  return (
    <Card>
      <CardHeader>
        {icon}
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        {description}
      </CardContent>
    </Card>
  )
}

const Services = () => {
  return (
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      {serviceSections.map((section) => (
        <div key={section.name} className="my-16">
          <h2 className="text-3xl my-4">{section.name}</h2>
          <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
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
