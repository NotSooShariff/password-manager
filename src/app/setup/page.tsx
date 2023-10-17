"use client"
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation"
import { useState } from 'react'
import PortalNavigation from '@/components/globals/nav';
import PortalSidebar from '@/components/globals/sidebar';
import Link from 'next/link';
import UploadForm from '@/components/setup/upload';

export default function Page() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter()

    if(!user){
        route.push('/auth/register')
    }else{
    if(loading){ return(
        <h1>Loading...</h1>
    ) } else{
    return(
        <>
        <PortalNavigation />
        <PortalSidebar/>

        <div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8  rounded-lg dark:border-gray-700 mt-14">
        <h2 className=" text-xs text-blue-500 tracking-widest font-medium title-font mb-1">ACCOUNT INITIALISATION</h2> 
        <h1 className="text-3xl font-medium title-font mb-4 text-gray-40">Follow these Steps to Import your Passwords </h1>
        <p className="leading-relaxed text-base text-gray-400">Ensure that you are on a Chromium based Browser like Google Chrome, Microsoft Edge, Canary etc.</p> 
        <section className="text-gray-400 rounded-lg bg-gray-900 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
            <div className="lg:w-full md:w-full md:pr-10 md:py-6">

                {/* Step 1 */}
                <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>
                    <p className="leading-relaxed">Head over to the Chrome Password Manager by typing <span className='bg-gray-700 text-white-700 font-mono px-2 py-1 rounded'>chrome://password-manager/settings</span> in your URL bar.</p>
                    <img className="rounded-lg mt-6" src="https://raw.githubusercontent.com/NotSooShariff/Password-Manager/main/src/assets/images/setup1hdx.png" alt="" />
                </div>
                </div>

                {/* Step 2 */}
                <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>
                    <p className="leading-relaxed">Look for <span className='bg-gray-700 text-white-700 font-mono px-2 py-1 rounded'>Export Passwords</span> and click <span className='bg-gray-700 text-white-700 font-mono px-2 py-1 rounded'>Download File</span></p>
                    <img className="rounded-lg mt-6" src="https://raw.githubusercontent.com/NotSooShariff/Password-Manager/main/src/assets/images/exportpass.png" alt="" />
                </div>
                </div>

                {/* Step 3 */}
                <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <circle cx="12" cy="5" r="3"></circle>
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>
                    <p className="leading-relaxed">Upload the File that you just downloaded here so that we can store it in our database and analyse them for strengths and leaks</p>
                    <div className="mt-4 rounded-lg">
                        <UploadForm/>
                    </div>
                </div>
                </div>

                {/* Step 4 */}
                <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>
                    <p className="leading-relaxed">Download our Chrome Extension from below and login with the following code: <span className='bg-gray-700 text-white-700 font-mono px-2 py-1 rounded'>MONO-DSJHBSDH832792</span></p>
                </div>
                </div>

                {/* Step Final */}
                <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                </div>
                <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>
                    <p className="leading-relaxed">You are ready to start using our application.</p>
                </div>
                </div>
            </div>
                </div>
        </div>
        </section>
        </div>
        </div>
        </>
    )
    }
    }
}