import React from 'react';

export default function ServiceCard({ title, description, image }){
    return(
        <>
        <div className="w-96 mx-auto rounded-lg">
        <img 
          src={image}
          alt={title} 
          className="w-96 h-52 object-cover bg-center rounded-2xl transform transition-transform duration-300 hover:scale-105 hover:bg-slate-200/10 cursor-pointer"
        />
            <h2 className="mt-4 px-3 font-semibold text-[26px] leading-[32px] hover:text-Secondary cursor-pointer">
             {title}
            </h2>
            <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                {description}
            </p>  
            <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-7 mx-auto flex px-36">
                Book Now
            </button>   
        </div>
        </>
    );
}