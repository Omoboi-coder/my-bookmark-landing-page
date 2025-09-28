'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Faq = () => {
  const [openIndexes, setOpenIndexes] = useState(new Set())

  const toggleQuestion = (index) => {
    setOpenIndexes(prev => {
      const updated = new Set(prev)
      if (updated.has(index)) {
        updated.delete(index) // close if already open
      } else {
        updated.add(index) // open if closed
      }
      return updated
    })
  }

  const faqData = [
    {
      question: 'What is Bookmark?',
      answer:
        ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
    },
    {
      question: 'How can I request a new browser?',
      answer:
        'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        ' Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
    },
    {
      question: 'What about other Chromium browsers?',
      answer:
        ' Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
    },
  ]

  return (
    <section id="faq" className="mt-10 md:mt-10">
      <div className="flex flex-col items-center mx-auto px-4 md:px-0">
        {/* Title */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 w-[20rem] text-center mb-6 md:w-[30rem]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mb-10 text-center text-lg w-[23rem] md:w-[32rem] md:px-0">
            Here are some of our FAQs. If you have any other questions you&apos;d like answered please 
            feel free to email us.
          </p>
        </div>

        {/* FAQ items */}
        <div className="flex flex-col gap-4 w-full px-4 md:px-0 md:w-[30rem]">
          {faqData.map((faq, index) => {
            const isOpen = openIndexes.has(index)

            return (
              <div key={index} className="border-b border-gray-300 pb-4">
                <div
                  className="relative flex items-center justify-between cursor-pointer"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="mt-2 text-lg text-gray-600 hover:text-red-500 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <Image
                    src="/images/icon-arrow.svg"
                    alt="Arrow Icon"
                    width={20}
                    height={20}
                    className={`w-4 h-3 mt-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    style={{
                      filter: isOpen
                        ? 'invert(34%) sepia(91%) saturate(6266%) hue-rotate(342deg) brightness(95%) contrast(103%)' // red
                        : 'invert(31%) sepia(99%) saturate(1521%) hue-rotate(186deg) brightness(92%) contrast(95%)', // blue
                    }}
                  />
                </div>

                {isOpen && (
                  <p className="text-gray-500 mt-4 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </p>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <button className="bg-blue-800 text-white px-6 py-3 mt-10 rounded hover:bg-blue-600 cursor-pointer">
          More Info
        </button>
      </div>
    </section>
  )
}

export default Faq
