import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const projects = [
  {
    images: [
      '/outworkmanager/_002.png',
      '/outworkmanager/_003.png',
      '/outworkmanager/_004.png',
      '/outworkmanager/_005.png',
      '/outworkmanager/_006.png',
      '/outworkmanager/_007.png',
      '/outworkmanager/_008.png',
      '/outworkmanager/_009.png',
      '/outworkmanager/_010.png',
      '/outworkmanager/_011.png',
      '/outworkmanager/_012.png',
      '/outworkmanager/_013.png',
      '/outworkmanager/_014.png',
    ],
    name: 'Outwork Manager',
    content: "A system where you can manage the use of documents from outsourced services that help prevent lawsuits against work accidents from these outsourced services. The system is used by a preventionist and is capable of chatting with outsourced companies, managing data and documents from operators or outsourced employees, defining work schedules, and the system includes an application for a security guard.",
  },
  {
    name: "Order management",
    content: "A web application for a home delivery company, including a blog and online sales system, as well as a contact section.",
    images: [
      "/landing_page_package_django/image 1.png",
      "/landing_page_package_django/image 2.png",
      "/landing_page_package_django/image 3.png",
      "/landing_page_package_django/image 4.png",
    ]
  },
  {
    name: 'LanzamientosEspaciales\' website',
    content: "Development and update of the website for 'LanzamientosEspaciales'. This project consisted of a partial redesign focused on improving the visual presentation and organization of content (upcoming launches, recent videos), along with a complete migration from HTML to Astro to improve loading speed, maintainability, and offer a smoother browsing experience.",
    images: [
      '/spacial_web/santif project.png',
    ]
  }
]

const Examples = () => {

  return (
    <div className="mb-8">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center">
          <div className="layout-content-container flex-col max-w-7xl px-4">
            {
              projects.map((project) => (
                <div key={project.name} className="space-y-8 my-11">
                  <div className="space-y-8 max-xl:flex-col-reverse xl:items-start items-center flex justify-between">
                    <div className="space-y-4 pt-2">
                      <h1 className="text-5xl font-serif">{project.name}</h1>
                      <p className="pe-8">
                        {project.content}
                      </p>
                    </div>
                    <div className="w-1/2">
                      {
                        project.images.length === 1 && (
                          <Image src={project.images[0]} alt={project.name} width={700} height={800} className="max-h-[700px] object-contain" />
                        )
                      }
                      {
                        project.images.length > 1 && (
                          <Carousel>
                            <CarouselContent>
                              {
                                project.images.map((image, index) => (
                                  <CarouselItem key={index} className="flex justify-center items-center">
                                    <Image src={image} alt={project.name + index} width={800} height={400} className="max-h-[400px] object-contain" />
                                  </CarouselItem>
                                ))
                              }
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                          </Carousel>
                        )
                      }
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Examples
