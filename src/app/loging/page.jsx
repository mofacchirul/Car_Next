"use client"
import Link from 'next/link';
import { signIn } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import Socal from '../socal/socal';

const loging = () => {
    const router = useRouter()
    const Handlelogin = async (e) => {
        e.preventDefault(); 
        const email = e.target.email.value;
        const password = e.target.password.value;
try{
    await signIn("credentials", {email,password, redirect: false})
    router.push("/")
    toast.success("logged in successfully!",{
        position: "top-right"
      })
}
 catch(err){
   
    toast.error("Error Notification !", {
        position: "top-center",
      });
    e.target.reset()
 }   
    
    }
    return (
        <div className='border my-16 border-gray-500 p-3 w-full  rounded-2xl max-w-lg mx-auto flex flex-col items-center   justify-center'>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Login
          </h1>
            <form onSubmit={Handlelogin} className="w-full max-w-lg space-y-8">
                <label className="form-control w-full">
                    <div className="label w-full">
                        <span className="label-text font-bold">Email</span>
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        required
                    />
                </label>
                <label className="form-control w-full">
                    <div className="label mt-3 w-full">
                        <span className="label-text font-bold">Password</span>
                    </div>
                    <input
                        type="password"
                        name="password"
                        placeholder="Type here"
                        className="input input-bordered w-full"
                        required
                    />
                </label>
                <button type="submit" className="w-full h-12 mt-3 rounded-3xl bg-[#FF3811] text-white font-bold">
                    Sign In
                </button>
                       
                       {/* <Socal>
                        
                       </Socal> */}

               
            </form>
            <div>

            <p className="text-center">Or Sign In with</p>
            <Socal></Socal>
                <p className="text-center">
                    Don't have an account?{" "}
                    <Link href="/singup" className="text-[#FF3811] font-bold">
                        Signup
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default loging;