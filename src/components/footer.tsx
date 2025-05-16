import { MailIcon, LinkedinIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex flex-col h-32 w-full items-center justify-center bg-foreground text-background">
      <p>Percy Pocket Solutions &copy; 2025</p>
      <div className="flex gap-6 mt-6">
        <MailIcon size={24} strokeWidth={1.5} className="cursor-pointer" />
        <LinkedinIcon size={24} strokeWidth={1.5} className="cursor-pointer" />
      </div>
    </footer>
  )
}

export default Footer
