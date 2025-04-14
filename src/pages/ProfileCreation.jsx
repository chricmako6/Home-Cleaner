import React, { useState } from "react";
import Footer from "../Container/Footer";
import Navbar from "../Container/Navbar";
import { CircleUserRound } from "lucide-react";
export default function ProfileCreation(){

    const [profileImage, setProfileImage] = useState();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
                const imageUrl = URL.createObjectURL(file);
                setProfileImage(imageUrl);
                console.log("Selected file:", file.name);
            }
        };

    const profile = profileImage ? (
        <img
            src={profileImage}
            alt="Profile"
            className="w-80 h-80 items-center bg-gray-300 text-white p-5 rounded-3xl object-cover"
        />
    ) : (
        <CircleUserRound className="w-52 h-52 items-center bg-gray-300 text-white p-5 ml-7 mb-5 rounded-3xl" />
    );
    return(
        <>
        <Navbar className/>
        <section className="container w-full mx-auto h-[60rem] centered">
         
            <div className="justify-center items-center h-[60rem] w-full"> 1
                <div className=" justify-center items-center mt-28 w-[600px] ml-24">
                    <h1 className="text-4xl font-bold">
                        Create Account
                    </h1>
                    <p className="font-bold px-3 text-base text-[18px] text-Paragraph">
                        Edit your name, avatar etc.
                    </p>
                </div>
                <form className="mb-10 ">
                    <div className=" container mx-auto grid grid-cols-2 mt-5 bg-slate-200/20 w-[1100px] p-6 rounded-2xl shadow-lg shadow-gray-500/50">
                        <div className="items-center justify-center">
                            <label className="font-bold text-base text-[20px]">Your Name</label>
                            <input type="text" placeholder="Enter you name" className="border-2 rounded-lg p-2 mb-4 w-[500px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Password</label>
                            <input type="password" placeholder="Enter you password" className="border-2 rounded-lg p-2 mb-4 w-[500px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Email Address</label>
                            <input type="email" placeholder="Enter your email" className="border-2 rounded-lg p-2 mb-4 w-[500px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Service We Provide</label>
                            <input type="text" placeholder="Service we provide" className="border-2 rounded-lg p-2 mb-4 w-[500px] focus:outline-none shadow-sm" />

                            <h3 className="text-Primary font-bold px-3 text-base text-[18px]">Delete Your Account</h3>
                            <p className="font-bold px-3 text-base text-[18px] text-Paragraph">You will receive an email to confirm your decision. Please note, that all boards you have created will be permanently erased.</p>

                            <div className="flex items-center justify-center">
                                <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-3 mx-auto flex px-20">Cancel</button>

                                <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-3 mx-auto flex px-20">Save</button>
                            </div>
                            
                        </div>

                        <div className="mx-auto mt-24 items-center justify-center">
                         <label htmlFor="file" className="cursor-pointer">
                            {profile}
                        </label>

                        <input
                            type="file"
                            id="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                          <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-3 mx-auto flex px-20">Upload a Picture</button>
                        </div>
                       
                    </div>  
                </form>
                <Footer/>
            </div>
        
        </section>
        </>
    );
}