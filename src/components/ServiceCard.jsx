import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowLeft , CircleArrowRight } from "lucide-react";

export default function ServiceCard({ title, description, images }){
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + images.length) % images.length
        );
    };
    return(
        <>
        <div className="md:ml-1 ml-4 md:w-96 w-[25rem] mx-auto rounded-lg">
           <div className="relative w-96">
            <img 
                src={images[currentImageIndex].src}
                alt={title[currentImageIndex].title} 
                className="w-96 h-52 object-cover bg-center rounded-2xl transform transition-transform duration-300 hover:overflow-hidden hover:scale-105  hover:bg-slate-200/10 cursor-pointer"
                />

                <button className="absolute top-24 transform  left-4 rounded-full p-2 shadow-lg hover:bg-slate-200/30" onClick={handlePrev}>
                  <CircleArrowLeft className="text-white"/>
                </button>

                <button className="absolute top-24 transform  right-4 rounded-full p-2 shadow-lg hover:bg-slate-200/30" onClick={handleNext}>
                  <CircleArrowRight className="text-white"/>
                </button>

                <h2 className="mt-4 px-3 font-semibold text-[26px] leading-[32px] hover:text-Secondary cursor-pointer">
                {title}
                </h2>

                <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                    {description}
                </p>  
                <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-7 mx-auto flex px-36">
                <Link to="/search">Book Now</Link>
                </button>   
           </div>
        </div>
        </>
    );
}