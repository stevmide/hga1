import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function logo() {
  return (
    <>
      <Link href="/" passHref>
        <Image
          src="/images/Logo_hga.jpg"
          alt="logo"
          width={155}
          height={150}
          style={{ cursor: 'pointer' }}
          // You can add more props here as needed
        />
      </Link>
    </>
  )
}

export default logo
