
export default function TestimonialCard({ title, description, image }){

    return(
        <>
        <section className="h-80 w-[560px] rounded-2xl border-1 border-Paragraph shadow-md shadow-gray-500/50 mx-auto mt-10 px-5  p-5">
            <div className="">
                <img
                 src={image}
                 alt={title}
                 className="w-[95px] h-[95px] bg-cover bg-center rounded-full transform transition-transform duration-300 hover:scale-105"
                 />
            </div>
            <h2 className="font-semibold my-2 text-[26px] leading-[32px] hover:text-Secondary text-Primary">
                {title}
            </h2>

            <p className="font-bold text-base text-[18px] mb-5 text-Paragraph">
                {description}
            </p>
        </section>
        </>
    );
}