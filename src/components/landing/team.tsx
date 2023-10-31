import React from 'react'
import { FiGithub , FiMail, FiInstagram } from 'react-icons/fi'
import Image from "next/image"

const TeamSection = () => {
    return(
        <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">OUR TEAM</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the team that made it all possible and the diverse range of skills they bring to the table. Together, we&apos;ve crafted a solution that simplifies and fortifies your digital life. </p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/2">
                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <Image width={192} height={192} alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/owais.jpeg"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Owais Shariff</h2>
                    <h3 className="text-gray-500 mb-3">Fullstack Developer & Security Ops</h3>
                    <p className="mb-4">Our adept specialist in Development, Integrations, and Security Operations. He ensures that your password manager not only boasts an exceptional experience but also serves as a bastion of robust security.</p>
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
                <Image width={192} height={192} alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/yeshwanth.jpg"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Yeswanth Prasad</h2>
                    <h3 className="text-gray-500 mb-3">AI/ML Developer</h3>
                    <p className="mb-4">He is our Machine Learning Maestro, and the formidable intellect behind the AI sophistication within our password manager. He is dedicated to the precise training and continuous refinement of our machine learning models, heightening the security for your data. </p>
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
                <Image width={192} height={192} alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/prabhav.jpg"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Prabhav Mishra</h2>
                    <h3 className="text-gray-500 mb-3">Backend Developer</h3>
                    <p className="mb-4"> Prabhav is the driving force responsible for the intricate web of backend systems, APIs, and deployment that power our password manager. His meticulous oversight guarantees the secure storage and transmission of your data.</p>
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
                <Image width={192} height={192} alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src="/pratham.jpg"/>
                <div className="flex-grow sm:pl-8">
                    <h2 className="title-font font-medium text-lg text-white">Pratham Vidhani</h2>
                    <h3 className="text-gray-500 mb-3">Design & Documentation</h3>
                    <p className="mb-4">Pratham, our Design Virtuoso, shapes the visual identity of our password manager. Your experience is not only secure but also visually appealing thanks to his creative genius. Furthermore, Pratham serves as our Documentation Maven.</p>
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