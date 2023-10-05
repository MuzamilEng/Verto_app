import React from 'react'
import { Icon } from '@iconify/react';

import { success, verifyAccount } from '../Data'

const VerifyAccount = ({showSuccess}) => {
  return (
    <div className='bg-[#fff] p-4 w-full shadow-2xl h-[20rem] max-w-[40rem] rounded-md'>
        {verifyAccount?.map((item, index) => {
            return <div key={index} className='relative'>
             <Icon icon="basil:cancel-outline" onClick={showSuccess} className='absolute cursor-pointer top-2 right-2 text-2xl'/>
              <div className="flex justify-center items-center flex-col">
                <span style={{fontSize: "12rem"}} className='text-center'>{item?.icon}</span>
                <p className='text-center mt-2 text-xl'>{item?.para}</p>
              </div>
            </div>
          })}
    
</div>  )
}
export default VerifyAccount