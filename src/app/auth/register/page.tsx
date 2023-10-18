"use client";
import IPBanner from "@/components/login/ipbanner";
import React, { useEffect, useState } from "react";
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineVpnKey } from 'react-icons/md';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '@/utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/navigation";
import supabase from "@supabase/supabase-js"
import AuthForm from '@/components/login/supalog'


    
  



export default function Login() {
  const router = useRouter()
  const [user, loading] = useAuthState(auth)

  if(user){
    router.push('/dashboard')
  }
  
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Auth Wala Function
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin =async () => {
    try{
      const result = await signInWithPopup(auth, googleProvider)
      console.log(result.user)
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetch("http://edns.ip-api.com/json")
      .then((response) => response.json())
      .then((data) => {
        const ip = data.dns.ip;
        fetch(`http://ip-api.com/json/${ip}`)
          .then((response) => response.json())
          .then((geoData) => {
            setLatitude(geoData.lat);
            setLongitude(geoData.lon);
          })
          .catch((error) =>
            console.error("Error fetching geolocation:", error)
          );
      })
      .catch((error) => console.error("Error fetching IP location:", error));
  }, []);

  return (
    <>
    <div className="h-screen overflow-hidden scroll-hidden"> 
      
        <section className="text-gray-400 bg-gray-900 body-font relative">
          <div className="absolute inset-0 bg-gray-900">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6191130.394310985!2d78.61389528946275!3d21.53769374110267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2ssa!4v1697369611251!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{
                  filter: 'grayscale(1) contrast(1.2) opacity(0.16)',
                }}
              ></iframe>
            </div>
          </div>
          <div className="container px-5 py-24 mx-auto flex -translate-y-12">
            <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
              <h2 className="text-white text-lg mb-1 font-medium title-font">
                Welcome to Monolith!
              </h2>
              <p className="leading-relaxed mb-5">
                Already signed up? <Link  className="underline text-blue-600" href="/auth/login">Log In</Link> to your existing account
              </p>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>  
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-400"
                >
                  Master Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div> 

              <button className="text-white bg-indigo-500 border-0 my-2 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <div className="flex items-center justify-center">
                <MdOutlineVpnKey className="mx-3"/> 
                  Secure Login
                </div>
              </button>

              {/* Supabase Magic Link Setup to Try Later */}
              {/* <div className="row">
                    <div className="col-6">
                      <h1 className="header">Supabase Auth + Storage</h1>
                      <p className="">
                        Experience our Auth and Storage through a simple profile management example. Create a user
                        profile and upload an avatar image. Fast, simple, secure.
                      </p>
                    </div>
                    <div className="col-6 auth-widget">
                      <AuthForm />
                    </div>
              </div> */}
              <button onClick={GoogleLogin} className="text-white bg-gray-800 border-0 my-2 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">
                <div className="flex items-center justify-center">
                <FcGoogle className="mx-3"/> Login with Google
                </div>
              </button>
              <a className="text-xs self-center text-gray-400 text-opacity-90 mt-3">
                Forgot Password?{" "}
                <span className="underline">Click Here to Verify via Email</span>
              </a>
      
              <IPBanner />
            </div>
          </div>
        </section>
    </div>
    </>
  );
}
