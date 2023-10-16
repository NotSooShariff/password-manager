import React from 'react'
import { FiGithub , FiMail, FiInstagram } from 'react-icons/fi'


const TeamSection = () => {
    return(
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the team that made it all possible and the diverse range of skills they bring to the table. Together, we've crafted a solution that simplifies and fortifies your digital life. </p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/200x200"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Owais Shariff</h2>
                    <h3 className="text-gray-500 mb-3">Fullstack Developer</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui et.</p>
                    <span className="inline-flex">
                    <FiGithub className="m-1 text-xl"/>
                    <FiMail className="m-1 text-xl"/>
                    <FiInstagram className="m-1 text-xl"/>
                    </span>
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/201x201"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Yeswanth Prasad</h2>
                    <h3 className="text-gray-500 mb-3">AI/ML Developer</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui et.</p>
                    <span className="inline-flex">
                    <FiGithub className="m-1 text-xl"/>
                    <FiMail className="m-1 text-xl"/>
                    <FiInstagram className="m-1 text-xl"/>
                    </span>
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/204x204"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Prabhav Mishra</h2>
                    <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui et.</p>
                    <span className="inline-flex">
                    <FiGithub className="m-1 text-xl"/>
                    <FiMail className="m-1 text-xl"/>
                    <FiInstagram className="m-1 text-xl"/>
                    </span>
                </div>
                </div>
            </div>
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="https://dummyimage.com/206x206"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Pratham Vidhani</h2>
                    <h3 className="text-gray-500 mb-3">Designer</h3>
                    <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dui et.</p>
                    <span className="inline-flex">
                    <FiGithub className="m-1 text-xl"/>
                    <FiMail className="m-1 text-xl"/>
                    <FiInstagram className="m-1 text-xl"/>
                    </span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
 
export default TeamSection