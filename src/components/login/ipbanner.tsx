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
            <p className="text-yellow-900 text-sm">
              {loading ? (
                'Loading...'
              ) : (
                <>
                  Our system suggests your IP isn&apos;t protected well enough. Your IP is {ipInfo?.dns.ip} which is based in {ipInfo?.dns.geo}. Login now to protect your digital identity better.
                </>
              )}
            </p>
        </div>
      );
}

export default IPBanner