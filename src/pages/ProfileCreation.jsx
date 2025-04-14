
export default function ProfileCreation(){
    return(
        <>
        <section className="container w-full items-center justify-center flex">
            <div className="">
                <h1 className="text-5xl font-bold">
                    Create Account
                </h1>
                <p className="font-bold my-4 text-base text-[18px] text-Paragraph">
                    Edit your name, avatar etc.
                </p>
                <form className="bg-white p-8 rounded-lg shadow-lg w-[1150px]  grid grid-cols-2">
                    <div className="mb-4">
                        <label className="block text-base text-[18.5px] font-bold mb-2" htmlFor="name">Your Name</label>
                        <input className="shadow appearance-none border rounded mb-2 w-full py-3 px-3 text-Paragraph leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />

                        
                        <label className="block text-base text-[18.5px] font-bold mb-2" htmlFor="email">Password</label>
                        <input className="shadow appearance-none border rounded w-full mb-2 py-3 px-3 text-Paragraph leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="**********" />
                        
                        <label className="block text-base text-[18.5px] font-bold mb-2" htmlFor="email">Email Address</label>
                        <input className="shadow appearance-none border rounded w-full mb-2 py-3 px-3 text-Paragraph leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email" />

                        <label className="block text-base text-[18.5px] font-bold mb-2" htmlFor="email">Services We Provide</label>
                        <input className="shadow appearance-none border rounded w-full mb-2 py-3 px-3 text-Paragraph leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Services we provide" />

                        <h3 className="text-base text-[18px] text-Primary font-bold">Delete Your Account</h3>
                        <p className="font-bold my-2 text-base text-[17px] text-Paragraph">
                            You will receive an email confirm your decision. Please note, that all boards you have created will br permanently erased
                        </p>
                        <button className="bg-gray-500/50 hover:bg-Secondary text-white font-bold py-1 px-4 rounded" type="submit">Save</button>
                        <button className="bg-Primary hover:bg-Secondary text-white font-bold py-1 px-4 rounded" type="submit">Save</button>
                    </div>
                    <div className="mb-4 bg-yellow-500">
                        1
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}