import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex flex-col h-[250px] w-full items-center justify-center border-t bg-foreground text-background">
      <Image src="/footer.svg" width={40} height={40} alt="logo" />
      <h2 className="text-2xl font-semibold">BACK TO TOP</h2>
      <p>
        <span className="font-semibold">@2020 Percy pockets solution</span> All Rights Reserved.
      </p>
      <div className="flex gap-6 mt-6">
        <Image src="/email.svg" alt="" width={30} height={30} className="cursor-pointer" />
        <Image src="/linkedin.svg" alt="" width={30} height={30} className="cursor-pointer" />
      </div>
    </footer>
  )
}

export default Footer
