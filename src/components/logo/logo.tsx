import React from 'react'
import Image from 'next/image'

function logo() {
  return (
    <>
      <Image
        src="/images/logo.jpg"
        alt="logo"
        width={150}
        height={100}
        // You can add more props here as needed
      />
    </>
  )
}

export default logo
