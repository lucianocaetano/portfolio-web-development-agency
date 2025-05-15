'use client'

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const Banner = () => {
  const router = useRouter()
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] rounded-lg p-8 flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-end relative"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner.png")' }}
        >
          <div className="absolute bg-foreground/20 w-full h-full top-0 left-0 rounded-lg z-50"></div>
          <div className="absolute z-50">
            <div className="text-left mb-8">
              <h1
                className="text-background text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
              >
                Welcome to Acme Co
              </h1>
              <h2 className="text-background text-sm font-normal w-1/2">
                We&apos;re a digital agency that designs and develops custom websites, web apps, and APIs for companies of all sizes.
              </h2>
            </div>
            <Button
              className="rounded-full p-6"
              variant={'secondary'}
              onClick={() => router.push('/contact')}
            >
              <span className="truncate">Contact Us</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
