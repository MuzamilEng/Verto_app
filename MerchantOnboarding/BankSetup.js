import React from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Headers from '../KycOnboarding/Components/Headers'
import { virtualBank } from './Data'
import { ProgressBar } from '../StateManagement/Onboarding/BranchOffice'
import BankInfo from './BankInfo'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import AccountSuccess from '../KycOnboarding/Components/AccountSuccess'
import Slider from 'react-slick'
import images from '../../authentication/Images'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const BankSetup = () => {
    const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
    const [progress, setProgress] = React.useState(0);
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);
    const [showPopup, setShowPopup] = React.useState(false);

    const handleButtonClick = () => {
        if (progress < 2) {
            setProgress(progress + 1);
        }
    };
    const router = useRouter();

    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    const onSubmit = (data, e) => {
        // console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick();
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
                router.push('/');
            }, 2000);
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
                        <div className="newPassword">
                            <BankInfo handleButtonClick={handleButtonClick} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[35rem] rounded-md'>
                            <div className="p-2 rounded-md">
                                {virtualBank?.map((item) => {
                                    return <div className="banksetup">
                                        <h1 className='text-center text-black font-semibold text-3xl'>{item?.title}</h1>
                                        <p className='text-center text-xl mt-2'>{item?.para}</p>
                                        <p className='text-black text-xl mt-2 font-semibold'>{item?.info}</p>
                                        <div className="form">
                                            {item?.form?.map((item2, fieldIndex) => {
                                                return (
                                                    <div className="p-2" key={fieldIndex}>
                                                        <label className='text-black text-xl' htmlFor={item2?.label}>{item2?.label}</label>
                                                        <Controller
                                                            name={`exampleRequired[${fieldIndex}]`} // Use unique names for each input field
                                                            control={control}
                                                            defaultValue=""
                                                            render={({ field }) => (
                                                                <input {...field} className='w-full h-[3rem] text-lg max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:outline-blue-900' type={item2?.type} placeholder={item2?.placeholder} />
                                                            )}
                                                            rules={{ required: true }}
                                                        /> <br />
                                                        {errors?.exampleRequired?.[fieldIndex] && <span className='text-red-500 text-lg'>This field is required</span>}
                                                    </div>
                                                );
                                            })}

                                        </div>
                                        <div className="currency_options">
                                            {item?.currency?.map((curr) => {
                                                return <main className='p-2'>
                                                    <div className="ml-4">
                                                    <input type={curr?.type} />
                                                    <label className='text-black text-lg ml-2 mt-1' htmlFor={curr?.label}>{curr?.label}</label>
                                                    </div>
                                                    <div className="grid mt-2 ml-4 grid-cols-3 gap-3 items-center">
                                                        {curr?.form?.map((field) => (
                                                            <div className="">
                                                                <input type={field?.type} />
                                                                <label className='text-black text-lg ml-2 mt-1' htmlFor={field?.label}>{field?.label}</label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="info">
                                                        {curr?.form2?.map((field2, index) => (
                                                            <main className='p-2' key={index}>
                                                                {field2?.type === 'select' ? (
                                                                    <>
                                                                        <label className='text-black text-lg ml-2' htmlFor={field2?.label}>{field2?.label}</label>
                                                                        <Controller
                                                                            name={`selectField${index}`} // Use a unique name for each field
                                                                            control={control}
                                                                            defaultValue=""
                                                                            render={({ field }) => (
                                                                                <select
                                                                                    {...field}
                                                                                    className='w-[30rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                                >
                                                                                    <option value="">Select an option</option>
                                                                                    {field2?.options?.map((option) => (
                                                                                        <option key={option?.value} value={option?.value}>
                                                                                            {option?.label}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            )}
                                                                            rules={{ required: 'This field is required' }} // Add validation rule
                                                                        />
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <label className='text-black text-lg ml-2' htmlFor={field2?.label}>{field2?.label}</label>
                                                                        <Controller
                                                                            name={`inputField${index}`} // Use a unique name for each field
                                                                            control={control}
                                                                            defaultValue=""
                                                                            render={({ field }) => (
                                                                                <input
                                                                                    {...field}
                                                                                    className='w-[30rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                                    type={field2?.type}
                                                                                />
                                                                            )}
                                                                            rules={{ required: 'This field is required' }} // Add validation rule
                                                                        />
                                                                    </>
                                                                )} <br />
                                                                {errors[`selectField${index}`] && (
                                                                    <span className='text-red-500 text-lg'>This field is required</span>
                                                                )}
                                                                {errors[`inputField${index}`] && (
                                                                    <span className='text-red-500 text-lg'>This field is required</span>
                                                                )}
                                                            </main>
                                                        ))}
                                                        {showPopup && (
                                                            <div className="fixed inset-0 flex items-center justify-center">
                                                                <div className="relative">
                                                                    <AccountSuccess showSuccess={() => setShowPopup(!showPopup)} />
                                                                </div>
                                                            </div>
                                                        )}

                                                    </div>
                                                    <button type='submit' className='w-full mt-[2rem] max-w-[33rem] text-xl ml-[1rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Create Virtual Account</button>
                                                </main>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </>
    )
}

export default BankSetup

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
//                     <div className="w-full mt-4 max-w-[82rem]"><ProgressBar percentage={progressPercentage} /></div>
//                     <div className="flex -mt-[1.5rem]">
//                         <div className="newPassword">
//                             <BankInfo handleButtonClick={handleButtonClick} />
//                         </div>
//                         <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[40rem] rounded-md'>
//                             <div className="p-2 rounded-md">
//                                 {virtualBank?.map((item) => {
//                                     return <div className="banksetup">
//                                         <h1 className='text-center text-black font-semibold text-3xl'>{item?.title}</h1>
//                                         <p className='text-center text-xl mt-2'>{item?.para}</p>
//                                         <p className='text-black text-xl mt-2 font-semibold'>{item?.info}</p>
//                                         <div className="form">
//                                             {item?.form?.map((item2, fieldIndex) => {
//                                                 return (
//                                                     <div className="p-2" key={fieldIndex}>
//                                                         <label className='text-black text-xl' htmlFor={item2?.label}>{item2?.label}</label>
//                                                         <Controller
//                                                             name={`exampleRequired[${fieldIndex}]`} // Use unique names for each input field
//                                                             control={control}
//                                                             defaultValue=""
//                                                             render={({ field }) => (
//                                                                 <input {...field} className='w-full h-[3rem] text-lg max-w-[30rem] text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:outline-blue-900' type={item2?.type} placeholder={item2?.placeholder} />
//                                                             )}
//                                                             rules={{ required: true }}
//                                                         /> <br />
//                                                         {errors?.exampleRequired?.[fieldIndex] && <span className='text-red-500 text-lg'>This field is required</span>}
//                                                     </div>
//                                                 );
//                                             })}

//                                         </div>
//                                         <div className="currency_options">
//                                             {item?.currency?.map((curr) => {
//                                                 return <main className='p-2'>
//                                                     <input type={curr?.type} />
//                                                     <label className='text-black text-lg ml-2 mt-1' htmlFor={curr?.label}>{curr?.label}</label>
//                                                     <div className="grid mt-2 ml-4 grid-cols-3 gap-3 items-center">
//                                                         {curr?.form?.map((field) => (
//                                                             <div className="">
//                                                                 <input type={field?.type} />
//                                                                 <label className='text-black text-lg ml-2 mt-1' htmlFor={field?.label}>{field?.label}</label>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                     <div className="info">
//                                                         {curr?.form2?.map((field2, index) => (
//                                                             <main className='p-2' key={index}>
//                                                                 {field2?.type === 'select' ? (
//                                                                     <>
//                                                                         <label className='text-black text-lg ml-2' htmlFor={field2?.label}>{field2?.label}</label>
//                                                                         <Controller
//                                                                             name={`selectField${index}`} // Use a unique name for each field
//                                                                             control={control}
//                                                                             defaultValue=""
//                                                                             render={({ field }) => (
//                                                                                 <select
//                                                                                     {...field}
//                                                                                     className='w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
//                                                                                 >
//                                                                                     <option value="">Select an option</option>
//                                                                                     {field2?.options?.map((option) => (
//                                                                                         <option key={option?.value} value={option?.value}>
//                                                                                             {option?.label}
//                                                                                         </option>
//                                                                                     ))}
//                                                                                 </select>
//                                                                             )}
//                                                                             rules={{ required: 'This field is required' }} // Add validation rule
//                                                                         />
//                                                                     </>
//                                                                 ) : (
//                                                                     <>
//                                                                         <label className='text-black text-lg ml-2' htmlFor={field2?.label}>{field2?.label}</label>
//                                                                         <Controller
//                                                                             name={`inputField${index}`} // Use a unique name for each field
//                                                                             control={control}
//                                                                             defaultValue=""
//                                                                             render={({ field }) => (
//                                                                                 <input
//                                                                                     {...field}
//                                                                                     className='w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
//                                                                                     type={field2?.type}
//                                                                                 />
//                                                                             )}
//                                                                             rules={{ required: 'This field is required' }} // Add validation rule
//                                                                         />
//                                                                     </>
//                                                                 )} <br />
//                                                                 {errors[`selectField${index}`] && (
//                                                                     <span className='text-red-500 text-lg'>This field is required</span>
//                                                                 )}
//                                                                 {errors[`inputField${index}`] && (
//                                                                     <span className='text-red-500 text-lg'>This field is required</span>
//                                                                 )}
//                                                             </main>
//                                                         ))}
//                                                         {showPopup && (
//                                                             <div className="fixed inset-0 flex items-center justify-center">
//                                                                 <div className="relative">
//                                                                     <AccountSuccess showSuccess={() => setShowPopup(!showPopup)} />
//                                                                 </div>
//                                                             </div>
//                                                         )}

//                                                     </div>
//                                                     <button type='submit' className='w-full mt-[2rem] max-w-[33rem] text-xl ml-[1rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Create Virtual Account</button>
//                                                 </main>
//                                             })}
//                                         </div>
//                                     </div>
//                                 })}
//                             </div>
//                         </form>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>