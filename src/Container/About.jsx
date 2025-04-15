import { useState } from "react"
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
    const [intervalId, setIntervalId] = useState(null);

    const startAutoSlide = () => {
        if (!intervalId) {
            const id = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // Change image every 3 seconds
            setIntervalId(id);
        }
    };

    const stopAutoSlide = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    // Determine the number of images to display based on screen size
    const getVisibleImages = () => {
      const isLargeScreen = window.innerWidth >= 768; // Tailwind's `md` breakpoint
      const visibleImages = isLargeScreen ? 2 : 1;
      return images.slice(currentIndex, currentIndex + visibleImages).concat(
          images.slice(0, Math.max(0, currentIndex + visibleImages - images.length))
      );
  };

  const visibleImages = getVisibleImages();

    return(
       <>
        <section className="container h-auto mx-auto md:w-[2500px] w-[499px]">
            <div className="items-center justify-center flex md:w-1/2 mx-auto mt-20">
                <h1 className="items-center leading-[75px] text-center md:text-[80px] text-[60px]">
                    Why Choose <span className="text-Primary">Cleaning Rabbit</span>
                </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:mt-10 mb-10 mt-10 mx-auto ml-10 md:pr-0 pr-7">
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
            <div
                    className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20 mb-10 mx-auto p-6"
                    onMouseEnter={stopAutoSlide}
                    onMouseLeave={startAutoSlide}
                >
                    {visibleImages.map((image, index) => (
                        <div key={index} className="h-80 w-[430px] md:h-96 md:w-[560px] md:pl-5 relative">
                            <img
                                src={image.src}
                                alt={image.title}
                                className="h-96 w-full bg-cover bg-no-repeat rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute  flex items-center justify-center left-5 md:left-10 bottom-6">
                                <h2 className="text-white  font-extrabold md:text-[45px] text-[30px]">
                                    {image.title}
                                </h2>
                                <button className="bg-Primary hover:bg-Secondary rounded-full p-3 items-center justify-center ml-32">
                                    <ArrowUpRight className="text-white font-extrabold text-[40px] md:text-[45px]" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        </section>
       </>
    );
}