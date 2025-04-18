import React, { useState } from "react";
import Footer from "../Container/Footer";
import Navbar from "../Container/Navbar";
import { CircleUserRound } from "lucide-react";

export default function ProfileCreation(){

    const [profileImage, setProfileImage] = useState();
    const [service, setService] = useState("");

    const handleServiceChange = (e) => {
        setService(e.target.value); // Update the service state
    };

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
            className="w-72 h-72 items-center bg-gray-300 text-white p-5 rounded-3xl object-cover"
        />
    ) : (
        <CircleUserRound className="w-52 h-52 items-center bg-gray-300 text-white p-5 ml-16 md:ml-7 mb-5 rounded-3xl" />
    );
    return(
        <>
        <Navbar className=""/>
        <section className="md:w-full w-[435px] mx-auto h-[60rem]">
         
            <div className="justify-center items-center h-[60rem] w-auto"> 1
                <div className=" justify-center items-center mt-28 w-[600px] ml-24">
                    <h1 className="text-4xl font-bold w-1/2">
                        Create Account
                    </h1>
                    <p className="font-bold px-3 text-base text-[18px] text-Paragraph w-1/2">
                        Edit your name, avatar etc.
                    </p>
                </div>
                <form className="mb-10">
                    <div className=" md:container mx-auto md:grid md:grid-cols-2 mt-5 bg-slate-200/20 w-[420px] md:w-[1100px] p-6 rounded-2xl shadow-lg shadow-gray-500/50 ">
                        <div className="items-center justify-center">
                            <label className="font-bold text-base text-[20px]">Your Name</label>
                            <input type="text" placeholder="Enter you name" className="border-2 rounded-lg p-2 mb-4 md:w-[500px] w-[350px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Password</label>
                            <input type="password" placeholder="Enter you password" className="border-2 rounded-lg p-2 mb-4 md:w-[500px] w-[350px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Email Address</label>
                            <input type="email" placeholder="Enter your email" className="border-2 rounded-lg p-2 mb-4 md:w-[500px] w-[350px] focus:outline-none shadow-sm" />

                            <label className="font-bold text-base text-[20px]">Service We Provide</label>
                            {/* <input type="text" 
                                   value={service} 
                                   onChange={handleServiceChange}
                                   placeholder="Service we provide" 
                                   className="border-2 rounded-lg p-2 mb-4 md:w-[500px] w-[350px] focus:outline-none shadow-sm" /> */}
                            <select
                                    value={service}
                                    onChange={handleServiceChange}
                                    className="border-2 rounded-lg p-2 mb-4 md:w-[500px] w-[350px] focus:outline-none shadow-sm">

                                    <option value="">Select a service</option>
                                    <option value="Service 1">Service 1</option>
                                    <option value="Service 2">Service 2</option>
                                    <option value="Service 3">Service 3</option>
                                    <option value="Service 4">Service 4</option>
                                </select>

                            <h3 className="text-Primary font-bold px-3 text-base text-[18px] w-1/2">Delete Your Account</h3>
                            <p className="font-bold px-3 text-base text-[18px] text-Paragraph">You will receive an email to confirm your decision. Please note, that all boards you have created will be permanently erased.</p>

                            <div className="flex items-center justify-center ">
                                <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-3 mx-auto flex md:px-20 px-16">Cancel</button>

                                <button className="bg-Primary hover:bg-Secondary text-white font-bold shadow-lg shadow-gray-500/50 rounded-2xl p-2 items-center justify-center my-3 mx-auto flex md:px-20 px-16">Save</button>
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