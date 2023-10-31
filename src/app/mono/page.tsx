"use client"
import React, { useEffect, useState } from 'react';
import PortalNavigation from "@/components/globals/nav";
import PortalSidebar from "@/components/globals/sidebar";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';
import axios from "axios";
import { useRouter } from 'next/navigation';
import { RiLockPasswordLine } from 'react-icons/ri'
import BannerImage from '@/assets/images/constr';
import { IoBuild } from 'react-icons/io5'
interface Entry {
  url: string;
  username: string;
  password: string;
  note: string;
}

export default function Page() {
  const [user, loading] = useAuthState(auth);
  const [entries, setEntries] = useState<Entry[]>([]); // Define entries in state with a type definition
  const baseUrl = "http://localhost:5000";
  const route = useRouter();

  const [submittedData, setSubmittedData] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inputValue = e.target.elements["default-search"].value;
    setSubmittedData(inputValue);
  };

  return (
    <>
      <PortalNavigation />
      <PortalSidebar />

      <div className="p-4 w-9/12 sm:ml-64">
        <div className="translate-x-7 p-8 rounded-lg dark:border-gray-700 mt-14">
          <h1 className="text-4xl font-bold pb-4"> MonoAI 🧠 </h1>
          <p className="pb-4">
            Experience the power of MonoAI - your dedicated assistant for
            personal security and identity protection. Predict the amount of
            time it takes threat actors to crack your passwords, check it's
            security against leaked passwords, and chat with an AI personal
            assistant for advice on how to guard your online presence better.
          </p>

          <div className="mt-3 grid grid-cols-2 gap-4 md:grid-rows-2">
            <div className="flex flex-col ">
              <div className="px-4 py-4 mb-2 items-center justify-center rounded h-auto  bg-gray-800 border-gray-500">
                <p>
                  <strong>🔐 Password Strength Check</strong>
                </p>
                <div className="block mt-3 w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <p className="text-gray-300">
                    Manually validate a password with our machine learning
                    algorithms by using promps
                  </p>{" "}
                  <br />
                  <p className="text-gray-300">
                    <strong>Our Prediction:</strong>{" - "}
                  </p>
                </div>
                <form className="my-3">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter a strong password..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Analyse
                    </button>
                  </div>
                </form>
              </div>
              <div className="px-4 py-4 mb-2 items-center justify-center rounded h-auto  bg-gray-800 border-gray-500">
                <p>
                  {" "}
                  <strong>⏳ Password Immunity Check</strong>
                </p>
                <div className="block mt-3 w-full p-4 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <p className="text-gray-300">
                    Manually validate a password with our machine learning
                    algorithms by using promps
                  </p>{" "}
                  <br />
                  <p className="text-gray-300">
                    <strong>Our Prediction:</strong>{" - "}
                  </p>
                </div>
                <form className="my-3">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Enter a strong password..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Analyse
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="flex flex-col rounded bg-gray-800 border-gray-500">
              <p className="text-center px-auto py-auto mx-auto my-auto align-center justify-center">
              <IoBuild className="text-3xl text-center px-auto py-auto mx-auto my-4 align-center justify-center"/>
              
                <strong>The chat with AI feature is under development </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
