import Hero from "../Container/Hero";
import About from "../Container/About";
import Services from "../Container/Services"; 
import Functionality from "../Container/Functionality";
import Testimonial from "../Container/Testimonial";
import Footer from "../Container/Footer"

export default function Home(){
    return(
        <>
        <Hero />
        <About />
        <Services />
        <Functionality />
        <Testimonial />
        <Footer />
        </>
    );
}