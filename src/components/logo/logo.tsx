import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function logo() {
  return (
    <>
      <Link href="/" passHref>
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width={150}
          height={100}
          style={{ cursor: 'pointer' }}
          // You can add more props here as needed
        />
      </Link>
    </>
  )
}

export default logo
