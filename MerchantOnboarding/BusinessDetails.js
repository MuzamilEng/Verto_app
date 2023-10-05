import React, { useState } from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Headers from '../KycOnboarding/Components/Headers'
import { businessDetails } from './Data'
import RegisterBusiness from './RegisterBusiness'
import { Icon } from '@iconify/react';
import BankDetails from './BankDetails'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import { ProgressBar } from '../StateManagement/Onboarding/BranchOffice'
import Slider from 'react-slick'
import images from '../../authentication/Images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BusinessDetails = () => {
    const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
    const [toggle, setToggle] = React.useState(true);
    const [toggle2, setToggle2] = React.useState(true);
    const [progress, setProgress] = React.useState(0);
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    const handleButtonClick = () => {
        if (progress < 2) {
            setProgress(progress + 1);
        }
    };
    const router = useRouter();
    const onSubmit = (data, e) => {
        // console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick();
            // router.push('/MerchantOnboarding/BusinessDetails');
        }
    }
    return (
        <>
            <div className=""><Headers /></div>
            <main className="flex justify-center ">
                <div className="w-full max-w-[33rem] mt-3">
                    <Slider {...settings} >
                        {images.map((item) => (
                            <div className="" key={item.id}>
                                <img style={{ width: "100%", height: "600px" }} src={item.src} alt={item.alt} width="100%" height="100%" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="">
                    <div style={{ marginRight: "1rem" }} className="mt-2"><ProgressBar percentage={progressPercentage} /></div>
                    <div className="flex -mt-[1.5rem]">
                        <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[35rem] rounded-md'>
                            <div className="p-2 rounded-md">
                                {businessDetails?.map((item) => {
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
                                        {/* <div className="">
                                                        {item?.form?.map((field) => {
                                                            return (
                                                                <div className="fields mt-2" key={field?.label}>
                                                                    <label
                                                                        className="text-black text-2xl"
                                                                        htmlFor={field?.label}
                                                                    >
                                                                        {field?.label}
                                                                    </label>
                                                                    <select
                                                                        className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                    >
                                                                        <option value="">Select Main Category</option>
                                                                        {field?.options?.map((option) => {
                                                                            return (
                                                                                <option
                                                                                    key={option?.label}
                                                                                    value={option?.label}
                                                                                >
                                                                                    {option?.label}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                </div>
                                                            );
                                                        })}
                                                    </div> */}
                                        {item?.form?.map((field2) => {
                                            return <div className="">
                                                <div className="fields mt-2" key={field2?.label}>
                                                    <label
                                                        className="text-black text-2xl"
                                                        htmlFor={field2?.label}
                                                    >
                                                        {field2?.label}
                                                    </label>
                                                    {field2?.type === 'text' ? (
                                                        <>
                                                            <Controller
                                                                name={`select-${field2?.label}`}
                                                                control={control}
                                                                defaultValue=""
                                                                rules={{ required: true }} // Add validation rules here
                                                                render={({ field }) => (
                                                                    <input
                                                                        {...field}
                                                                        type={field2?.type}
                                                                        placeholder={field2?.placeholder}
                                                                        className="w-[28rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                    />
                                                                )}
                                                            />
                                                            {errors[`select-${field2?.label}`]?.type === 'required' && (
                                                                <span className="text-red-500 text-lg">This field is required</span>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Controller
                                                                name={`select-${field2?.label}`}
                                                                control={control}
                                                                defaultValue=""
                                                                rules={{ required: true }} // Add validation rules here
                                                                render={({ field }) => (
                                                                    <textarea
                                                                        {...field}
                                                                        className="w-[28rem] h-[5rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                        rows={5}
                                                                        placeholder={field2?.placeholder}
                                                                    ></textarea>
                                                                )}
                                                            />
                                                            {errors[`select-${field2?.label}`]?.type === 'required' && (
                                                                <span className="text-red-500 text-lg">This field is required</span>
                                                            )}
                                                        </>
                                                    )}

                                                </div>
                                            </div>
                                        })}
                                        <button onClick={handleButtonClick} className='w-full mt-[3rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Continue</button>

                                    </main>
                                })}
                            </div>
                        </form>
                        <div className="newPassword">
                            <BankDetails handleButtonClick={handleButtonClick} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}



export default BusinessDetails
// <div>
//     <div style={{ backgroundColor: "#fff" }} className="">
//         <Header />
//         <div className="max-w-screen w-full relative">
//             <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
//                 <Sidebar />
//             </div>
//             <div className="bg-[#fff]">
//                 <div className="absolute w-full max-w-[88rem] right-0">
//                     <header className="mt-[4rem]">
//                         <Headers />
//                     </header>
//                     <div className="w-full mt-2 max-w-[82rem]"><ProgressBar percentage={progressPercentage} /></div>
//                     {/* <div className="mt-2">
//                         <ProgressBar />
//                     </div> */}
//                     <div className="flex -mt-[1.5rem]">
//                         <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-3 w-full m-2 max-w-[40rem] rounded-md'>
//                             <div className="p-5 rounded-md">
//                                 {businessDetails?.map((item) => {
//                                     return <main className='p-3'>
//                                         <h1 className='text-center text-black text-3xl font-semibold'>{item?.title}</h1>
//                                         <label htmlFor="" className="text-black text-2xl mt-2">{item?.label}</label>
//                                         <div className="flex items-center mt-3">
//                                             <span className="text-black text-base font-semibold m-2">Yes</span>
//                                             {toggle ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle(!toggle)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle(!toggle)} />}
//                                             <span className="text-black text-base font-semibold ml-2">NO</span>
//                                         </div>
//                                         <label htmlFor="" className="text-black text-2xl mt-2">{item?.label2}</label>
//                                         <div className="flex items-center mt-3">
//                                             <span className="text-black text-base font-semibold m-2">Yes</span>
//                                             {toggle2 ? <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle2(!toggle2)} /> : <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle2(!toggle2)} />}
//                                             <span className="text-black text-base font-semibold ml-2">NO</span>
//                                         </div>
//                                         {/* <div className="">
//                                             {item?.form?.map((field) => {
//                                                 return (
//                                                     <div className="fields mt-2" key={field?.label}>
//                                                         <label
//                                                             className="text-black text-2xl"
//                                                             htmlFor={field?.label}
//                                                         >
//                                                             {field?.label}
//                                                         </label>
//                                                         <select
//                                                             className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
//                                                         >
//                                                             <option value="">Select Main Category</option>
//                                                             {field?.options?.map((option) => {
//                                                                 return (
//                                                                     <option
//                                                                         key={option?.label}
//                                                                         value={option?.label}
//                                                                     >
//                                                                         {option?.label}
//                                                                     </option>
//                                                                 );
//                                                             })}
//                                                         </select>
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div> */}
//                                         {item?.form?.map((field2) => {
//                                             return <div className="">
//                                                 <div className="fields mt-2" key={field2?.label}>
//                                                     <label
//                                                         className="text-black text-2xl"
//                                                         htmlFor={field2?.label}
//                                                     >
//                                                         {field2?.label}
//                                                     </label>
//                                                     {field2?.type === 'text' ? (
//                                                         <>
//                                                             <Controller
//                                                                 name={`select-${field2?.label}`}
//                                                                 control={control}
//                                                                 defaultValue=""
//                                                                 rules={{ required: true }} // Add validation rules here
//                                                                 render={({ field }) => (
//                                                                     <input
//                                                                         {...field}
//                                                                         type={field2?.type}
//                                                                         placeholder={field2?.placeholder}
//                                                                         className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
//                                                                     />
//                                                                 )}
//                                                             />
//                                                             {errors[`select-${field2?.label}`]?.type === 'required' && (
//                                                                 <span className="text-red-500 text-lg">This field is required</span>
//                                                             )}
//                                                         </>
//                                                     ) : (
//                                                         <>
//                                                             <Controller
//                                                                 name={`select-${field2?.label}`}
//                                                                 control={control}
//                                                                 defaultValue=""
//                                                                 rules={{ required: true }} // Add validation rules here
//                                                                 render={({ field }) => (
//                                                                     <textarea
//                                                                         {...field}
//                                                                         className="w-[32rem] h-[5rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
//                                                                         rows={5}
//                                                                         placeholder={field2?.placeholder}
//                                                                     ></textarea>
//                                                                 )}
//                                                             />
//                                                             {errors[`select-${field2?.label}`]?.type === 'required' && (
//                                                                 <span className="text-red-500 text-lg">This field is required</span>
//                                                             )}
//                                                         </>
//                                                     )}

//                                                 </div>
//                                             </div>
//                                         })}
//                                         <button onClick={handleButtonClick} className='w-full mt-[2rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Continue</button>

//                                     </main>
//                                 })}
//                             </div>
//                         </form>
//                         <div className="newPassword">
//                             <BankDetails handleButtonClick={handleButtonClick} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>