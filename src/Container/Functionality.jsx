import { Search, Earth, HandCoins} from "lucide-react"
export default function Functionality(){
    return(
        <>
        <section className=" h-auto mt-72 ">
            <h1 className="items-center leading-[75px] text-center mb-10">
                How it Works
            </h1>
            <div className="grid grid-cols-3 my-10 container mx-auto w-[995px] rounded-2xl shadow-md border-1 bg-gray-300/10">
                
                    <div className="bg-white h-64 w-auto p-5 rounded-s-2xl">
                       <Search className="items-center justify-center mx-auto text-Primary w-32 h-20 p-2" />
                        <h2 className="font-semibold text-[26px] leading-[32px] my-2 justify-center items-center flex">
                            Step 1
                        </h2>
                        <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                            Search for cleaners in your area based on your neeeds.
                        </p>
                    </div>
            

                
                    <div className="bg-white h-64 w-auto p-5 "> 
                    <Earth className="items-center justify-center mx-auto text-Primary w-32 h-20 p-2"/>
                        <h2 className="font-semibold text-[26px] leading-[32px] my-2 justify-center items-center flex">
                            Step 2
                        </h2>
                        <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                            Browse cleaner, profiles, rates and review.
                        </p>
                    </div>
               

            
                    <div className="bg-white h-64 w-auto p-5 rounded-e-2xl">
                    <HandCoins className="items-center justify-center mx-auto text-Primary w-32 h-20 p-2" />
                        <h2 className="font-semibold text-[26px] leading-[32px] my-2 justify-center items-center flex">
                            Step 3
                        </h2>
                        <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                            Book your cleaning, chat with your cleaners, and pay securely.
                        </p>
                    </div>
                
            </div>
        </section>
        </>
    );
}