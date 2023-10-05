import React from 'react'
import { Icon } from '@iconify/react';
import { otp } from '../Data';

const Otp = ({showOtp}) => {
  return (
    <div className='bg-[#fff] p-2 w-full shadow-2xl h-[20rem] max-w-[40rem] rounded-md'>
        {otp?.map((item) => {
            return <main className='p-2 relative'>
                        <Icon icon="basil:cancel-outline" onClick={showOtp} className='absolute cursor-pointer top-2 right-2 text-2xl'/>
                <h1 className='text-center text-red-500 font-semibold text-3xl'>{item?.title}</h1>
                <p className='text-center text-xl mt-2'>{item?.para}</p>
             <div className="flex justify-center items-center">
             <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                <input type={item?.type} className='w-full max-w-[3rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' />
                </div>
                <p className='text-center text-red-500 text-xl mt-4'>Resend code (1:30s)</p> 
                <div className="flex justify-center items-center">
                <button className='w-full mt-1 max-w-[8rem] text-xl ml-[.5rem] p-1 rounded-md bg-[#000] text-white font-semibold'>Verify</button>
                </div>
              </main>
        })}
    </div>
  )
}

export default Otp