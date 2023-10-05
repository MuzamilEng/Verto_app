import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Headers from './Components/Headers'
import { login, signup } from './Data'
import Password from './Password'
import { ProgressBar } from '../StateManagement/Onboarding/BranchOffice'
import Link from 'next/link'
import PhoneLogin from './PhoneLogin'
import { Controller, useForm } from 'react-hook-form'
const EmailLogin = () => {
    const [progress, setProgress] = React.useState(0);
    const { handleSubmit, control, formState: { errors, isValid } } = useForm();
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);

    const handleButtonClick = () => {
        if (progress < 2) {
            setProgress(progress + 1);
        }
    };
    // const router = useRouter();
    const onSubmit = (data, e) => {
        console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick();
        }
    }
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
                                <div className="flex -mt-[2rem] items-center">
                                    <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[40rem] rounded-md'>
                                        <div className="p-5 rounded-md">
                                            {login?.map((item) => {
                                                return <div className="">
                                                    <h1 className='text-center pb-3 text-black font-semibold text-3xl'>{item?.title}</h1>
                                                    <h1 className='text-black font-semibold text-2xl'>Login With Email</h1>
                                                    <div className="mt-2">
                                                        {item?.form?.map((item, index) => (
                                                            <div className="p-2" key={index}>
                                                                <label className='text-black text-xl mt-1' htmlFor={item?.label}>{item?.label}</label>
                                                                <Controller
                                                                    name={`fieldName${index}`} // Use a unique name for each field
                                                                    control={control}
                                                                    defaultValue=""
                                                                    rules={{ required: 'This field is required' }} // Add validation rule
                                                                    render={({ field }) => (
                                                                        <input
                                                                            {...field}
                                                                            type={item?.type}
                                                                            placeholder={item?.placeholder}
                                                                            className='w-full h-[3rem] text-lg max-w-[32rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                        />
                                                                    )}
                                                                />
                                                                {errors[`fieldName${index}`] && (
                                                                    <span className='text-red-500 text-lg'>{errors[`fieldName${index}`].message}</span>
                                                                )}
                                                            </div>
                                                        ))}

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
                                            })}
                                        </div>
                                    </form>
                                    <div className="phonelogin m-2">
                                        <PhoneLogin handleButtonClick={handleButtonClick} />
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

export default EmailLogin