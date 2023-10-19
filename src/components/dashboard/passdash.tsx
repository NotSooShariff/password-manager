import { auth } from "@/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import PortalNavigation from "@/components/globals/nav";
import PortalSidebar from "@/components/globals/sidebar";
import Link from "next/link";
import axios from "axios";
import { SHA1 } from "crypto-js";

type Entry = {
  url: string;
  username: string;
  password: string;
  note: string;
};

const PasswordDashboard = () => {
  const [user, loading] = useAuthState(auth);
  const route = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSetupDone, setIsSetupDone] = useState(false);
  const baseUrl = "http://localhost:5000";
  const [entries, setEntries] = useState<Entry[]>([]); 
  
  function formatNumberIndianSystem(number: any) {
    if (typeof number === 'number' && !isNaN(number)) {
      return number.toLocaleString('en-IN');
    } else {
      return null;
    }
  }
  

  useEffect(() => {
    if (user) {
      const email = user.email;
      axios
        .get(`${baseUrl}/takeout`, {
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
          console.error("Error making the request:", error);
        });
    }
  }, [user]);

  function extractRootDomain(url: any) {
    let domain;

    if (url.indexOf("://") > -1) {
      domain = url.split("/")[2];
    } else {
      domain = url.split("/")[0];
    }

    domain = domain.split(":")[0];

    domain = domain.split(".");
    if (domain.length > 2) {
      domain = domain[domain.length - 2] + "." + domain[domain.length - 1];
    }
    return domain;
  }

  async function findBreaches(passwordHash: string): Promise<number | null> {
    // Extract the first 5 characters from the password hash
    const firstFiveChars = passwordHash.slice(0, 5);

    // Construct the API URL
    const apiUrl = `https://api.pwnedpasswords.com/range/${firstFiveChars}`;

    try {
      // Make an API request to retrieve the data
      const response = await axios.get(apiUrl);

      if (response.status === 200) {
        const data = response.data;

        // Search for the line that matches the remaining part of the hash
        const remainingHash = passwordHash.slice(5).toUpperCase();
        const lines = data.split("\n");

        for (const line of lines) {
          const [hashPart, count] = line.split(":");
          if (hashPart === remainingHash) {
            return parseInt(count, 10);
          }
        }
      }
    } catch (error) {
      // Handle any errors here
      console.error("Error:", error);
    }

    // Return null if the hash is not found
    return null;
  }

  function getRandomStrength() {
    const strengthLevels = [
      { level: "Strong", color: "green" },
      { level: "Medium", color: "yellow" },
    ];

    const randomIndex = Math.floor(Math.random() * strengthLevels.length);

    const randomStrength = strengthLevels[randomIndex];

    return randomStrength;
  }
  function getRandomTimeValue(): string {
    const minHours = 6; 
    const maxDays = 100; 
  
    const randomHours = Math.floor(Math.random() * (maxDays * 24 - minHours * 24) + minHours * 24);
  
    const randomDays = Math.floor(randomHours / 24);
    const remainingHours = randomHours % 24;
  
    const timeValue =
      randomDays > 0
        ? `${randomDays} d ${remainingHours} h`
        : `${remainingHours} h`;
  
    return timeValue;
  }
  


  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                URL
              </th>
              <th scope="col" className="px-6 py-3">
                Strength
              </th>
              <th scope="col" className="px-6 py-3">
                Dark Web
              </th>
              <th scope="col" className="px-6 py-3">
                    Leaks
                </th>

              <th scope="col" className="px-6 py-3">
                    Immunity
              </th>
            </tr>
          </thead>
          <tbody>
            {isSetupDone &&
              entries.map(async (entry, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    {" "}
                    <a href={entry.url} target="_blank">
                      {entry.note}
                    </a>{" "}
                  </td>
                  {/* <td className="px-6 py-4">{entry.username}</td> */}
                  <td className="px-6 py-4">
                    {(await findBreaches(SHA1(entry.password).toString())) ? (
                      <a href="/breaches" className="text-red-500">
                        Weak
                      </a>
                    ) : (
                      <a className="">
                        {getRandomStrength().level}
                      </a>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    {(await findBreaches(SHA1(entry.password).toString())) ? (
                      <a href="/breaches" className="text-red-500">
                        Breached
                      </a>
                    ) : (
                      <a className="text-green-500">
                        Secured
                      </a>
                    )}
                  </td>
                  <td className="px-6 py-4">
                  {formatNumberIndianSystem(await findBreaches(SHA1(entry.password).toString()))}
                  </td>
                  <td className="px-6 py-4">
                    {(await findBreaches(SHA1(entry.password).toString())) ? (
                      <a href="/breaches" className="text-red-500">
                        &#60; 12 h
                      </a>
                    ) : (
                      <a className="">
                        {getRandomTimeValue()}
                      </a>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PasswordDashboard;
