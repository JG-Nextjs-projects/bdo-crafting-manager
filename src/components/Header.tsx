import React from 'react'
import Link from 'next/link'
import Navbar from "./Navbar"

export default function Header() {
  return (
    <header className='bg-blue-400'>
      <div className='container flex justify-between mx-auto py-4 mb-12'>
        <h1 className='font-bold text-lg'>
          <Link href="/">
            <a>Linaka&apos;s BDO</a>
          </Link>
        </h1>
        <Navbar />
      </div>
    </header>
  )
}
