import React from 'react'
import {  yourBankAccount } from './Data'

const BankInfo = ({handleButtonClick}) => {
  return (
    <div className='bg-[#fff] p-2 w-full m-2 pb-[4rem] max-w-[35rem] rounded-md'>
        {yourBankAccount?.map((info)=> {
            return <main className='p-2'>
              <h1 className='text-center text-black font-semibold text-3xl'>{info?.title}</h1>
              <p className='text-xl text-gray-400 p-2 text-center'>{info?.label}</p>
              <p className='text-xl text-gray-400 p-2 text-center'>{info?.label}</p>
                        <p className='text-xl text-gray-400 p-2 text-center'>{info?.label2}</p>
                <div className="p-3">
                    {info?.form?.map((item)=> (
                        <div className='flex mt-3 items-center'>
                        <input type={item?.type} />
                        <p className='text-xl text-gray-900 p-2 text-center'>{item?.label}</p>
                        </div>

                    ))}
                </div>

                <button onClick={handleButtonClick} className='w-full mt-[21rem] max-w-[33rem] text-xl ml-[1rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Create Virtual Account</button>

            </main>
        })}
    </div>
  )
}

export default BankInfo