import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
     {/* // Hero section */}
        <section id="hero" className="">
          {/* flex container */}
          <div className="flex flex-col-reverse mx-auto md:mt-6 md:flex-row ">
            {/* left side */}
            <div className="flex flex-col items-center mt-15 w-full md:items-start md:py-20 md:ml-40 md:mt-0 md:max-w-[32rem]">
            <h1 className="text-4xl font-bold text-center text-gray-800 md:text-start md:text-[2.5rem] md:max-w-[30rem]">
              A Simple Bookmark Manager
            </h1>
            <p className="text-gray-400 text-center w-full mt-4 px-15 md:text-start md:px-0 md:max-w-[27rem]">
              A clean and simple interface to organize your favorite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-white 
              border-2 border-transparent hover:text-blue-600 hover:border-blue-500 hover:py-0 cursor-pointer">
                Get it on Chrome
              </button> 
              <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded ml-4
               hover:text-gray-700  border-2 border-transparent hover:border-gray-500 hover:bg-white hover:py-0 cursor-pointer">
                Get it on Firefox
              </button>
              </div> 
            </div>
    
            {/* Right side */}
            <div className="relative flex justify-center w-full mt-12 md:w-1/2 md:justify-start md:mt-0">
              <Image
                src="/images/illustration-hero.svg"
                alt="Hero Image"
                width={500}
                height={300}
                className="w-[95%] h-auto md:max-w-[40rem] z-10"
              />
    
              {/* Background color */}
               <div className="absolute mt-18 right-0 w-[350px] h-[230px] bg-blue-800 rounded-l-full -z-10 
                md:w-[510px] md:h-[330px] md:mt-30 md:right-[-3]">
               </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Hero