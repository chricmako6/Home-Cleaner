
export default function SearchProfileCard({title, header, description, image}){
    return(
        <>
        <section className="">
           <div className="border-Paragraph border-1 rounded-3xl h-80 md:h-72 md:w-[350px] w-[370px] p-5 shadow-lg shadow-gray-400/50 transform transition-transform duration-300 hover:bg-slate-200/10 cursor-pointer hover:border-2 my-5 md:ml-1">
                  <div>
                    <div className="mx-auto rounded-md shadow-md shadow-gray-400/10 w-[95px] h-[95px]">
                        {image}
                    </div>
                    <h4 className="justify-center items-center flex  font-semibold my-2 text-[26px] leading-[32px] text-Primary">
                        {title}
                    </h4>
                    <p className="font-bold text-base text-[18px] mb-3 text-Paragraph p-1 items-center justify-center flex">
                        {description}
                    </p>
                  </div>
                   
                   <div className="justify-center items-between flex gap-4">
                    <button className="bg-Primary text-white p-1 px-2 my-1 rounded-md">
                        Search Profile
                    </button>

                    <button className="hover:text-white hover:bg-Secondary hover:border-white border-Primary border-2 text-Primary p-1 px-2 my-1 rounded-md">
                        Book Now
                    </button>
                   </div>
           </div>
        </section>
        </>
    );
}