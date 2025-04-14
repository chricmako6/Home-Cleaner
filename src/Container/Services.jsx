import React from 'react';
import ServiceCard from "../components/ServiceCard";

export default function Services(){
    return(
        <>
        <section id='Services' className="container mx-auto px-11 ml-10">
            <div className="justify-center text-center mt-20 ">
                <h1>Services</h1>
            </div>
            <div className="grid md:grid-cols-3 mt-5 w-auto h-screen gap-[12px]">
                <div className="w-96 h-52 ">
                    <ServiceCard
                    title={
                        <>
                        Commercial Office<br /> Cleaning
                        </>
                        }
                    description="Professional cleaning services for your home."
                    image="/images/service02.jpg"
                    />
                </div>
                <div className="w-96 h-52 ">
                    <ServiceCard
                    title={
                        <>
                        Commercial Office<br /> Cleaning
                        </>
                        }
                    description="Expert cleaning solutions for offices and businesses."
                    image="/images/service03.jpg"
                    />
                </div>
                <div className="w-96 h-52 ">
                    <ServiceCard
                     title={
                        <>
                        Deep Home<br /> Cleaning
                        </>
                        }
                     description="Thorough cleaning for every corner of your space."
                     image="/images/service04.jpg"
                    />
                </div>
                <div className="w-96 h-52 mt-40">
                    <ServiceCard
                    title={
                        <>
                        Residential Home<br /> Cleaning
                        </>
                        }
                    description="Professional cleaning services for your home."
                    image="/images/service05.jpg"
                    />
                </div>
                <div className="w-96 h-52 mt-40">
                    <ServiceCard
                    title={
                        <>
                        Sweet Home<br /> Cleaning
                        </>
                        }
                    description="Expert cleaning solutions for offices and businesses."
                    image="/images/service01.jpg"
                    />
                </div>
                <div className="w-96 h-52 mt-40">
                    <ServiceCard
                     title={
                        <>
                        Businness Office<br /> Cleaning
                        </>
                        }
                     description="Thorough cleaning for every corner of your space."
                     image="/images/service06.jpg"
                    />
                </div>
            </div>
        </section>
        </>
    );
}