import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className='h-screen w-full bg-red'>
      <h3>Login Form</h3>
      <Link href={'/signup'}>Wanna signup?</Link>
    </div>
  )
}
