'use client'
import React from 'react'
import { useState, useEffect } from 'react';

type IPInfo = {
    dns: {
      ip: string;
      geo: string;
    };
    edns: {
      ip: string;
      geo: string;
    };
};

const IPBanner = () =>{
    const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch('http://edns.ip-api.com/json')
        .then((response) => response.json())
        .then((data) => {
          setIpInfo(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching IP info:', error);
          setLoading(false);
        });
    }, []);
    
    return (
        <div className="bg-yellow-500 rounded-lg my-4 p-4 flex items-center mb-4">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
            </svg> */}
            <p className="text-yellow-900 text-sm">
              {loading ? (
                'Loading...'
              ) : (
                <>
                  Our system suggests your IP isn't protected well enough. Your IP is {ipInfo?.dns.ip} which is based in {ipInfo?.dns.geo}. Login now to protect your digital identity better.
                </>
              )}
            </p>
        </div>
      );
}

export default IPBanner