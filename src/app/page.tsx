import Header from "@/components/header"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Explorcourses from "./services"
import Achievement from "./achievement"
import Courses from "./courses/page"
import Aboutus from "./aboutus/page"
import Testimonial from "./testimonial/page"
import Footer from "@/components/footer"
export default function Home() {
  return (
    <div>
      
        <Header/>
        <Navbar />
        <Hero />
        <Explorcourses />
        <Achievement />
        <Courses />
        <Aboutus />
        <Testimonial />
        <Footer />

      </div>
    
  )
}