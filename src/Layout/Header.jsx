// import { useState } from "react";
import Canvas from "../components/Canvas";

export default function Header() {
    return (
        <section className="bg-gray-900 backdrop-filter backdrop-blur-lg relative overflow-hidden z-5 pt-20">
            <Canvas className="absolute top-0 left-0 w-full h-full z-0"/>
            <div className="py-10 px-5 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 relative z-10">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white">
                    Hi, my name is <span className="text-orange-400">Sloan</span>
                </h1>
                <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl lg:text-5xl text-white">I'm a <span className="text-orange-400">Software Developer</span></h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Born in Michigan, lived in Japan, I am a global citizen that is passionate about creating things with code, langauge and most other mediums</p>
                <a href="#" className="inline-flex justify-center items-center mt-3 px-4 text-base font-medium text-center text-white rounded-lg bg-primary-700">
                    <svg className="ml-2 mr-1 w-10 h-10 animate-arrow-fade" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10.707l5 5 5-5a1 1 0 00-1.414-1.414L11 12.586V3a1 1 0 10-2 0v9.586l-3.293-3.293A1 1 0 005 10.707z"></path>
                    </svg>
                </a>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-gray-900/80 backdrop-filter backdrop-blur-lg z-0"></div>
        </section>
    );
}