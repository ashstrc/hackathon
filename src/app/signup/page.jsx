import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen w-full bg-red flex items-center justify-around'>
      <Link href={'/login'}> Login?</Link>
    </div>
  )
}
