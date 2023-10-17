"use client"
import { useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";
import PortalNavigation from "@/components/globals/nav";
import PortalSidebar from "@/components/globals/sidebar";

export default function Page(){
    const [fetchError, setFetchError] = useState<string | null>(null)
    const [userData, setUserData ] = useState<any[]>([]);

    return(
        <>
        <PortalNavigation/>
        <PortalSidebar/>
        {/* <div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8 rounded-lg dark:border-gray-700 mt-14"></div>
        </div>
        <p className="font-3xl text-white-600">Your data:</p>
        {fetchError && (<p> {fetchError}</p>)}
        {userData && (<p>{userData}</p>)} */}
        

<div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8 rounded-lg dark:border-gray-700 mt-14">
            <h1 className='text-4xl font-bold pb-4'>Hello 👋 </h1>
            {fetchError && (<p className="text-4xl font-bold text-white-100"> {fetchError}</p>)}
            <div className="userdata">
            {userData.map((user) => (
                <div key={user.userid}>
                    <h1 className="text-4xl font-bold text-white-100">{user.userid}</h1>
                    <pre>{JSON.stringify(user.json, null, 2)}</pre>
                </div>
            ))}


            </div>
            <div className="pt-4 grid grid-cols-3 gap-4 mb-4">
                
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
            <div className="flex items-center justify-center h-48 mb-4 rounded border-2 border-gray-500 border-dashed">
                <p className="text-2xl text-gray-400 dark:text-gray-500">
                    <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                    </svg>
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
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


