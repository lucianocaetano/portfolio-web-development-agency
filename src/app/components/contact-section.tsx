'use client'

import { Section, SectionTitle } from "@/components/section"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const ContactSection = () => {
  const router = useRouter()

  return (
    <Section className="text-center space-y-2">
      <SectionTitle>Contact us!</SectionTitle>
      <p className="text-gray-700">We&apos;re ready to create a solution tailored to your needs.</p>
      <Button
        className="mt-5 p-6 rounded-full"
        onClick={() => router.push('/contact')}
      >Get Started</Button>
    </Section>
  )
}

export default ContactSection
