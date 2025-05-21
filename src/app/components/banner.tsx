'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Banner = () => {
  const router = useRouter()
  return (
    <div>
      <div
        className="flex h-[600px] md:h-[750px] w-full max-w-[1500px] mx-auto flex-col gap-8 bg-cover bg-center bg-no-repeat items-center justify-center relative"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner.png")' }}
      >
        <div className="absolute bg-foreground/20 w-full h-full top-0 left-0 z-40"></div>
        <div className="absolute z-40">
          <div className="mb-8 space-y-4 flex-col text-center">
            <div>
              <h1
                className="text-background text-2xl leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Welcome to 
              </h1>
              <h1
                className="text-background text-4xl leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Percy Pocket Solutions
              </h1>
            </div>
            <p className="text-background text-md w-1/2 mx-auto">
              We&apos;re a digital agency that designs and develops custom websites, web apps, and APIs for companies of all sizes.
            </p>
          </div>
          <div className="flex gap-4 items-center justify-center">
            <Button
              className="rounded-full p-6"
              onClick={() => router.push('/contact')}
            >
              <span className="truncate">Get Started</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
