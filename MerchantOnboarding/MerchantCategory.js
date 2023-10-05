import React, { useEffect, useState } from 'react'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Headers from '../KycOnboarding/Components/Headers'
import { merchantCategory, signup } from './Data'
import RegisterBusiness from './RegisterBusiness'
import { Controller, useForm } from 'react-hook-form'
import { ProgressBar } from '../StateManagement/Onboarding/BranchOffice'
import images from '../../authentication/Images'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Password from './Password'
const MerchantCategory = () => {
    const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
    const [selectedMainCategory, setSelectedMainCategory] = useState(''); // State to track the selected main category
    const [progress, setProgress] = React.useState(0);
    const progressPercentage = (progress === 0 ? 0 : progress === 1 ? 50 : 100);
    const [showPopup, setShowPopup] = React.useState(false);

    const handleMainCategoryChange = (e) => {
        setSelectedMainCategory(e.target.value);
    };

    const [step, setStep] = useState(1);
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
    const onSubmit = (data, e) => {
        //   console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick();
        }
    }
    useEffect(() => {
        // This code will execute whenever selectedMainCategory changes.
        // You can update the state, fetch subcategory options, or perform any other logic here.
    }, [selectedMainCategory]);

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
                            <div className="p-3 rounded-md">
                                {merchantCategory?.map((item) => {
                                    return <main className='p-2'>
                                        <h1 className='text-center text-black text-3xl font-semibold'>{item?.title}</h1>
                                        <div className="">
                                            {item?.form?.map((item2) => {
                                                return (
                                                    <div className="fields mt-2" key={item2?.label}>
                                                        <label
                                                            className="text-black text-2xl"
                                                            htmlFor={item2?.label}
                                                        >
                                                            {item2?.label}
                                                        </label>
                                                        <Controller
                                                            name={`field-${item2?.label}`}
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{ required: true }}
                                                            render={({ field }) => (
                                                                <select
                                                                    {...field}
                                                                    className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                    onChange={(e) => {
                                                                        field.onChange(e); // This line is essential to update the form state
                                                                        setSelectedMainCategory(e.target.value);
                                                                    }}
                                                                >
                                                                    <option value="">Select Main Category</option>
                                                                    {item2?.options?.map((option) => (
                                                                        <option key={option?.label} value={option?.label}>
                                                                            {option?.label}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            )}
                                                        /> <br />
                                                        {errors[`field-${item2?.label}`]?.type === 'required' && (
                                                            <span className="text-red-500 text-lg">This field is required</span>
                                                        )} <br />
                                                        <label className="text-black text-2xl" htmlFor={item2?.label}>
                                                            Select Sub Category
                                                        </label>

                                                        <Controller
                                                            name={`select-${item2?.label}`}
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{ required: true }}
                                                            render={({ field }) => (
                                                                <select
                                                                    {...field}
                                                                    className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                >
                                                                    <option value="">Select Sub Category</option>
                                                                    {item2?.options
                                                                        ?.find((opt) => opt?.label === selectedMainCategory)
                                                                        ?.option?.map((option) => (
                                                                            <option key={option?.value} value={option?.value}>
                                                                                {option.label}
                                                                            </option>
                                                                        ))}
                                                                </select>
                                                            )}
                                                        />

                                                        {/* Display error messages */}
                                                        {errors[`select-${item2?.label}`]?.type === 'required' && (
                                                            <span className="text-red-500 text-lg">This field is required</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {item?.form2?.map((field2) => {
                                            return (
                                                <div className="" key={field2?.label}>
                                                    <div className="fields mt-2">
                                                        <label className="text-black text-2xl" htmlFor={field2?.label}>
                                                            {field2?.label}
                                                        </label>
                                                        {field2?.type === 'textarea' ? (
                                                            <Controller
                                                                name={`textarea-${field2?.label}`} // Provide a unique name for each field
                                                                control={control}
                                                                defaultValue=""
                                                                rules={{ required: true }} // Add validation rules here
                                                                render={({ field }) => (
                                                                    <textarea
                                                                        {...field}
                                                                        className='w-[32rem] h-[5rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
                                                                        rows={5}
                                                                        placeholder={field2?.placeholder}
                                                                    ></textarea>
                                                                )}
                                                            />
                                                        ) : (
                                                            <Controller
                                                                name={`input-${field2?.label}`} // Provide a unique name for each field
                                                                control={control}
                                                                defaultValue=""
                                                                rules={{ required: true }} // Add validation rules here
                                                                render={({ field }) => (
                                                                    <input
                                                                        {...field}
                                                                        type={field2?.type}
                                                                        placeholder={field2?.placeholder}
                                                                        className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                                                                    />
                                                                )}
                                                            />
                                                        )}
                                                    </div>
                                                    {/* Display error message if field is required */}
                                                    {errors[`textarea-${field2?.label}`]?.type === 'required' && (
                                                        <span className="text-red-500 text-lg">This field is required</span>
                                                    )}
                                                    {errors[`input-${field2?.label}`]?.type === 'required' && (
                                                        <span className="text-red-500 text-lg">This field is required</span>
                                                    )}
                                                </div>
                                            );
                                        })}

                                        <button type='submit' className='w-full mt-[2rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Continue</button>

                                    </main>
                                })}
                            </div>
                        </form>
                        <div className="newPassword">
                            <RegisterBusiness handleButtonClick={handleButtonClick} />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default MerchantCategory


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
//                                             <ProgressBar step={step}/>
//                                         </div> */}
//                     <div className="flex -mt-[1.5rem]">
//                         <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[40rem] rounded-md'>
//                             <div className="p-5 rounded-md">
//                                 {merchantCategory?.map((item) => {
//                                     return <main className='p-2'>
//                                         <h1 className='text-center text-black text-3xl font-semibold'>{item?.title}</h1>
//                                         <div className="">
//                                             {item?.form?.map((item2) => {
//                                                 return (
//                                                     <div className="fields mt-2" key={item2?.label}>
//                                                         <label
//                                                             className="text-black text-2xl"
//                                                             htmlFor={item2?.label}
//                                                         >
//                                                             {item2?.label}
//                                                         </label>
//                                                         <Controller
//                                                             name={`field-${item2?.label}`}
//                                                             control={control}
//                                                             defaultValue=""
//                                                             rules={{ required: true }}
//                                                             render={({ field }) => (
//                                                                 <select
//                                                                     {...field}
//                                                                     className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
//                                                                     onChange={(e) => {
//                                                                         field.onChange(e); // This line is essential to update the form state
//                                                                         setSelectedMainCategory(e.target.value);
//                                                                     }}
//                                                                 >
//                                                                     <option value="">Select Main Category</option>
//                                                                     {item2?.options?.map((option) => (
//                                                                         <option key={option?.label} value={option?.label}>
//                                                                             {option?.label}
//                                                                         </option>
//                                                                     ))}
//                                                                 </select>
//                                                             )}
//                                                         /> <br />
//                                                         {errors[`field-${item2?.label}`]?.type === 'required' && (
//                                                             <span className="text-red-500 text-lg">This field is required</span>
//                                                         )} <br />
//                                                         <label className="text-black text-2xl" htmlFor={item2?.label}>
//                                                             Select Sub Category
//                                                         </label>

//                                                         <Controller
//                                                             name={`select-${item2?.label}`}
//                                                             control={control}
//                                                             defaultValue=""
//                                                             rules={{ required: true }}
//                                                             render={({ field }) => (
//                                                                 <select
//                                                                     {...field}
//                                                                     className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
//                                                                 >
//                                                                     <option value="">Select Sub Category</option>
//                                                                     {item2?.options
//                                                                         ?.find((opt) => opt?.label === selectedMainCategory)
//                                                                         ?.option?.map((option) => (
//                                                                             <option key={option?.value} value={option?.value}>
//                                                                                 {option.label}
//                                                                             </option>
//                                                                         ))}
//                                                                 </select>
//                                                             )}
//                                                         />

//                                                         {/* Display error messages */}
//                                                         {errors[`select-${item2?.label}`]?.type === 'required' && (
//                                                             <span className="text-red-500 text-lg">This field is required</span>
//                                                         )}
//                                                     </div>
//                                                 );
//                                             })}
//                                         </div>
//                                         {item?.form2?.map((field2) => {
//                                             return (
//                                                 <div className="" key={field2?.label}>
//                                                     <div className="fields mt-2">
//                                                         <label className="text-black text-2xl" htmlFor={field2?.label}>
//                                                             {field2?.label}
//                                                         </label>
//                                                         {field2?.type === 'textarea' ? (
//                                                             <Controller
//                                                                 name={`textarea-${field2?.label}`} // Provide a unique name for each field
//                                                                 control={control}
//                                                                 defaultValue=""
//                                                                 rules={{ required: true }} // Add validation rules here
//                                                                 render={({ field }) => (
//                                                                     <textarea
//                                                                         {...field}
//                                                                         className='w-[32rem] h-[5rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900'
//                                                                         rows={5}
//                                                                         placeholder={field2?.placeholder}
//                                                                     ></textarea>
//                                                                 )}
//                                                             />
//                                                         ) : (
//                                                             <Controller
//                                                                 name={`input-${field2?.label}`} // Provide a unique name for each field
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
//                                                         )}
//                                                     </div>
//                                                     {/* Display error message if field is required */}
//                                                     {errors[`textarea-${field2?.label}`]?.type === 'required' && (
//                                                         <span className="text-red-500 text-lg">This field is required</span>
//                                                     )}
//                                                     {errors[`input-${field2?.label}`]?.type === 'required' && (
//                                                         <span className="text-red-500 text-lg">This field is required</span>
//                                                     )}
//                                                 </div>
//                                             );
//                                         })}

//                                         <button type='submit' className='w-full mt-[2rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Continue</button>

//                                     </main>
//                                 })}
//                             </div>
//                         </form>
//                         <div className="newPassword">
//                             <RegisterBusiness handleButtonClick={handleButtonClick} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>