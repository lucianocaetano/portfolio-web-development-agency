'use client'

import {Button} from "@/components/ui/button"
import {Card} from "@/components/ui/card";
import {useRouter} from "next/navigation";

const cards = [
  {
    image: "/our_services_section/serverles function.png",
    title: "Serverless Functions",
    description: "Deploy serverless functions to the cloud for scalable backend logic.",
    price: "$0.40 per million requests"
  },
  {
    image: "/our_services_section/graphql.png",
    title: "GraphQL API",
    description: "Create a custom GraphQL API for your website or web app.",
    price: "Free and open-source"
  },
  {
    image: "/our_services_section/tailwind.png",
    title: "Tailwind CSS",
    description: "Design beautiful user interfaces with the utility-first CSS framework.",
    price: "Rapidly prototype and iterate on designs"
  },
  {
    image: "/our_services_section/orms.png",
    title: "ORMs",
    description: "Access and modify data in your database using moderns ORMs.",
    price: "Type-safe database access for TypeScript, Node.js and Laravel"
  },
  {
    image: "/our_services_section/next 15.png",
    title: "Next.js",
    description: "Build fast, modern web applications with the React framework.",
    price: "The most popular framework for React"
  }
];

const OurServices = () => {
  const router = useRouter()

  return (
    <div className="mb-16">
      <div className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-4">
            <h1
              className="text-[#0e141b] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]"
            >
              Our Services
            </h1>
            <p className="text-[#0e141b] text-base font-normal leading-normal max-w-[720px]">We offer a range of services to help you with your web development needs.</p>
          </div>
          <Button
            className="rounded-full p-6 mt-5"
            onClick={() => router.push('/services')}
          >
            <span className="truncate">Learn More</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4">
        {
          cards.map((card, index) => (
            <Card key={index} className="flex flex-col gap-3 pb-3 border-none shadow-none">
              <div
                className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                style={{backgroundImage: `url("${card.image}")`}}
              ></div>
              <div>
                <p className="text-[#0e141b] text-base font-medium leading-normal">{card.title}</p>
                <p className="text-[#4e7397] text-sm font-normal leading-normal">{card.description}</p>
              </div>
            </Card>
          ))
        } 
      </div>
    </div>
  )
}

export default OurServices
