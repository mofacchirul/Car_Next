"use client";

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect } from 'react';

const Navber = () => {
    const {data,status}=useSession()
    console.log(data);
    
    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const links = (
        <>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/mybooking">My Booking</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </>)

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       {
                        links
                       }
                    </ul>
                </div>
          <button className='font-bold text-xl lg:text-2xl'>
           Car
          </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="flex-none">
                <button className="btn btn-sm"
                    onClick={() => setTheme("light")}>
                    ☀️ Light
                </button>
                <button className="btn btn-sm ml-2"
                    onClick={() => setTheme("dark")}>
                    🌙 Dark
                </button>
            </div>
            <div className="navbar-end">
            {
                status === "authenticated" ? (
                <>
           
             <button onClick={()=>signOut()} className="btn">Login Out</button>
           
                </>) : (
                    <>
                    <Link href={"/singup"}>
                    <button className="btn">Singup</button>
                    </Link>
                    </>
                )
            }
            </div>
        </div>
    );
};

export default Navber;
