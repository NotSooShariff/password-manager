'use client'
import React from 'react'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation'
import { auth } from '@/utils/firebase'

const Header = () => {
    const router = useRouter()
    const [user, loading] = useAuthState(auth)
    const HandleRedirect = () =>{
        if(user){
            router.push('/dashboard')
        } else{
            router.push('/auth/register')
        }
    }
    return(
        <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg> */}
            {/* <svg className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full z-10" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="2048" height="2048" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="m539.705 674.985 129.639-28.413 18.149-39.578-.089-.089c3.777-8.238 10.612-14.104 18.544-16.872l14.865-6.353 755.515 436.502c-23.45 74.902-51.98 140.908-83.121 198.848L513.476 710.967l-.157-1.971-.038.002c-1.292-16.605 10.333-31.236 26.423-34.012zm217.56-106.883 254.184-108.625-.03-.07c9.088-3.883 18.973-3.235 27.136.932l305.442 130.528.076-.05c8.509 3.636 14.629 10.525 17.533 18.595l17.04 37.16 130.91 28.691.1-.008c16.436 3.602 27.13 19.241 24.85 35.631-8.187 103.524-25.458 195.873-48.845 278.05L757.265 568.1zm620.499 678.643c-40.278 69.8-84.066 127.002-126.411 173.241l-676.932-391.024c-26.322-81.93-46.569-174.665-57.415-279.323l860.757 497.106zm-148.952 197c-102.418 104.161-190.748 144.039-191.316 144.304l.035.12c-9.9 4.622-20.957 3.737-29.723-1.392-28.663-13.87-283.374-145.624-417.623-511.929l638.627 368.898z" fill="#424242" fill-rule="nonzero"/><path d="M1037.52 1789zm421.869-1349.65-420.834-179.843c-8.164-4.167-18.05-4.815-27.137-.932l.03.07L590.563 438.51c-7.934 2.767-14.774 8.635-18.553 16.875l.087.09-27.471 59.906-184.603 40.458c-16.092 2.777-27.716 17.408-26.424 34.013l.038-.003c70.931 910.593 654.397 1188.73 676.193 1198.84 8.404 4.141 18.54 4.576 27.685.296 2.528-1.169 603.86-272.79 676.668-1197.25 2.278-16.39-8.414-32.028-24.85-35.63l-.1.008-185.874-40.738-26.362-57.487c-2.905-8.07-9.025-14.958-17.533-18.595l-.076.05zm-773.52 124.461 283.666-121.224-.03-.07 29.336-12.536c16.954-7.246 35.521-6.233 52.286.932l289.453 123.696.075-.052 15.99 6.834c15.755 6.733 26.998 19.314 34.044 34.682l10.39 22.656 110.632 24.248.1-.008 4.69 1.027c32.35 7.09 53.375 37.671 49.813 70.356-10.318 94.674-23.771 191.603-49.88 283.342l-2.127 7.474.21.122-2.688 8.588-6.631 23.303-.583-.337c-21.77 68.117-49.36 134.326-83.226 197.334l-.332.618.407.235-7.78 13.482-7.914 14.725-.437-.253c-35.733 61.888-77.65 120.193-125.524 173.264l.794.459-17.169 17.46-5.84 6.378-.274-.159-5.695 5.791c-41.911 42.625-88.443 81.975-138.37 114.941-11.798 7.79-24.608 15.904-37.61 23.242l.343 1.166-24.925 11.636c-18.752 8.754-40.203 7.51-58.321-2.155-64.728-34.531-123.001-78.665-176.033-129.306-116.231-110.99-201.41-249.326-256.573-399.845l-30.37-82.864 3.939 2.276c-23.977-82.362-39.69-167.02-48.532-252.333l-1.041-10.056-.312.019-.945-12.138-4.165-40.191 3.98 2.298c5.423-24.207 24.942-43.617 50.16-49.143l114.054-24.997 2.222-4.846-.088-.087 9.274-20.23c5.922-12.916 15.833-22.792 27.983-29.509l-.425-.246z" fill="#424242"/><path fill="none" d="M0 0h2048v2048H0z"/></svg> */}
            <span className="ml-3 text-xl">Monolith</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-white">Home</a>
            <a className="mr-5 hover:text-white">Features</a>
            <a className="mr-5 hover:text-white">Usage</a>
            <a className="mr-5 hover:text-white">Team</a>
            </nav>
            <button onClick={HandleRedirect} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">{!user && (<div>Try Now</div>)}{user && (<div>Dashboard</div>)}
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
            </button>
        </div>
        </header>
    )
}

export default Header