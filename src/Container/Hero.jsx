import Navbar from "./Navbar";
export default function Hero(){

    return(
        <>
        <Navbar/>
        <section className="hero relative md:grid grid-cols-2 h-[600px] container max-w-full">
         <div className="shadowy">
            <div className="md:my-36 my-28 pl-6 md:pl-20 absolute">
                <h1 className="md:leading-[75px] leading-[65px] md:text-[80px] text-[60px]">
                  Find Your <br/> <span className="text-Primary">Perfect</span> Cleaning <br/> Match!
                </h1>
                <p className="font-bold text-base md:text-[18px] text-[15px] text-Paragraph my-8">Connect with trusted cleaning professinals instantily. Book, Chat and pay securely, all in one place.
                </p>

                <div className="bg-white rounded-full flex items-center justify-between p-3 shadow-md shadow-gray-300 md:w-[500px] w-[400px]">
                    <input type="text" placeholder="Find the cleaner...." className="p-2 ml-2 font-bold border-none focus:outline-none leading-tight text-Paragraph appearance-none w-[200px] md:w-[400px]"/>
                    <button className="bg-Primary hover:bg-Secondary text-white rounded-full p-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
                    </button>
                </div>
            </div>
         </div>
        </section>
        </>
    );
}