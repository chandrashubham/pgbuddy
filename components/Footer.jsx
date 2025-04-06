import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <footer className="body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap md:text-left text-center order-first">
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">ABOUT PGBUDDY</h2>
          <p className="leading-relaxed  dark:text-gray-400">
            PG Buddy is your trusted platform to find the perfect PG accommodations near your college. Simplifying your stay, one room at a time.
          </p>
        </div>
        <div className="lg:w-1/6 md:w-1/3 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">QUICK LINKS</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/about" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">About Us</Link>
            </li>
            <li>
              <Link href="/contact" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Contact</Link>
            </li>
            <li>
              <Link href="/faq" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">FAQs</Link>
            </li>
            <li>
              <Link href="/privacypolicy" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Privacy Policy</Link>
            </li>
          </nav>
        </div>
        <div className="lg:w-1/6 md:w-1/3 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">EXPLORE</h2>
          <nav className="list-none mb-10">
            <li>
              <Link href="/roomList" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">PG Listings</Link>
            </li>
            <li>
              <Link href="/roomList" className=" dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Search PG</Link>
            </li>
          
          </nav>
        </div>
        <div className="lg:w-1/3 md:w-1/2 w-full px-4">
          <h2 className="title-font font-medium text-gray-900 dark:text-gray-100 tracking-widest text-sm mb-3">SUBSCRIBE</h2>
          <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
              <label htmlFor="footer-field" className="leading-7 text-sm  dark:text-gray-400">Email</label>
              <input
                type="text"
                id="footer-field"
                name="footer-field"
                className="w-full bg-gray-200 dark:bg-gray-800 bg-opacity-50 rounded border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-orange-500 focus:bg-transparent focus:border-orange-500 text-base outline-none py-1 px-3 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 bg-orange-400 dark:bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 dark:hover:bg-orange-700 rounded text-white">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:text-left text-center">
            Stay updated with the latest PG listings and tips!
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-100">
          <Image width="100" height="200" alt="logo" src="/logo.png"></Image>
        </Link>
        <p className="text-gray-500 dark:text-gray-400 text-sm sm:ml-6 sm:mt-0 mt-4">
          © 2024 PG Buddy —
          <Link href="mailto:schand9983@gmail.com" className=" dark:text-gray-400 ml-1 hover:text-gray-800 dark:hover:text-gray-200" target="_blank">
            schand9983@gmail.com
          </Link>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://www.facebook.com/" target="_blank" className="text-gray-500 hover:text-blue-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </Link>
          <Link href="https://x.com/?lang=en&mx=2" target="_blank" className="ml-3 text-gray-500 hover:text-blue-400">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" className="ml-3 text-gray-500 hover:text-pink-400">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </Link>
          <Link href="https://in.linkedin.com/" target="_blank" className="ml-3 text-gray-500 hover:text-blue-400">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </Link>
        </span>
      </div>
    </div>
  </footer>
  
  
  )
}

export default Footer