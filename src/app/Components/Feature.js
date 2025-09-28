'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Feature = () => {
  const [activeTab, setActiveTab] = useState('bookmarking')

  return (
    <>
      {/* Features section */}
      <section id="features" className="mt-10 md:mt-5">
        <div className="flex flex-col">
          {/* Title and description */}
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
            <p className="text-gray-500 mb-10 text-center w-full px-13 md:max-w-[29rem] md:px-0">
              Our aim is to make it quick and easy for you to access your favourite websites. 
              Your bookmarks sync between your devices so you can access them on the go.
            </p>

            {/* Feature cards */}
            <div className="relative flex flex-col text-center mt-[-30px] md:mt-0 justify-center md:flex-row md:w-[48rem]
             border-b border-gray-300">
              {/* Red active underline */}
              <span
                 className="hidden md:absolute md:bottom-0 md:h-[4px] md:bg-red-500 md:transition-all
                  md:duration-300 md:block"
                style={{
                  width: '33.33%',
                  left:
                    activeTab === 'bookmarking'
                      ? '0%'
                      : activeTab === 'searching'
                      ? '33.33%'
                      : '66.66%',
                }}
              ></span>

              {/* Tab 1 */}
              <div className="flex-1 p-2">
                <h3
                  onClick={() => setActiveTab('bookmarking')}
                  className={`text-lg cursor-pointer py-3 md:py-3 md:mb-1 ${
                    activeTab === 'bookmarking'
                      ? 'border-b-4 border-red-500 md:text-red-500 md:border-none'
                      : 'text-gray-500 hover:text-red-400'
                  }`}
                >
                  Simple Bookmarking
                </h3>
              </div>

              {/* Tab 2 */}
              <div className="flex-1 p-2">
                <h3
                  onClick={() => setActiveTab('searching')}
                  className={`text-lg cursor-pointer py-3 md:py-3 md:mb-1 ${
                    activeTab === 'searching'
                      ? 'border-b-4 border-red-500 md:text-red-500 md:border-none'
                      : 'text-gray-500 hover:text-red-400'
                  }`}
                >
                  Speedy Searching
                </h3>
              </div>

              {/* Tab 3 */}
              <div className="flex-1 p-2">
                <h3
                  onClick={() => setActiveTab('sharing')}
                  className={`text-lg cursor-pointer py-3 md:py-3 md:mb-1 ${
                    activeTab === 'sharing'
                      ? 'border-b-4 border-red-500 md:text-red-500 md:border-none'
                      : 'text-gray-500 hover:text-red-400'
                  }`}
                >
                  Easy Sharing
                </h3>
              </div>
            </div>
          </div>

          {/* Tab Content (Image + Text) */}
          <div className="flex flex-col mx-auto gap-10 md:mt-1 md:gap-30 md:flex-row">
            {/* LEFT SIDE: individual image blocks per tab */}
            <div className="relative flex justify-center w-full mt-0 md:w-1/2 md:justify-start md:mt-0">
              {activeTab === 'bookmarking' && (
                <>
                  <Image
                    src="/images/illustration-features-tab-1.svg"
                    alt="Simple Bookmarking"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[90%] md:w-[32rem] h-auto z-10"
                    priority
                  />
                  <div className="absolute mt-10 left-0 w-[350px] h-[240px] bg-blue-800 rounded-r-full -z-10 
                    md:w-[630px] md:h-[300px] md:mt-20 md:left-[-220px]">
                  </div>
                </>
              )}

              {activeTab === 'searching' && (
                <>
                  <Image
                    src="/images/illustration-features-tab-2.svg"
                    alt="Speedy Searching"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-[70%] ml-8 md:w-[27rem] md:ml-6 h-auto z-10"
                    priority
                  />
                  <div className="absolute mt-10 left-0 w-[320px] h-[220px] bg-blue-800 rounded-r-full -z-10 
                    md:w-[600px] md:h-[300px] md:mt-20 md:left-[-220px]">
                  </div>
                </>
              )}

              {activeTab === 'sharing' && (
                <>
                  <Image
                    src="/images/illustration-features-tab-3.svg"
                    alt="Easy Sharing"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className=" z-10 w-[60%] h-auto md:w-[26rem] md:ml-4"
                    priority
                  />
                  <div className="absolute mt-10 left-0 w-[300px] h-[200px] bg-blue-800 rounded-r-full -z-10 
                    md:w-[600px] md:h-[300px] md:mt-20 md:left-[-220px]">
                  </div>
                </>
              )}
            </div>

            {/* RIGHT SIDE: dynamic shared text */}
            <div className="flex flex-col items-center mt-8 w-fit md:items-start md:pt-13 md:mt-0 md:max-w-[25rem]">
              <h3 className="text-3xl font-bold text-center text-gray-800 md:text-start md:text-3xl md:max-w-[30rem]">
                {activeTab === 'bookmarking' && 'Bookmark in one click'}
                {activeTab === 'searching' && 'Intelligent search'}
                {activeTab === 'sharing' && 'Share your bookmarks'}
              </h3>
              <p className="text-gray-500 text-center w-[27rem] mt-4 px-15 md:text-start md:px-0 md:max-w-[23rem]">
                {activeTab === 'bookmarking' &&
                  'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'}
                {activeTab === 'searching' &&
                  'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all your bookmarks.'}
                {activeTab === 'sharing' &&
                  'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'}
              </p>
              <div className="hidden justify-center mt-6 md:justify-start md:flex">
                <button className="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-600">
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Feature
