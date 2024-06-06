import Link from 'next/link'
import React from 'react'

// Headning band for home page
const Heading = () => {
  return (
    <div className='w-screen h-[5%] bg-blue-500 text-white font-bold text-center flex flex-col text-xl justify-center z-20 fixed top-0'>
      <h1>THE GOALS</h1>
      <Link href="/about" className='absolute right-10'>About Us</Link>
      </div>
  )
}

export default Heading