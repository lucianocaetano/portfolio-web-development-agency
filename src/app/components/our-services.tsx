'use client'

import React from "react";
import { MonitorSmartphone, Wrench, Bot, Repeat } from "lucide-react";
import { Section, SectionTitle } from "@/components/section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/card";

type CardType = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const cards: CardType[] = [
  {
    icon: MonitorSmartphone,
    title: "Web & Mobile Development",
    description: "We build modern, fast, and custom websites and mobile apps tailored to your business."
  },
  {
    icon: Wrench,
    title: "Application Maintenance",
    description: "We update, optimize, and support your existing systems to keep them running smoothly."
  },
  {
    icon: Bot,
    title: "Intelligent Chatbots",
    description: "Automate customer service and repetitive tasks with custom virtual assistants."
  },
  {
    icon: Repeat,
    title: "Process Automation",
    description: "We digitize and automate processes to save you time and reduce errors."
  }
];

const OurServices = () => {
  return (
    <Section>
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-rows-2 grid-cols-2 gap-4 justify-center mt-8">
        {
          cards.map((card, index) => (
            <Card key={index}>
              <CardHeader>
                <card.icon className="size-12" />
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {card.description}
              </CardContent>
            </Card>
          ))
        }
      </div>
    </Section>
  )
}

export default OurServices
