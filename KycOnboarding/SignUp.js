import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Headers from './Components/Headers'
import { signup } from './Data'
import Password from './Password'
import { ProgressBar } from '../StateManagement/Onboarding/BranchOffice'
import Otp from './Components/Otp'
import Success from './Components/Success'
import { Controller, useForm } from 'react-hook-form'
const SignUp = () => {
    const [progress, setProgress] = React.useState(0);
    const [showOtp, setShowOtp] = React.useState(false);
    const { register, handleSubmit, control, formState: { errors, isValid } } = useForm();

    const onSubmit2 = (data, e) => {
        e.preventDefault();
        if(isValid){
            setShowOtp(true)
            handleButtonClick();
        } 
        console.log(data);
    }
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);

    const handleButtonClick = () => {
        if (progress < 2) {
            setProgress(progress + 1);
        }
    };


    return (
        <>
            <div>
                <div style={{ backgroundColor: "#fff" }} className="">
                    <Header />
                    <div className="max-w-screen w-full relative">
                        <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
                            <Sidebar />
                        </div>
                        <div className="bg-[#fff]">
                            <div className="absolute w-full max-w-[88rem] right-0">
                                <header className="mt-[4rem]">
                                    <Headers />
                                </header>
                                <div className="w-full mt-2 max-w-[82rem]"><ProgressBar percentage={progressPercentage} /></div>
                                <div className="flex -mt-[1.5rem] items-start">
                                    <form onSubmit={handleSubmit(onSubmit2)} className='bg-[#fff] p-2 w-full m-2 max-w-[40rem] rounded-md'>
                                        <div className="p-5 rounded-md">
                                            {signup?.map((item) => {
                                                return <div className="">
                                                    <h1 className='text-center text-black font-semibold text-3xl'>{item?.title}</h1>
                                                    <div className="mt-2">
                                                        <label className='text-black text-2xl' htmlFor={item?.phone?.label}>{item?.phone?.label}</label>
                                                        <main className='flex items-center pb-3 max-w-[33rem]'>
                                                            <select
                                                                className='m-2 p-2 focus:outline-none h-[3rem] text-lg w-[15rem] border-[1px] border-gray-500 rounded-md'
                                                                {...register('countryCode', { required: 'Country code is required' })}
                                                            >
                                                                {item?.country_code?.options?.map((option, index) => (
                                                                    <option key={index} value={option?.value} className='text-lg'>{option?.label}</option>
                                                                ))}
                                                            </select>
                                                            <input
                                                                className='w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                type={item?.phone?.type}
                                                                placeholder={item?.phone?.placeholder}
                                                                {...register('phoneNumber', { required: 'Phone number is required' })}
                                                            /> <br />

                                                        </main>
                                                        {errors.phoneNumber && <p className="text-red-500 text-lg">{errors.phoneNumber.message}</p>}
                                                        <div className="pb-3 mt-3">
                                                            <label className='text-black text-2xl' htmlFor={item?.email?.label}>{item?.email?.label}</label>
                                                            <input
                                                                className='w-full h-[3rem] text-lg max-w-[32rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                type={item?.email?.type}
                                                                placeholder={item?.email?.placeholder}
                                                                {...register('email', {
                                                                    required: 'Email is required',
                                                                    pattern: {
                                                                        value: /\S+@\S+\.\S+/,
                                                                        message: 'Invalid email address',
                                                                    },
                                                                })}
                                                            />
                                                            { errors.email && <p className="text-red-500 text-lg">{errors.email.message}</p>}
                                                        </div>
                                                        <div className="flex mt-2 items-center justify-between">
                                                            {item?.form?.map((item, index) => (
                                                                <div key={index} className="flex items-center p-2">
                                                                    <Controller
                                                                        name={`checkbox${index}`}
                                                                        control={control}
                                                                        defaultValue={false}
                                                                        render={({ field }) => (
                                                                            <input
                                                                                {...field}
                                                                                type="checkbox"
                                                                                className="mr-2"
                                                                            />
                                                                        )}
                                                                    />
                                                                    <label className="text-black text-xl mt-1" htmlFor={item?.label}>
                                                                        {item?.label}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div> <br />
                                                        {errors?.checkbox && (
                                                            <p className="text-red-500 text-lg">At least one checkbox must be selected.</p>
                                                        )}
                                                        <div className="mt-[3rem]">
                                                            <div className="flex items-center p-2">
                                                                <input type={item?.privacy?.type} className='mr-2 rounded-3xl' />
                                                                <label className=' text-xl mt-1' htmlFor={item?.privacy?.label}>{item?.privacy?.label}</label>
                                                            </div>
                                                        </div>
                                                        <button type='submit' className='w-full mt-[2rem] max-w-[30rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Send Otp</button>
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                        {showOtp && (
                                            <div className="fixed inset-0 flex items-center justify-center">
                                                <div className="relative">
                                                    {/* <Success showSuccess={() => setShowOtp(!showOtp)}/> */}
                                                    <Otp showOtp={() => setShowOtp(!showOtp)} />
                                                </div>
                                            </div>
                                        )}

                                    </form>
                                    <div className="newPassword">
                                        <Password handleButtonClick={handleButtonClick} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp
