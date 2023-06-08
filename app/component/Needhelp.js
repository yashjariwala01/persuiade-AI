import React from 'react'
import Image from 'next/image'

const Needhelp = () => {
  return (
    <div>
      <p >Need help?</p>
      <Image className='relative left-6' src='/image/needhelpimage.svg' alt="something" width={40} height={40} />
    </div>
  )
}

export default Needhelp
