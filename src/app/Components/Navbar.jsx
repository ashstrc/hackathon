'use client'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {


  return (
    <div>
      <div className="flex bg-[#0b023f] px-10  text-white justify-between items-center h-20 w-full">
        <h3 className=' '>Radhe Radhe</h3>
        <div className=" flex gap-10 items-center">
           <Link href={'/'}> <p className='cursor-pointer ' >Home</p></Link>
            <Link href={'/about'}><p className='cursor-pointer '>About</p></Link>
           <Link href={'/contact'}> <p className='cursor-pointer '>Contact</p></Link>

            <Link href={'/login'}><button className='bg-red-400 py-2 px-4 rounded-lg'>Let Dive In</button></Link>
        </div>
      </div>
    </div>
  )
}
