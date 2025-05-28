'use client'

import { Button } from "@/components/ui/button"

const ContactSection = () => {
  return (
    <div className="text-center space-y-2 my-16">
      <h2 className="text-5xl font-serif">Contact us!</h2>
      <p className="text-gray-700">We&apos;re ready to create a solution tailored to your needs.</p>
      <a href="/contact">
        <Button
          className="mt-5 p-6 rounded-full"
        >Get Started</Button>
      </a>
    </div>
  )
}

export default ContactSection
