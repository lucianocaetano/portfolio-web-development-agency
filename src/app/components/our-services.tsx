'use client'

import React from "react";
import { MonitorSmartphone, Wrench, Bot, Repeat } from "lucide-react";
import { Section, SectionTitle } from "@/components/section";

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
          cards.map((card, index) => {
            return (
              <div key={index} className="flex flex-col gap-3 p-4 border-none shadow-none bg-[#f0f0f0] items-center rounded-">
                <card.icon className="size-12" />
                <p className="text-[#0e141b] text-lg font-medium">{card.title}</p>
                <div className="text-center border-t-2 border-foreground pt-2 w-full">
                  <p className="text-[#306090] text-sm font-normal leading-normal">{card.description}</p>
                </div>
              </div>
            );
          })
        }
      </div>
    </Section>
  )
}

export default OurServices
