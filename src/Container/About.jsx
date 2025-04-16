import { useState, useEffect } from "react"
import { HeartHandshake, Lightbulb, IdCard, Split, ArrowUpRight  } from "lucide-react";
import AboutCard from "../components/AboutCard"

export default function About(){
  const images = [
    {
        src: "/images/kitchen.jpg",
        title: "Home Cleaning",
    },
    {
        src: "/images/office.jpg",
        title: "Offices Cleaning",
    },
    {
        src: "/images/kitchen.jpg",
        title: "Room Cleaning",
    },
    {
        src: "/images/office.jpg",
        title: "Living Clean",
    },
];

const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return(
       <>
        <section className="md:container h-auto mx-auto md:w-[2500px] w-[360px]">
            <div className="items-center justify-center flex md:w-1/2  mx-auto mt-20">
                <h1 className="items-center text-center md:text-[80px] md:leading-[75px] leading-[55px] text-[55px]">
                    Why Choose <span className="text-Primary">Cleaning Rabbit</span>
                </h1>
            </div>
            <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-3 md:mt-10 mb-5 mt-10 mx-auto md:ml-10 ml-4 overflow-hidden md:overflow-visible">
              <div className="">
                <AboutCard
                icons={<Lightbulb className="w-20 h-20 bg-cover bg-center text-Primary"/>}
                title={
                  <>
                  Easy &<br/>Convenient
                  </>
                }
                description="Find and book cleaning services in a minutes."
                />
              </div>

              <div className="">
              <AboutCard
                icons={<HeartHandshake className="w-20 h-20 bg-cover bg-center text-Primary"/>}
                title={
                  <>
                  Trusted &<br/>Professionals
                  </>
                }
                description="Review cleaners profiles, ratings, and photos before booking."
                />
              </div>

              <div className="">
              <AboutCard
                icons={<IdCard className="w-20 h-20 bg-cover bg-center text-Primary"/>}
                title={
                  <>
                  Secure &<br/>Payments
                  </>
                }
                description="Pay securely with your credit card for a hassle-free experience."
                />
              </div>

              <div className="">
                <AboutCard
                icons={<Split className="w-20 h-20 bg-cover bg-center text-Primary"/>}
                title={
                  <>
                  Flexible &<br/>Scheduling
                  </>
                }
                description="Choose the date and time that works best for you. "
                />
              </div>
            </div>

            {/* EXPLORE IMAGES */}
            <div className="gap-10 mt-20 mb-10 mx-auto p-3 md:p-6">
                    <div className="h-80 w-[330px] md:h-96 md:w-[990px] justify-center items-center mx-auto relative">
                        <img
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            className="h-96 w-full bg-cover bg-no-repeat rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute flex items-center md:justify-between md:max-full md:p-10 pl-5 md:pl-10 bottom-6 md:w-[990px]">
                            <h2 className="text-white font-extrabold md:text-[45px] text-[30px]">
                                {images[currentIndex].title}
                            </h2>
                            <button className="bg-Primary hover:bg-Secondary rounded-full p-3 items-center justify-center ml-32">
                                <ArrowUpRight className="text-white font-extrabold text-[40px] md:text-[45px]" />
                            </button>
                        </div>

                    </div>
                </div>
        </section>
       </>
    );
}