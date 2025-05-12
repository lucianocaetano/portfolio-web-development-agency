import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

const PageLayout: React.FC<
  {
    children: React.ReactNode
  }
> = ({children}) => {
  
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default PageLayout
