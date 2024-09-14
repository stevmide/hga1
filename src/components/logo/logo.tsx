import React from 'react'
import Image from 'next/image'
import logoimage from '../logo/logo.jpg'

function logo() {
  return (
    <>
      <Image
        src={logoimage}
        alt="logo"
        width={150}
        height={100}
        // You can add more props here as needed
      />
    </>
  )
}

export default logo
