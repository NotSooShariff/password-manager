import { useState } from 'react';
import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs'
import { PiWarningBold } from 'react-icons/pi'

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type === 'text/csv') {
        const reader = new FileReader();
        reader.onload = (event) => {
          if (event.target) {
            const csvContent = event.target.result as string;
            console.log('CSV Content:', csvContent);

            // Convert the CSV content to a JSON format
            const lines = csvContent.split('\n');
            const header = lines[0].split(',');
            const jsonData = [];
            for (let i = 1; i < lines.length; i++) {
              const data = lines[i].split(',');
              if (data.length === header.length) {
                const entry: CSVEntry = {
                  name: data[0],
                  url: data[1],
                  username: data[2],
                  password: data[3],
                  note: data[4],
                };
                jsonData.push(entry);
              }
            }

            // Store the JSON data in localStorage
            localStorage.setItem('csvData', JSON.stringify(jsonData));

            // Log the JSON data
            console.log('CSV Data as JSON:', jsonData);

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