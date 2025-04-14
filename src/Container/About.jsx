import { HeartHandshake, Lightbulb, IdCard, Split, ArrowUpRight  } from "lucide-react";
import AboutCard from "../components/AboutCard"

export default function About(){
    return(
       <>
        <section className="container h-auto mx-auto w-[2500px]">
            <div className="items-center justify-center w-1/2 mx-auto mt-20">
                <h1 className="items-center leading-[75px] text-center">
                    Why Choose <span className="text-Primary">Cleaning Rabbit</span>
                </h1>
            </div>
            <div className="grid md:grid-cols-4 gap-4 mt-10 mx-auto ml-10">
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
            <div className="grid grid-cols-4  mt-20 mb-10 mx-auto">
                <div className="col-span-4 flex gap-10 mx-auto">
                    <div className="h-96 w-[550px] relative">
                    <img src="/images/kitchen.jpg" alt="" className="h-96 w-[550px] bg-cover bg-no-repeat rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"/>

                    <div className="absolute flex items-center justify-center left-10 bottom-6">
                        <h2 className="text-white font-extrabold text-[45px]">Home Cleaning</h2>
                        <button className="bg-Primary hover:bg-Secondary rounded-full p-3 items-center justify-center ml-32">
                         <ArrowUpRight className="text-white font-extrabold text-[45px]"/>
                         {/* <ArrowUp /> */}
                        </button>
                    </div>
                    </div>

                    <div className="h-96 w-[550px] relative">
                        <img src="/images/office.jpg" alt="" className="h-96 w-[550px] bg-cover bg-no-repeat rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105"/>

                        <div className="absolute flex items-center justify-center left-10 bottom-6 ">
                            <h2 className="text-white font-extrabold text-[45px]">
                                Offices Cleaning
                            </h2>
                            <button className="bg-Primary hover:bg-Secondary rounded-full p-3 items-center justify-center ml-28">
                             <ArrowUpRight className="text-white font-extrabold text-[45px]"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}