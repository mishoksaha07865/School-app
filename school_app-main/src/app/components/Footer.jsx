import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#6c231c] text-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <button href="https://flowbite.com/" className="flex items-center">
                  
              <Link href="/" className="flex items-center flex-col w-fit">
        
        <span className="self-center md:text-3xl text-2xl font-semibold whitespace-nowrap dark:text-white">শ্রীফলী উচ্চ বিদ্যালয়</span><span className="self-end text-xs md:text-base">২নং পেরিয়া, নাঙ্গলকোট, কুমিল্লা</span><span className="self-end text-xs md:text-base">কোড নং- ১০৬০৯৯</span>
    </Link>
              </button>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-300 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="https://flowbite.com/" className="hover:underline">Flowbite</button>
                      </li>
                      <li>
                          <button href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</button>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-300 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</button>
                      </li>
                      <li>
                          <button href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</button>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-300 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <button href="#" className="hover:underline">Privacy Policy</button>
                      </li>
                      <li>
                          <button href="#" className="hover:underline">Terms &amp; Conditions</button>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2023 <button className="hover:underline">শ্রীফলী উচ্চ বিদ্যালয়</button>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <button href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </button>
              <button href="#" className="text-gray-300 hover:text-white dark:hover:text-white">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span className="sr-only">Youtube page</span>
              </button>
            
          </div>
      </div>
    </div>
</footer>
  )
}

export default Footer