import React from 'react'
import { loginByphone } from './Data'
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
const PhoneLogin = ({ handleButtonClick }) => {
    const { register, handleSubmit, formState: { errors, isValid }, control } = useForm();
    const router = useRouter();
    const onSubmit = (data, e) => {
        console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick()
            router.push('/');
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-5 w-full m-2 max-w-[40rem] rounded-md'>
                {loginByphone?.map((item, index) => (
                    <div className="p-3" key={index}>
                        <h1 className='text-center pb-3 text-black font-semibold text-3xl'>{item?.title}</h1>
                        <div className="mt-2">
                            <label className='text-black text-2xl' htmlFor={item?.phone?.label}>{item?.phone?.label}</label>
                            <main className='flex items-center pb-3 max-w-[33rem]'>
                                <select className='m-2 p-2 focus:outline-none h-[3rem] text-lg w-[15rem] border-[1px] border-gray-500 rounded-md'>
                                    {item?.country_code?.options?.map((option, index) => (
                                        <option key={index} value={option?.value} className='text-lg'>{option?.label}</option>
                                    ))}
                                </select>
                                <Controller
                                    name={`phone${index}`} // Use a unique name for each input field
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Phone number is required' }} // Add validation rule
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            className='w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                            type={item?.phone?.type}
                                            placeholder={item?.phone?.placeholder}
                                        />
                                    )}
                                />
                            </main>
                            {errors[`phone${index}`] && (
                                <span className='text-red-500 text-lg'>{errors[`phone${index}`].message}</span>
                            )}
                            <div className="pb-3 mt-3">
                                <label className='text-black text-2xl' htmlFor={item?.email?.label}>{item?.email?.label}</label>
                                <Controller
                                    name={`email${index}`} // Use a unique name for each input field
                                    control={control}
                                    defaultValue=""
                                    rules={{
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Invalid email address',
                                        },
                                    }} // Add validation rules
                                    render={({ field }) => (
                                        <input
                                            {...field}
                                            className='w-full h-[3rem] text-lg max-w-[32rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                            type={item?.email?.type}
                                            placeholder={item?.email?.placeholder}
                                        />
                                    )}
                                />
                            </div>
                            {errors[`email${index}`] && (
                                <span className='text-red-500 text-lg'>{errors[`email${index}`].message}</span>
                            )}
                            <div className="flex items-center">
                                <Link href='/KycOnboarding/SignUp'>
                                    <p className='text-gray-400 m-2 text-lg underline cursor-pointer'>Click here to register an account</p>
                                </Link>
                                <span className='m-2 text-lg'>or</span>
                                <Link href='/KycOnboarding/ForgotPassword'>
                                    <p className='text-gray-400 ml-2 m-2 text-lg underline cursor-pointer'> recover your password</p>
                                </Link>
                            </div>
                            <button type='submit' className='w-full mt-[2rem] max-w-[30rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Login</button>
                        </div>
                    </div>
                ))}

            </form>
        </>
    )
}

export default PhoneLogin