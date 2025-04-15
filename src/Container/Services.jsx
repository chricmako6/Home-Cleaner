import React from 'react';
import ServiceCard from "../components/ServiceCard";

export default function Services() {
    const services = [
        {
            title: "Commercial Office Cleaning",
            description: "Professional cleaning services for your home.",
            images: [
                { src: "/images/service02.jpg", title: "Office Cleaning 1" },
                { src: "/images/service03.jpg", title: "Office Cleaning 2" },
                { src: "/images/service04.jpg", title: "Office Cleaning 3" },
            ],
        },
        {
            title: "Residential Home Cleaning",
            description: "Expert cleaning solutions for homes.",
            images: [
                { src: "/images/service05.jpg", title: "Home Cleaning 1" },
                { src: "/images/service01.jpg", title: "Home Cleaning 2" },
                { src: "/images/service06.jpg", title: "Home Cleaning 3" },
            ],
        },
        {
            title: "Sweet Home Cleaning",
            description: "Expert cleaning solutions for offices and businesses.",
            images: [
                { src: "/images/service01.jpg", title: "Sweet Home 1" },
                { src: "/images/service02.jpg", title: "Sweet Home 2" },
                { src: "/images/service03.jpg", title: "Sweet Home 3" },
            ],
        },
        {
            title: "Business Office Cleaning",
            description: "Thorough cleaning for every corner of your space.",
            images: [
                { src: "/images/service06.jpg", title: "Business Office 1" },
                { src: "/images/service04.jpg", title: "Business Office 2" },
                { src: "/images/service05.jpg", title: "Business Office 3" },
            ],
        },
        {
            title: "Business Office Cleaning",
            description: "Thorough cleaning for every corner of your space.",
            images: [
                { src: "/images/service06.jpg", title: "Business Office 1" },
                { src: "/images/service04.jpg", title: "Business Office 2" },
                { src: "/images/service05.jpg", title: "Business Office 3" },
            ],
        },
        {
            title: "Business Office Cleaning",
            description: "Thorough cleaning for every corner of your space.",
            images: [
                { src: "/images/service06.jpg", title: "Business Office 1" },
                { src: "/images/service04.jpg", title: "Business Office 2" },
                { src: "/images/service05.jpg", title: "Business Office 3" },
            ],
        }
    ];

    return (
        <section id="Services" className="container mx-auto px-11 md:ml-10">
            <div className="justify-center text-center mt-20">
                <h1 className="md:text-[80px] text-[60px]">Services</h1>
            </div>
            <div className="flex md:grid md:grid-cols-3 mt-5 w-auto h-auto gap-[12px] overflow-hidden md:overflow-visible">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        description={service.description}
                        images={service.images} 
                    />
                ))}
            </div>
        </section>
    );
}