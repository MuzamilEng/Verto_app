import React, { useState } from 'react'
import { bankAccount } from './Data';
import { Icon } from '@iconify/react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';


const BankDetails = ({ handleButtonClick }) => {
    const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
    const [toggle, setToggle] = React.useState(true);
    const [toggle2, setToggle2] = React.useState(true);
    // State to track the selected main category
    const router = useRouter();
    const onSubmit = (data, e) => {
        // console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick();
            setTimeout(() => {
                router.push('/MerchantOnboarding/BankSetup');
            }, 2000)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[35rem] rounded-md'>
                <div className="p-1 rounded-md">
                    {bankAccount?.map((item) => {
                        return <main className='p-3'>
                            <h1 className='text-center text-black text-3xl font-semibold'>{item?.title}</h1>
                            <label htmlFor="" className="text-black text-2xl mt-2">{item?.label}</label>
                            <div className="flex items-center mt-3">
                                <span className="text-black text-base font-semibold m-2">Yes</span>
                                {toggle ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle(!toggle)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle(!toggle)} />}
                                <span className="text-black text-base font-semibold ml-2">NO</span>
                            </div>
                            <label htmlFor="" className="text-black text-2xl mt-2">{item?.label2}</label>
                            <div className="flex items-center mt-3">
                                <span className="text-black text-base font-semibold m-2">Yes</span>
                                {toggle2 ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle2(!toggle2)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle2(!toggle2)} />}
                                <span className="text-black text-base font-semibold ml-2">NO</span>
                            </div>
                            {item?.form?.map((field2, index) => {
                                return (
                                    <div className="" key={field2?.label}>
                                        <div className="fields mt-2">
                                            <label
                                                className="text-black text-2xl"
                                                htmlFor={field2?.label}
                                            >
                                                {field2?.label}
                                            </label>
                                            <Controller
                                                name={`field2-${index}`} // Provide a unique name for each field
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }} // Add validation rules here
                                                render={({ field }) => (
                                                    field2?.type === 'textarea' ? (
                                                        <textarea
                                                            {...field}
                                                            className='w-[28rem] h-[5rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                            rows={5}
                                                            placeholder={field2?.placeholder}
                                                        ></textarea>
                                                    ) : (
                                                        <input
                                                            {...field}
                                                            type={field2?.type}
                                                            placeholder={field2?.placeholder}
                                                            className="w-[28rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                        />
                                                    )
                                                )}
                                            />
                                            {errors[`field2-${index}`]?.type === 'required' && (
                                                <span className="text-red-500 text-lg">This field is required</span>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}

                            <button onClick={handleButtonClick} className='w-full mt-[2rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Continue</button>
                        </main>
                    })}
                </div>
            </form>
        </div>
    )
}

export default BankDetails