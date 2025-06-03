'use client'

import { MailIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex flex-col h-32 w-full items-center justify-center bg-foreground text-background">
      <p>Percy Pocket Solutions &copy; 2025</p>
      <div className="flex gap-6 mt-6">
        <a href="mailto:contactus@percypocket.solutions" aria-label="Email" className='"cursor-pointer pointer-events-auto"' >
          <MailIcon size={24} strokeWidth={1.5} />
        </a>
        <a href="https://www.linkedin.com/company/percy-pocket-solutions/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className='"cursor-pointer pointer-events-auto"'>
          <LinkedinIcon size={24} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
