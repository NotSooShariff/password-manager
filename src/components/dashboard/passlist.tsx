import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation"
import { useState, useEffect } from 'react';
import PortalNavigation from '@/components/globals/nav';
import PortalSidebar from '@/components/globals/sidebar';
import Link from 'next/link';
import axios from 'axios';
import { SHA1 } from 'crypto-js';


type Entry = {
    url: string;
    username: string;
    password: string;
    note: string;
};

const PasswordList = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSetupDone, setIsSetupDone] = useState(false);
    const [isPasswordView, setPasswordView] = useState(false);
    const baseUrl = "http://localhost:5000";
    const [entries, setEntries] = useState<Entry[]>([]); // Specify the type 'Entry[]'

    const [countdown, setCountdown] = useState(10);

    const startCountdown = () => {
        let timer = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount > 1) {
                    return prevCount - 1;
                } else {
                    clearInterval(timer);
                    setPasswordView(false);
                    return 10; // Reset the countdown to 10 seconds
                }
            });
        }, 1000);
    };

    useEffect(() => {
        if (isPasswordView) {
            startCountdown();
        }
    }, [isPasswordView]);

    useEffect(() => {
        if (user) {
            const email = user.email
            axios.get(`${baseUrl}/takeout`, {
                headers: {
                    email: email,
                },
            })
            .then((response) => {
                const { entries } = response.data;
                if (entries.length > 0) {
                    setIsSetupDone(true);
                    setEntries(entries);
                }
            })
            .catch((error) => {
                console.error('Error making the request:', error);
            });
        }
    }, [user]);

    
    function extractRootDomain(url:any) {
        let domain;

        if (url.indexOf("://") > -1) {
            domain = url.split('/')[2];
        } else {
            domain = url.split('/')[0];
        }

        domain = domain.split(':')[0];

        domain = domain.split('.');
        if (domain.length > 2) {
            domain = domain[domain.length - 2] + '.' + domain[domain.length - 1];
        }
        return domain;
    }

    function togglePasswords(){
        if(isPasswordView){
            setPasswordView(false)
        }else{
            setPasswordView(true)
            timeTick()
        }
    }

    const timeTick = () => {
        setTimeout(() => {
          setPasswordView(false);
        }, 10000);
    }

    return (
        <>  
            <p className={`text-red-500 px-2 py-3 dark:text-red-500 ${isPasswordView? 'block' : 'hidden'}`}>
                    Your passwords will be hidden again in {countdown} seconds in accordance with the security policy.
            </p>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            URL
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Username
                        </th>
                        <th scope="col" className="px-6 py-3">
                        { !isPasswordView && ("Password Hash") }{ isPasswordView && ("Password")}
                        </th>
                        <th scope="col" className={`px-6 py-3 ${isPasswordView ? 'block' : 'hidden'}`}>
                            Security
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {isSetupDone && entries.map((entry, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"> <a href={entry.url} target='_blank'>{entry.note}</a> </td>
                            <td className="px-6 py-4">{entry.username}</td>
                            <td className="px-6 py-4">{ !isPasswordView && (SHA1(entry.password).toString()) } { isPasswordView && (entry.password)} </td>
                            <td className={`px-6 py-4 ${ isPasswordView ? 'block' : 'hidden'}`}>
                                SHA-1
                            </td>
                            <td className='text-blue-400 px-6 py-4'><a onClick={togglePasswords}>{ !isPasswordView && ("VIEW") }{ isPasswordView && ("HIDE")}</a></td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        </>
    )
}

export default PasswordList;
