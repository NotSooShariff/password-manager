"use client"
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation"
import { useState, useEffect } from 'react'
import PortalNavigation from '@/components/globals/nav';
import PortalSidebar from '@/components/globals/sidebar';
import Link from 'next/link';
import axios from 'axios'

export default function Page() {
    const [user, loading] = useAuthState(auth);
    const route = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSetupDone, setIsSetupDone] = useState(false);
    const baseUrl = "http://localhost:5000"

    const toggleUserMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignout = () =>{
        auth.signOut()
        route.push('/')
    }


    useEffect(()=>{
        if(user){    
            const email = 'owais.ahmed.shariff@gmail.com'; // The email you want to query
            axios.get(`${baseUrl}/takeout`, {
            headers: {
                email: email,
            },
        })
        .then((response: { data: { entries: any; }; }) => {
            const { entries } = response.data;
            if(entries.length>0) setIsSetupDone(true)
            if (entries && entries.length > 0) {
            entries.forEach((entry: { url: any; username: any; password: any; note: any; }) => {
                const { url, username, password, note } = entry;
                
                console.log('my url is', url); // Reading column 1
                console.log('my username is', username); // Reading column 2
                console.log('my password is', password); // Reading column 3
                console.log('my note is', note); // Reading column 4
                console.log(''); // Add a separator between entries for clarity
            });
            } else {
            console.log('No entries found for the provided email.');
            }
        })
        .catch((error: any) => {
            console.error('Error making the request:', error);
        });
    }
    }, [user])

    

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
        
        
        {/* Useless Grid */}
        <div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8 rounded-lg dark:border-gray-700 mt-14">
            <h1 className='text-4xl font-bold pb-4'>Hello {user.displayName} 👋</h1>
            <p className='pb-4'>{ isSetupDone ? "Here is your personal security briefing" : `There doesnt seem to be much for you to do here. Complete the setup to get your dashboard up and running!`}</p>
            <button onClick={()=>route.push('/setup')} className={`py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${isSetupDone?'hidden': 'block'}`}>Complete Setup</button>
            
            {/* Triplets */}
            <div className={`pt-4 grid grid-cols-3 gap-4 mb-4 ${isSetupDone?'hidden': 'block'}`}>
                <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>

                <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center h-24 rounded border-2 border-gray-500 border-dashed">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>

            {/* Big Block */}
            <div className={`flex items-center justify-center h-48 mb-4 rounded border-2 border-gray-500 border-dashed  ${isSetupDone?'hidden': 'block'}`}>
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>

            {/* Grid of Two */}
            <div className={`grid grid-cols-2 gap-4 mb-4  ${isSetupDone?'hidden': 'block'}`}>
                <div className="flex items-center justify-center rounded h-28 border-2 border-gray-500 border-dashed">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
                <div className="flex items-center justify-center rounded h-28 border-2 border-gray-500 border-dashed">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                    </p>
                </div>
            </div>

            

        </div>
        </div>        
        </>
    )
    }
    }
}