import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react";

export default function Navbar() {
    return (
        <>
            <div className="flex w-screen items-center justify-between p-4 bg-white shadow-md shadow-gray-200 fixed z-10 h-[80px]">
                <div>
                    <h1 className="text-[30px] md:text-[50px] pl-5 md:pl-20">
                        <span className="text-Primary">Home</span>Clean.
                    </h1>
                </div>
                <nav className="flex items-center pr-10 text-[17px] mr-12">
                    {/* Navigation links for medium and larger screens */}
                    <ul className="hidden md:flex font-semibold gap-8 text-Paragraph items-center">
                        <li className="hover:text-Secondary">
                            <a href="/">Residential Cleaning</a>
                        </li>
                        <li className="hover:text-Secondary">
                            <a href="/">Commercial Cleaning</a>
                        </li>
                        <li className="hover:text-Secondary">
                            <a href="#Services">Services</a>
                        </li>

                        <div className="border-Primary border-2 hover:border-white hover:bg-Secondary hover:text-white rounded-md p-2 px-4 text-Primary">
                            <li>
                                <Link to="/profile">We're Cleaners!</Link>
                            </li>
                        </div>

                        <div className="relative group">
                            <button className="flex items-center block gap-2 text-Paragraph">
                                <Globe className="w-5 h-5" />
                                <ChevronDown className="w-5 h-5" />
                            </button>
                            <ul className="absolute hidden group-hover:block bg-white shadow-lg shadow-gray-500/50 rounded-md mt-2 w-32">
                                <li className="p-2 hover:bg-Secondary hover:text-white cursor-pointer hover:rounded-t-md">
                                    English
                                </li>
                                <li className="p-2 hover:bg-Secondary hover:text-white cursor-pointer">
                                    Spanish
                                </li>
                                <li className="p-2 hover:bg-Secondary hover:text-white cursor-pointer hover:rounded-b-md">
                                    French
                                </li>
                            </ul>
                        </div>
                    </ul>

                    {/* SVG Icon for small screens */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="md:hidden block  w-8 h-8 text-Paragraph hover:bg-Primary cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </nav>
            </div>
        </>
    );
}
