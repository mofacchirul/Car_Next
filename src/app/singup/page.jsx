"use client";  // Ensure this is a Client Component
import React from 'react';
import { resisterUser } from '../actions/Auth/resisterUser';
import Link from 'next/link';
import Socal from '../socal/socal';





const Singuppage = () => {
 
    const handlesingup = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            await resisterUser({ name, email, password });
            toast.success("logged in successfully!",{
                position: "top-right"
              });
            e.target.reset();
        } catch (error) {

            toast.error("Something went wrong. Please try again.");
        }
    
    };

    return (
        <div className='border pmy-16 border-gray-500 p-3 w-full  rounded-2xl max-w-lg mx-auto flex flex-col items-center   justify-center'>
           <h2 className="text-2xl font-bold mb-6 text-center">Register</h2> 
            <form onSubmit={handlesingup} className=""> 
             
                <label className="form-control   w-full">
                    <div className="label w-full">
                        <span className="label-text  font-bold">Name</span>
                    </div>

                    <input
                        type="text"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        name="name"
                    />
                </label>
                <label className="form-control mt-4 w-full">
                    <div className="label mt-4 w-full ">
                        <span className="label-text  font-bold">Email</span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                    />
                </label>
                <label className="form-control  w-full">
                    <div className="label mt-4 w-full">
                        <span className="label-text font-bold">Password</span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input  input-bordered w-full"
                    />
                </label>
                <button type="submit" className="w-full h-12 mt-4 bg-[#FF3811] rounded-3xl text-white font-bold">
                    Sign Up
                </button>
          
            </form> 
            <div>
            <p className="text-center ">Or Sign In with</p>
            <Socal></Socal>
     <p className="text-center">
         Don't Have an account?{" "}
         <Link href="/loging" className="text-[#FF3811] font-bold">
             Login
         </Link>
     </p> 
            </div>
        </div>
    );
};

export default Singuppage;
