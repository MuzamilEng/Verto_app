import React from 'react'
import { forgotPassword, loginByphone } from './Data'
import Link from 'next/link';
const ForgotPasswords = ({ handleButtonClick }) => {
    return (
        <>
            <div className='bg-[#fff] p-2 w-full m-2 max-w-[40rem] rounded-md'>
                {forgotPassword?.map((item) => {
                    return <div className="p-3">
                        <h1 className='text-center pb-3 text-black font-semibold text-3xl'>{item?.title}</h1>
                        <p className='text-gray-400 text-center text-xl'>{item?.para}</p>
                        <div className="mt-2">
                        <div className="pb-3 mt-3">
                                <label className='text-black text-2xl' htmlFor={item?.email?.label}>{item?.email?.label}</label>
                                <input className='w-full h-[3rem] text-lg max-w-[35rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' type={item?.email?.type} placeholder={item?.email?.placeholder} />
                            </div>
                            <label className='text-black text-2xl' htmlFor={item?.phone?.label}>{item?.phone?.label}</label>
                            <main className='flex items-center pb-3 max-w-[36rem]'>
                                <select className='m-2 p-2 focus:outline-none h-[3rem] text-lg w-[20rem] border-[1px] border-gray-500 rounded-md'>
                                    {item?.country_code?.options?.map((option, index) => {
                                        return <option key={index} value={option?.value} className='text-lg'>{option?.label}</option>
                                    })}
                                </select>
                                <input className='w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900' type={item?.phone?.type} placeholder={item?.phone?.placeholder} />
                            </main>
                            <button onClick={handleButtonClick} className='w-full mt-[2rem] max-w-[30rem] text-xl ml-[3.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Reset password</button>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}

export default ForgotPasswords