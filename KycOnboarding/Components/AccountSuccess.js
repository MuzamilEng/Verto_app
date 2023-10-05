import React from 'react'
import { Icon } from '@iconify/react';

import { accountSuccess } from '../Data'

const AccountSuccess = ({showSuccess}) => {
  return (
    <div className='bg-[#fff] p-4 w-full shadow-2xl h-[33rem] max-w-[40rem] rounded-md'>
        {accountSuccess?.map((item, index) => {
            return <div key={index} className='relative p-2'>
             <Icon icon="basil:cancel-outline" onClick={showSuccess} className='absolute cursor-pointer top-2 right-2 text-2xl'/>
              <div className="flex justify-center items-center flex-col">
                <span style={{fontSize: "12rem"}} className='text-center'>{item?.icon}</span>
                <h1 className='text-center text-gary-900 mt-2 font-semibold text-3xl'>Congratulations</h1>
                <p className='text-center mt-2 text-xl'>{item?.para}</p>
                <div className="mt-3">
                    <p className='text-xl text-black font-semibold'>Currency: {item?.currency}</p>
                    <p className='text-xl text-black font-semibold'>Bank Name: {item?.bankname}</p>
                    <p className='text-xl text-black font-semibold'>Account Number: {item?.accountnumber}</p>
                </div>
              </div>
            </div>
          })}
    
</div>  )
}

export default AccountSuccess