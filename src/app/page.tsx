import Navbar from "@/components/navbar";
import Banner from "./components/banner";
import OurServices from "./components/our-services";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="layout-container flex h-full grow flex-col">
        <div className="lg:px-40 flex flex-1 justify-center">
          <div className="layout-content-container flex flex-col max-w-[1000px] flex-1">
            <Banner/> 
            <OurServices/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>  
  );
}
