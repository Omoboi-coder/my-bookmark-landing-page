import React from 'react'
import Image from 'next/image'
import HamburgerMenu from './Hamburger'

const Navbar = () => {
  return (
    <>
      {/* Nav bar container */}
      <nav className="mx-auto">
        {/* Flex container */}
        <div className="flex items-center justify-between px-7 py-4 mt-3 md:px-40 md:mt-2">
          {/* Logo (Desktop only) */}
          <div className="items-center md:flex">
            <Image
              src="/images/logo-bookmark.svg"
              alt="Logo"
              width={30}
              height={10}
              className="min-w-[9rem] min-h-[1.5rem] md:w-40 md:h-7"
            />
          </div>

          {/* Navigation links (Desktop) */}
          <div className="hidden md:flex space-x-15 items-center text-[14px]">
            <a href="#" className="text-gray-800 hover:text-red-500">FEATURES</a>
            <a href="#" className="text-gray-800 hover:text-red-500">PRICING</a>
            <a href="#" className="text-gray-800 hover:text-red-500">CONTACT</a>
            <button className="bg-red-500 text-white px-6 py-1.5 rounded hover:bg-white 
             border-2 border-transparent hover:border-red-500 hover:text-red-500 cursor-pointer">
              LOGIN
            </button>
          </div>

          {/* Hamburger menu (Mobile only) */}
          <div className="md:hidden">
            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
