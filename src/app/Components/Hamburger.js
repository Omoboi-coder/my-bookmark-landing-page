"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      {/* Hamburger Button (top right on mobile) */}
      <div className="flex justify-end w-full px-0">
        <button onClick={toggleMenu} className="mt-2 focus:outline-none z-50">
          <Image
            src={menuOpen ? '/images/icon-close.svg' : '/images/icon-hamburger.svg'}
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gray-900/95 text-center z-40 p-4">
          {/* Logo inside overlay at top left */}
          <div className="flex justify-between items-center mb-8">
            <Image
              src="/images/logo-bookmark-white.svg"
              alt="Bookmark Logo"
              width={180}
              height={60}
              className="ml-2 mt-4"
            />
            {/* (Optional) close icon again here */}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col space-y-6 mt-15 text-white text-lg font-medium">
            <Link href="#features" className="border-y p-6 hover:text-red-500 transition">FEATURES</Link>
            <Link href="#pricing" className="border-b pb-6 hover:text-red-500 transition">PRICING</Link>
            <Link href="#contact" className="border-b pb-6 hover:text-red-500 transition">CONTACT</Link>
            <Link href="#login" className="border-2 border-white text-white rounded-md px-4 py-2 mt-2 hover:bg-white hover:text-gray-700 transition">
              LOGIN
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex justify-center mt-[17rem] space-x-8">
            <a href="#">
              <Image src="/images/icon-facebook.svg" alt="Facebook" width={24} height={24} />
            </a>
            <a href="#">
              <Image src="/images/icon-twitter.svg" alt="Twitter" width={24} height={24} className='pt-1' />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default HamburgerMenu
