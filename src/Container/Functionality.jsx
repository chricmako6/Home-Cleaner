import FunctionalityCard from "../components/FunctionalityCard"

export default function Functionality(){
    return(
        <>
        <section className=" h-auto mt-20 w-[350px] md:w-[995px] overflow-hidden md:overflow-visible mx-auto ">
            <h1 className="items-center leading-[75px] text-center mb-10 md:text-[80px] text-[60px">
                How it Works
            </h1>
            <div className="flex md:grid md:grid-cols-3 p-5 gap-5 md:gap-1 md:p-3 mb-5 container mx-auto w-[26rem] md:w-[995px] rounded-2xl shadow-md border-1 overflow-hidden md:overflow-visible bg-gray-300/10">
                
                    <div className="">
                       <FunctionalityCard
                            num={
                                <>
                                  <h4 className="items-center text-white text-[40px] justify-center flex w-24 h-24 rounded-full bg-yellow-500 ">1</h4>
                                </>
                            }
                            title="Step 1"
                            description="Search for cleaners in your area based on your neeeds."
                        />
                     </div>

                     <div className="">
                       <FunctionalityCard
                            num={
                                <>
                                  <h4 className="items-center text-white text-[40px] justify-center flex w-24 h-24 rounded-full bg-green-500 ">2</h4>
                                </>
                            }
                            title="Step 2"
                            description="Browse cleaner, profiles, rates and review."
                        />
                     </div>

                     <div className="">
                       <FunctionalityCard
                            num={
                                <>
                                  <h4 className="items-center text-white text-[40px] justify-center flex w-24 h-24 rounded-full bg-Primary ">3</h4>
                                </>
                            }
                            title="Step 3"
                            description=" Book your cleaning, chat with your cleaners, and pay securely."
                        />
                     </div>
            </div>
        </section>
        </>
    );
}