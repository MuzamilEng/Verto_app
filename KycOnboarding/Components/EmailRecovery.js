import React from 'react'
import { Icon } from '@iconify/react';

import { success } from '../Data'

const EmailRecovery = ({showSuccess}) => {
  return (
    <div className='bg-[#fff] p-4 w-full shadow-2xl h-[20rem] max-w-[40rem] rounded-md'>
        {success?.map((item, index) => {
            return <div key={index} className='relative'>
             <Icon icon="basil:cancel-outline" onClick={showSuccess} className='absolute cursor-pointer top-2 right-2 text-2xl'/>
              <div className="flex justify-center items-center flex-col">
                <h1 className='text-center text-gary-900 mt-2 font-semibold text-3xl'>Congratulations</h1>
                <p className='text-center mt-2 text-xl'>{item?.para}</p>
                <span style={{fontSize: "12rem"}} className='text-center'>{item?.icon}</span>
              </div>
            </div>
          })}
    
</div>  )
}

export default EmailRecovery