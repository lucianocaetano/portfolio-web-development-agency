'use client'

import {Button} from "@/components/ui/button"
import {useRouter} from "next/navigation"

const ContactSection = () => {
  const router = useRouter()

  return (
    <div className="text-center space-y-2 my-16">
      <h2 className="text-5xl font-serif">Contact us!</h2>
      <p className="text-gray-700">We&apos;re ready to create a solution tailored to your needs.</p>
      <Button
        className="mt-5 p-6 rounded-full"
        onClick={() => router.push('/contact')}
      >Get Started</Button>
    </div>
  )
}

export default ContactSection
