'use client'
import React from 'react'
import Link from 'next/link';
import HeroImage from '@/assets/images/hero.png'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
    return(
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">We make securing your data {' '}
                    <br className="hidden lg:inline-block"/>
                    <Typewriter
                        words={['Faster', 'Easier', 'Simpler']}
                        loop
                        cursor
                        cursorStyle='_'
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </h1>
                <p className="mb-8 leading-relaxed">Safeguarding your digital world has never been this effortless. Experience the future of online protection with our all-in-one security solution. Manage passwords, monitor data leaks, protect your digital identity, and more. It's time to take control.</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"><Link href="/login">GitHub</Link></button>
                    <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Documentation</button>
                </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src={HeroImage.src}></img>
                </div>
            </div>
            </section>
        </>
    );
}

export default HeroSection