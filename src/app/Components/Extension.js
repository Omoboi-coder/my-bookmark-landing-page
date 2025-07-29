import React from 'react'
import Image from 'next/image'

const Extension = () => {
  return (
    <>
    {/* Extension section */}
      <section id="extension" className="mt-30 md:mt-40">
        {/* flex container */}
        <div className="flex flex-col items-center">
          {/* Title and description */}
          <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Download the extension</h2>
          <p className="text-gray-500 mb-10 text-xl w-[25rem] text-center md:text-lg md:w-[35rem] md:px-0">
             We’ve got more browsers in the pipeline. Please do let us know if you’ve 
             got a favourite you’d like us to prioritize.
          </p>
        </div>
          {/* Extension cards */}
          <div className="flex flex-col justify-center text-center gap-8 md:gap-6 md:flex-row md:w-[50rem]">
            {/* card 1 */}
            <div className="bg-white p-2 rounded-xl py-6 shadow-2xl w-[20rem] h-[25rem] md:py-2 md:w-[18rem] md:h-[20rem]">
              <Image
                src="/images/logo-chrome.svg"
                alt="Chrome Logo"
                width={30}
                height={10}
                className="w-30 h-30 mx-auto mb-4 mt-8 md:w-20 md:h-20"
              />
              <h3 className="text-2xl font-semibold mb-2 mt-8 md:text-lg">Add to Chrome
              </h3>
              <p className="text-gray-400 text-lg md:text-sm">Minimum version 62
              </p>
              <Image
                src="/images/bg-dots.svg"
                alt="Background Dots"
                width={30}
                height={10}
                className="w-80 opacity-[100] mt-6 mb-2 overflow-visible"
              />
               <button className="bg-blue-800 text-white text-lg px-10 py-3 rounded-sm mt-3
                border-2 border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-600 
                 md:py-2 md:px-4">
                 Add & Install Extension
                </button>

            </div>
            {/* card 2 */}
            <div className="bg-white p-2 rounded-xl py-6 shadow-2xl w-[20rem] h-[25rem] md:py-2 
            md:w-[18rem] md:h-[20rem] md:mt-10">
              <Image
                src="/images/logo-firefox.svg"
                alt="Firefox Logo"
                width={30}
                height={10}
                className="w-30 h-30 mx-auto mb-4 mt-8 md:w-20 md:h-20"
              />
              <h3 className="text-2xl font-semibold mb-2 mt-8 md:text-lg">Add to Firefox
                </h3>
                <p className="text-gray-400 text-lg md:text-sm">Minimum version 55
                </p> 
                <Image
                src="/images/bg-dots.svg"
                alt="Background Dots"
                width={30}
                height={10}
                className="w-80 opacity-[100] mt-6 mb-2 overflow-visible "
                />
                <button className="bg-blue-800 text-white text-lg px-10 py-3 rounded-sm mt-3
                border-2 border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-600 
                 md:py-2 md:px-4">
                  Add & Install Extension
          </button> 
            </div>
            {/* card 3 */}
            <div className="bg-white rounded-xl py-6 shadow-2xl w-[20rem] h-[25rem] md:py-2 md:w-[18rem] md:h-[20rem] md:mt-17">
              <Image
                src="/images/logo-opera.svg"
                alt="Opera Logo"
                width={30}
                height={10}
                className="w-30 h-30 mx-auto mb-4 mt-8 md:w-20 md:h-20"
              />
              <h3 className="text-2xl font-semibold mb-2 mt-8 md:text-lg">Add to Opera
              </h3>
              <p className="text-gray-400 text-lg md:text-sm">Minimum version 46
              </p>
              <Image
                src="/images/bg-dots.svg"
                alt="Background Dots"
                width={30}
                height={10}
                className="w-80 opacity-[100] mt-6 mb-2 overflow-visible "
              />
              <button className="bg-blue-800 text-white text-lg px-10 py-3 rounded-sm mt-3
                border-2 border-transparent hover:bg-white hover:border-blue-600 hover:text-blue-600 
                 md:py-2 md:px-4">
                  Add & Install Extension
          </button> 
            </div>
          </div>
      </div>
      </section>
    </>
  )
}

export default Extension