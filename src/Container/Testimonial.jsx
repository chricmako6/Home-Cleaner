import {ChevronLeft, ChevronRight} from "lucide-react"
import TestimonialCard from "../components/TestimonialCard";
export default function Testimonial(){

    return(
        <>
        <section className="container mx-auto mt-32 mb-20">
            <div className="flex mx-auto md:ml-[-7px] justify-center items-center">
                <h1 className="mx-auto md:text-[80px] text-[50px] leading-[45px] p-0 md:p-0 text-center">
                    What Our Client Say
                </h1>
                <div className="mx-auto justify-center items-center md:block hidden">
                    <button className="border-2 border-Primary rounded-full p-2 hover:border-white hover:bg-Secondary hover:text-white"> 
                        <ChevronLeft className="w-11 h-11 text-Primary hover:text-white"/>
                    </button>
                    <button className="border-2 border-Primary rounded-full p-2 ml-2 hover:border-white hover:bg-Secondary hover:text-white">
                        <ChevronRight className="w-11 h-11 text-Primary hover:text-white"/>
                    </button> 
                </div>
            </div>
            <div className="flex md:grid md:grid-cols-2 mx-auto md:gap-0 gap-7 overflow-hidden md:overflow-visible md-p-0 p-3">
                <div className="">
                    <TestimonialCard
                        title="Chriss Dev"
                        description="A passionate advocate for clean and organized spaces, shares his thoughts on home cleaning services: 'A clean home is not just about aesthetics; it's about creating a healthy and stress-free environment. Professional home cleaning services ensure every corner of your space is spotless, giving you more time to focus on what truly matters.."
                        image="/images/TestimonialProfile.jpg"
                    />
                </div>
                <div className="">
                <TestimonialCard
                        title="Christopher Developer"
                        description="An advocate for clean and organized living spaces shares their perspective on home cleaning services: 'A clean home goes beyond appearances; it fosters a healthy and stress-free environment. Professional cleaning services ensure every nook and cranny is immaculate, giving you the freedom to focus on what truly matters."
                        image="/images/TestimonialProfile01.jpg"
                    />
                </div>
            </div>
        </section>
        </>
    );
}