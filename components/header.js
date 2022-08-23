import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
    return(
        <>
        <Head>
       
      </Head>
      {/*Nav*/}
      <div className='nav fixed bg-white z-50 w-full 2xl:px-72 xl:px-10 px-6 py-2 flex justify-between items-center'>
          <Link href='/' className='logo'>
            <img src="/logo.png" alt="logo" width="64" height="64" />
          </Link>
          <button onClick={() => setMobileMenu((mobileMenu) => !mobileMenu)} className='mx-2 md:hidden block' type='button'>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
          </button>
          <div className= {mobileMenu ? 'md:hidden flex w-full bg-white flex-col justify-between items-center top-12 -left-1 h-80 z-50 py-6 absolute' : 'md:flex hidden justify-between items-center pt-4 h-auto relative'}>
          <Link href='/'><a className='aribau mr-10 md:text-xl text-lg text-gray-800 hover:text-primary duration-150'>Home</a></Link>
          <Link href='/about'><a className='aribau mr-10 md:text-xl text-lg text-gray-800 hover:text-primary duration-150'>About</a></Link>
          <Link href='/features'><a className='aribau mr-10 md:text-xl text-lg text-gray-800 hover:text-primary duration-150'>Features</a></Link>
          <Link href='/'><a className='aribau mr-10 md:text-xl text-lg text-gray-800 hover:text-primary duration-150'>FAQs</a></Link>
          </div>
        </div>
        </>
    );
}
