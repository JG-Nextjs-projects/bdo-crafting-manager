import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/itemParser">
            <a>Item Parser</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
