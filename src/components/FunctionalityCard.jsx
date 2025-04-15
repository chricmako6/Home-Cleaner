
export default function FunctionalityCard({num, title, description}) {
    return(
       <>
         <section className="bg-white shadow-md h-68 w-[24rem] my-5 md:w-72 p-5 rounded-2xl justify-center items-center mx-auto">
            <div className="ring-2 rounded-full p-2 bg-white w-28 h-28 ring-Paragraph mx-auto">
                {num}
            </div>
            <h2 className="font-semibold text-[26px] leading-[32px] my-2 justify-center items-center flex">
                {title}
            </h2>
            <p className="font-bold items-center justify-center w-auto text-base text-[18px] text-Paragraph">
                {description}   
            </p>
            
         </section>
       </>
    );
}