import React from 'react'
import Image from 'next/image'

function logo() {
  return (
    <>
      <Image
      src={"/components/logo/hga.png"}
      alt="logo"
      width={100}
      height={100}
      // You can add more props here as needed
    />
  </>
  )
}

export default logo



