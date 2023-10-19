"use client"
import React, { useState } from 'react'
import { auth } from '@/utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRouter } from 'next/navigation'


const PortalNavigation = () =>{
    const [user, loading] = useAuthState(auth);
    const route = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleUserMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSignout = () =>{
        auth.signOut()
        route.push('/')
    }

    const handleUnauth = () =>{
        route.push('/auth/login')
    }
    
    return(
        <>
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
            <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
                <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-l text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open sidebar</span>
                    <svg className="w-8 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </button>
                <a href="/dashboard" className="flex ml-2 md:mr-24">
                <span className="self-center text-2xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Monolith</span>
                </a>
            </div>
            <div className="flex items-center">
                <div className="flex items-center ml-5">
                    <div>
                    <button onClick={toggleUserMenu} type="button" className=" flex text-l bg-gray-900 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                        <span className="sr-only">Open user menu</span>
                        <img onLoad={!user ? handleUnauth : undefined} className="w-8 h-8 rounded-full" src={user ? user.photoURL ?? "https://dummyimage.com/201x201" : "https://dummyimage.com/201x201"} alt="user photo"/>
                    </button>
                    </div>
                    <div className="absolute top-full right-5 z-50 p-2">
                    <div className={`border-2 border-gray-700 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow ${isMenuOpen ? 'block' : 'hidden'} dark:bg-gray-900 dark:divide-gray-600`} id="dropdown-user">
                    <div className="px-4 py-3" role="none">
                        <p className="text-l text-gray-900 dark:text-white" role="none">
                        {user && (user.displayName)} 
                        </p>
                        <p className="text-l font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                        {user && (user.email)}
                        </p>
                    </div>
                    <ul className="py-1" role="none">
                        <li>
                        <a href="#" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                        </li>
                        <li>
                        <a href="#" className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Passwords</a>
                        </li>
                        <li>
                        <a onClick={handleSignout} className="block px-4 py-2 text-l text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                        </li>
                    </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </nav>
        
        </>
    )
}

export default PortalNavigation