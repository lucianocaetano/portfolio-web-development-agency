'use client'

import {Button} from "@/components/ui/button"
import {useRouter} from "next/navigation"

const Banner = () => {
  const router = useRouter()
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div
          className="flex min-h-[480px] rounded-lg p-8 flex-col gap-8 bg-cover bg-center bg-no-repeat items-start justify-end relative"
          style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/banner.png")'}}
        >
          <div className="absolute bg-black/20 w-full h-full top-0 left-0 rounded-lg z-40"></div>
          <div className="absolute z-40">
            <div className="text-left mb-8 space-y-4">
              <div>
                <h1
                  className="text-white text-3xl font-black leading-tight tracking-[-0.033em] @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                >
                  Welcome to
                </h1>
                <h1
                  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                > 
                  Percy pocket solution
                </h1>
              </div>
              <h2 className="text-white text-sm font-normal w-1/2">
                We are a software agency that designs and develops custom websites, web applications, and APIs for businesses of all sizes.
              </h2>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                className="rounded-full p-6"
                onClick={() => router.push('/contact')}
              >
                <span className="truncate">Get Started</span>
              </Button>
              <Button
                className="rounded-full p-5"
                variant={'outline'}
                onClick={() => router.push('/about')}
              >
                <span className="truncate">About Us</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
