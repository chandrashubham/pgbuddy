import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './theme'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className='sticky flex justify-between top-0 items-center border-b-2 bg-background/50 backdrop-blur z-50'>
      <div className="logo ml-11">
        <Link href={'/'}><Image width={70} height={100} alt='logo' src='/logo.png'></Image></Link>
      </div>
        <nav >
          <ul >
            <li className='hidden md:flex gap-4 items-center'>
              <Link href="/" className='hover:scale-105 font-semibold hover:text-orange-400'>Home</Link>
              <Link href="/about" className='hover:scale-105 font-semibold hover:text-orange-400'>About</Link>
              <Link href="/contact" className='hover:scale-105 font-semibold hover:text-orange-400'>Contact Us</Link>
              <Link href="/pgListing" className='hover:scale-105 font-semibold hover:text-orange-400'>PGs</Link>
            </li>
          </ul>
        </nav>
        <div className="flex text-sm my-4 btn  items-center mr-4 mb-4 gap-3">
          <Link href='/login'><Button className=' bg-orange-400 hover:bg-orange-500'>Login</Button></Link>
          <Link href='/signup'><Button className=' bg-orange-400 hover:bg-orange-500'>Register</Button></Link>
        <div className=" menu sm:hidden "><Image width={20} height={40} alt='logo' src='/menu.svg'></Image></div>
        <div className='hidden md:flex'><ModeToggle/></div>
        </div>

        </header>
  
  )
}

export default Navbar