'use client'

import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[580px] rounded-lg p-8 flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-end relative"
          style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner.png")' }}
        >
          <div className="absolute bg-foreground/20 w-full h-full top-0 left-0 rounded-lg z-40"></div>
          <div className="absolute z-40">
            <div className="text-left mb-8 space-y-4">
              <div>
                <h1
                  className="text-background text-2xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Welcome to
                </h1>
                <h1
                  className="text-background text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Percy Pocket Solutions
                </h1>
              </div>
              <p className="text-background text-sm font-normal w-1/2">
                We&apos;re a digital agency that designs and develops custom websites, web apps, and APIs for companies of all sizes.
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                className="rounded-full p-6"
                onClick={() => router.push('/contact')}
              >
                <span className="truncate">Get Started</span>
              </Button>
              <Button
                className="rounded-full p-5 bg-transparent text-white border-2 border-white"
                variant={'outline'}
                onClick={() => router.push('/about')}
              >
                <span className="truncate">About Us</span>
              </Button>
            </div>
            <a href="/contact">
              <Button
                className="rounded-full p-6"
                variant={'secondary'}
              >
                <span className="truncate">Contact Us</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
