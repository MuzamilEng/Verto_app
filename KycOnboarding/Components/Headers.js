import React from 'react'
import Image from 'next/image'
import img from '../../../assets/img/paymax.png'

const Headers = () => {
  return (
    <div >
      <div className="bg-[#000] flex justify-center items-center w-full h-[7rem]">
        <Image className='border-2 border-black h-20 mt-[45rem]' src={img} width={200} height={40} layout='fixed' alt="" />
      </div>
    </div>
  )
}

export default Headers