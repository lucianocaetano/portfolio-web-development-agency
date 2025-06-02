'use client'

import React from "react";
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { MonitorSmartphone, Wrench, Bot, Repeat } from "lucide-react";

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
  const router = useRouter()

  return (
    <>
      <div className="grid grid-rows-2 grid-cols-2 gap-4 p-4 justify-center">
        {
          cards.map((card, index) => {
            return (
              <Card key={index} className="flex flex-col gap-3 p-4 border-none shadow-none bg-[#f0f0f0] items-center">
                <div className="flex justify-center items-center h-16 w-full border-b-2 border-foreground pb-2">
                  <card.icon className="size-12" />
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <p className="text-[#0e141b] text-lg font-medium">{card.title}</p>
                  <p className="text-[#4e7397] text-sm font-normal leading-normal">{card.description}</p>
                </div>
              </Card>
            );
          })
        }
      </div>
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-4">
            <h1
              className="tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
            >
              Our Services
            </h1>
            <p className="text-base font-normal leading-normal max-w-[720px]">We offer a range of services to help you with your software development needs.</p>
          </div>
          <Button
            className="rounded-full p-6 mt-5"
            onClick={() => router.push('/services')}
          >
            <span className="truncate">Learn More</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default OurServices
