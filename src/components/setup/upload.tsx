import { useState, useEffect } from 'react';
import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs'
import { PiWarningBold } from 'react-icons/pi'
import supabase from '@/config/supabaseClient';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/utils/firebase';

const querystring = require('querystring'); // Import the querystring module

interface CSVEntry {
  name: string;
  url: string;
  username: string;
  password: string;
  note: string;
}

const UploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [formattingIncorrect, setReuploadFile] = useState(false);
  const [user, loading] = useAuthState(auth);
  const baseUrl = "http://localhost:5000"

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const selectedFile = e.target.files?.[0];

  if (selectedFile && user) {
      if (selectedFile.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            const csvContent = event.target.result as string;
            console.log('CSV Content:', csvContent);
            console.log('CSV Content Type:', typeof csvContent);
            const rows = csvContent.split('\n');

            // Extract the header (first row)
            const header = rows[0].split(',');
            
            // Process each entry (from the second row onwards)
            for (let i = 1; i < rows.length; i++) {
              const data = rows[i].split(',');
              if (data.length === header.length) {
                const entry = {
                  websitename: data[0],
                  url: data[1],
                  username: data[2],
                  password: data[3],
                  note: data[4],
                };
                
                if(data[4].length > 3){
                  var note = `The note for ${data[0]} is ${data[4]}`
                } else {
                  var note = data[0]
                }
                const requestData = {
                  useremail: user.email,
                  url: data[1],
                  username: data[2],
                  password: data[3],
                  note: note,
                };
                
                // URL-encode the requestData object
                const encodedData = querystring.stringify(requestData);
                
                // Send a POST request to the store endpoint
                axios.post(`${baseUrl}/store`, encodedData, {
                  headers: {
                    'Content-Type': 'application/x-www-form-urlencoded', // Set the content type
                  },
                })
                  .then(response => {
                    // Handle the response from the server
                    console.log('Data stored successfully:', response.data);
                  })
                  .catch(error => {
                    // Handle any errors that occur during the request
                    console.error('Error:', error);
                  });

                  
                
              }
            }

                


            setUploadComplete(true);
          }
        };
        reader.readAsText(selectedFile);
      } else {
        setReuploadFile(true);
        console.error('File is not a CSV');
      }
    }
  };

  return (
    <div>
        
    <div id="pending" className={`flex items-center justify-center w-full ${uploadComplete ? 'hidden' : 'block'}`}>
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div className="flex flex-col items-center justify-center pt-5 pb-5">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className={`text-xs text-gray-500 dark:text-gray-400 ${formattingIncorrect ? 'hidden' : 'block'}`}>.CSV (MAX. 2GB)</p>
                <div className={`flex align-items-center text-xs text-red-600 dark:text-red-700 ${formattingIncorrect ? 'block' : 'hidden'}`}><PiWarningBold className="translate-y-[1px] mx-2"/> <p><span className='font-semibold'>Please Upload Again.</span> Only CSV File Format.</p></div>

            </div>
            <input id="dropzone-file" type="file" name="file" onChange={handleFileChange} className="hidden" />
        </label>
    </div> 
    <div id="complete" className={`flex rounded-lg border-gray-500 border-2 border-dashed items-center justify-center w-full ${uploadComplete ? 'block' : 'hidden'}`}>
        <div className="flex flex-col items-center justify-center pt-5 pb-5">
            {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg> */}
            <BsShieldFillCheck className="w-10 h-10 my-5 text-green-500"/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Completed Successfully</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Your passwords have been secured</p>
        </div>
    </div> 

    </div>
  );
}

export default UploadForm