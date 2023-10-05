import React from 'react'
import { virtualBankInfo } from './Data'

const BankInfo = ({handleButtonClick}) => {
  return (
    <div className='bg-[#fff] p-2 w-full m-2 pb-[4rem] max-w-[35rem] rounded-md'>
        {virtualBankInfo?.map((info)=> {
            return <main className='p-2'>
              <h1 className='text-center text-black font-semibold text-3xl'>{info?.title}</h1>
                <div className="p-3">
                    {info?.form?.map((item)=> (
                        <p className='text-xl text-gray-400 p-2 text-center'>{item?.info}</p>
                    ))}
                </div>
                <div className="p-3">
                    {info?.form?.map((item)=> (
                        <p className='text-xl text-gray-400 p-2 text-center'>{item?.info}</p>
                    ))}
                </div>

                <button onClick={handleButtonClick} className='w-full mt-[10rem] max-w-[33rem] text-xl ml-[1rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Create Virtual Account</button>

            </main>
        })}
    </div>
  )
}

export default BankInfo