'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = () => {
    if (!email.trim()) {
      setError('Please enter your email address')
    } else if (!validateEmail(email)) {
      setError("Whoops, make sure it's an email")
    } else {
      setError('')
      alert('Email submitted successfully!')
      // You can handle form submission here
    }
  }

  return (
    <>
      <section id="footer" className="bg-blue-500 mt-25">
        <div className="flex mx-auto justify-center">
          <div className="text-center w-full pt-15 md:my-6 max-w-[27rem]">
            <h4 className="text-white text-xl">35,000+ ALREADY JOINED.</h4>
            <h2 className="text-white text-3xl font-bold mt-5">
              Stay up-to-date with what we’re doing
            </h2>

            {/* Email form */}
            <div className="flex flex-col items-center px-5 gap-2 mt-4 md:flex-row md:px-0">
              <div className={`relative w-full md:max-w-[19rem]${error ? ' mb-8 md:mb-0' : ''}`}>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (error) setError('')
                  }}
                  className={`px-4 py-3 bg-white text-black text-[15px] w-full 
                    ${error ? 'border-2 border-red-500' : 'border-none'} 
                  `}
                />

                {error && (
                  <Image
                    src="/images/icon-error.svg"
                    alt="Error Icon"
                    width={20}
                    height={20}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  />
                )}

                {error && (
                  <p className="text-white bg-red-500 text-[12px] text-left absolute 
                  top-full left-0 w-full py-1 pl-3 rounded-b-md  italic">
                    {error}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="text-white bg-red-500 px-4 py-2.5 rounded-md w-full
                border border-transparent hover:border-red-400 hover:bg-white hover:text-red-400 
                cursor-pointer md:px-3 md:max-w-[7rem]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col py-7 mt-10 gap-6 bg-blue-950 md:px-40 md:flex-row md:gap-15">
          <div className="flex justify-center">
            <Image
              src="/images/logo-bookmark-white.svg"
              alt="Logo"
              width={30}
              height={10}
              className="min-w-[10rem] min-h-[1.5rem] mt-3 md:min-w-38 md:h-7 md:ml-0 md:mt-0"
            />
          </div>

          <div className="flex flex-col space-y-6 items-center text-[16px] md:text-xs md:space-x-12 md:space-y-0 md:flex-row">
            <a href="#" className="text-gray-300 hover:text-red-400">FEATURES</a>
            <a href="#" className="text-gray-300 hover:text-red-400">PRICING</a>
            <a href="#" className="text-gray-300 hover:text-red-400">CONTACT</a>
          </div>

          <div className="flex gap-10 w-[30px] h-[20px] ml-[10.5rem] mb-6 md:ml-[25rem] md:mt-2 md:mb-0">
            <Image
              src="/images/icon-facebook.svg"
              alt="facebook logo"
              width={25}
              height={10}
            />
          
            <Image
              src="/images/icon-twitter.svg"
              alt="twitter logo"
              width={25}
              height={10}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
