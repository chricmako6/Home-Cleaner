import { Facebook, Instagram, Twitter } from "lucide-react";
export default function Footer(){

    return(
        <>
        <section className="container h-auto mx-auto w-[3000px] bg-gray-300/10 rounded-2xl">
            <div className="grid md:grid-cols-2">
                <div className=" p-5 w-[590px]">
                    <h1  className="text-[50px] md:pl-5">
                        <span className="text-Primary">Home</span>Clean.
                    </h1>
                    <p className="text-Paragraph pl-5 font-bold text-base text-[18px]">
                    HomeClean is dedicated to providing top-notch cleaning services, ensuring your home is spotless, organized, and stress-free. Your satisfaction is our priority, and we strive to create a welcoming and healthy living environment for you and your family.
                    </p>
                </div>
                <div className="flex mt-10">
                    <div className="w-[200px] ">
                        <h2 className="font-semibold text-[26px] leading-[32px] pl-10">
                            Quick Links
                        </h2>
                        <ul className="justify-center items-center my-4 pl-10 pr-10">
                            <li className="text-Paragraph hover:text-Secondary font-bold text-base text-[18px]">
                                <a href="/">About Us</a>
                            </li>
                            <li className="text-Paragraph hover:text-Secondary font-bold text-base text-[18px]">
                                <a href="/">How it Works</a>
                            </li>
                            <li className="text-Paragraph hover:text-Secondary font-bold text-base text-[18px]">
                                <a href="/">Why choose Us</a>
                            </li>
                            <li className="text-Paragraph hover:text-Secondary font-bold text-base text-[18px]">
                                <a href="/">Testimonials</a>
                            </li>
                            <li className="text-Paragraph hover:text-Secondary font-bold text-base text-[18px]">
                                <a href="#Services">Services</a>
                            </li>
                        </ul>
                    </div>
                    <div className="ml-56">
                        <h2 className="font-semibold text-[26px] leading-[32px]">
                            Social Media 
                        </h2>
                        <div className="flex gap-5 my-3">
                            <a href="/">
                              <Facebook className="border-2 font-bold border-Primary text-Primary rounded-full p-2 w-12 h-12 hover:border-white hover:bg-Secondary hover:text-white"/>
                            </a>
                            <a href="/">
                              <Instagram className="border-2 font-bold border-Primary text-Primary rounded-full p-2 w-12 h-12 hover:border-white hover:bg-Secondary hover:text-white"/>
                            </a>
                            <a href="/">
                              <Twitter className="border-2 font-bold border-Primary text-Primary rounded-full p-2 w-12 h-12 hover:border-white hover:bg-Secondary hover:text-white"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center mt-10 mb-5 border-t-2 border-Paragraph pt-5">
                <p className="text-Paragraph font-bold text-base text-[18px]">
                    © {new Date().getFullYear()} Chris Dev. All rights reserved.
                </p>
           </div>
        </section>
        </>
    );
}