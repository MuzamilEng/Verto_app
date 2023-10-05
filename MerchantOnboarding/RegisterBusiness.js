import React from 'react'
import { businessRequired } from './Data';
import { Icon } from '@iconify/react';
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';

const RegisterBusiness = ({ handleButtonClick }) => {
    const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
    const [toggle, setToggle] = React.useState(true)
    const router = useRouter()
    const onSubmit = (data, e) => {
        // console.log("loloolooloo");
        e.preventDefault();
        console.log(data);
        if (isValid) {
            handleButtonClick()
            router.push('/MerchantOnboarding/BusinessDetails');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-[#fff] p-2 w-full m-2 max-w-[35rem] rounded-md'>
                <div className="p-3 rounded-md">
                {businessRequired?.map((item) => {
  return (
    <main className='p-1' key={item?.title}>
      <h1 className='text-center text-black text-3xl font-semibold'>{item?.title}</h1>
      <label htmlFor="" className="text-black text-2xl mt-2">{item?.label}</label>
      <div className="flex items-center mt-3">
        <span className="text-black text-base font-semibold m-2">Yes</span>
        {toggle ? (
          <Icon className='text-4xl text-black' icon="gg:toggle-off" onClick={() => setToggle(!toggle)} />
        ) : (
          <Icon className='text-4xl text-black' icon="ri:toggle-line" onClick={() => setToggle(!toggle)} />
        )}
        <span className="text-black text-base font-semibold ml-2">NO</span>
      </div>
      <div className="">
        {item?.form?.map((item2) => {
          return (
            <div className="fields mt-2" key={item2?.label}>
              <label className="text-black text-2xl" htmlFor={item2?.label}>
                {item2?.label}
              </label>
              <Controller
                name={`select-${item2?.label}`} // Provide a unique name for each field
                control={control}
                defaultValue=""
                rules={{ required: true }} // Add validation rules here
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-[32rem] h-[3rem] text-lg text-black p-2.5 border-[1.5px] rounded-lg m-2 focus:border-blue-900 focus:outline-blue-900"
                  >
                    <option value="">Select Main Category</option>
                    {item2?.options?.map((option) => (
                      <option key={option?.label} value={option?.label}>
                        {option?.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {/* Display error message if field is required */}
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
              {/* Display error message if field is required */}
              {errors[`textarea-${field2?.label}`]?.type === 'required' && (
                <span className="text-red-500 text-lg">This field is required</span>
              )}
              {errors[`input-${field2?.label}`]?.type === 'required' && (
                <span className="text-red-500 text-lg">This field is required</span>
              )}
            </div>
          </div>
        );
      })}
      <button type='submit' className='w-full mt-[4rem] max-w-[32rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>
        Continue
      </button>
    </main>
  );
})}

                </div>
            </form>
        </div>
    )
}

export default RegisterBusiness