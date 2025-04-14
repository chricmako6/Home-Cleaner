
export default function AboutCard({icons, title, description}){
    return(
        <>
            <section className="border-Paragraph border-1 rounded-3xl h-72 w-[260px] p-5 shadow-lg shadow-gray-400/50 transform transition-transform duration-300 hover:scale-105 hover:bg-slate-200/10 cursor-pointer hover:border-Primary hover:border-2">
                <div className="items-center justify-center mt-5">
                    {icons}
                </div>
                <h2 className="font-semibold my-2 text-[26px] leading-[32px] text-Primary">
                    {title}
                </h2>
                <p className="font-bold text-base text-[18px] mb-5 text-Paragraph">
                    {description}
                </p>
            </section>
        </>
    );
}