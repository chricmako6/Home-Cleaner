import { useState } from "react";
import Navbar from "../Container/Navbar";
import SearchProfileCard from "../components/SearchProfileCard";

export default function SearchProfile(){
    const [searchQuery, setSearchQuery] = useState("");
    
    const profiles = [
        {
            title: "We clean",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service03.jpg",
        },
        {
            title: "The Cleaners",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service02.jpg",
        },
        {
            title: "Commercial Cleaner",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service01.jpg",
        },
        {
            title: "Professional Cleaner",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service01.jpg",
        },
        {
            title: "Expert Home Cleaner",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service05.jpg",
        },
        {
            title: "We clean",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service04.jpg",
        },
        {
            title: "Residential Cleaner",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service05.jpg",
        },
        {
            title: "We clean",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service03.jpg",
        },
        {
            title: "We clean",
            description: "The user has requested a short description for a cleaning service.",
            image: "/images/service01.jpg",
        },
    ];

    const filteredProfiles = profiles.filter(profile =>
        profile.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return(
        <>
        <Navbar/>
        <section className="container md:w-[1100px] w-[410px] mx-auto h-[60rem]">1
            <div className="justify-center items-center h-auto w-auto">  
                <div className=" justify-center items-center mt-28 w-[600px] ml-24">
                    <h1 className="text-4xl font-bold w-1/2">
                        Search Profile
                    </h1>
                    <p className="font-bold px-3 my-2 text-base text-[18px] text-Paragraph w-1/2">
                        Find your service provider
                    </p>
                </div>
                <form className="mb-10 ">
                    <div className="bg-white border-Primary rounded-full mx-auto flex items-center justify-between p-3 shadow-md shadow-gray-300 md:w-[1000px] w-[350px]">

                        <input type="text"
                        placeholder="Find the cleaner...." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="p-2 md:ml-3 ml-1 font-bold border-none focus:outline-none leading-tight text-Paragraph appearance-none w-[200px] md:w-[850px]"/>

                        <button className="bg-Primary hover:bg-Secondary text-white rounded-full p-2 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
                    </button>
                    </div>

                    <div className="md:grid md:grid-cols-3 md:p-2 p-4 gap-4 mt-10 ">
                    {filteredProfiles.length > 0 ? (
                        filteredProfiles.map((profile, index) => (
                            <SearchProfileCard
                                key={index}
                                title={profile.title}
                                header=""
                                description={profile.description}
                                image={<img src={profile.image} alt={profile.title} className="object-cover rounded-md shadow-md shadow-gray-400/10 w-[95px] h-[95px]" />}
                            />
                        ))
                    ) : (
                        <div className="col-span-3 text-center text-red-500 font-bold text-xl py-10">
                            No profiles found...
                        </div>
                    )}
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}