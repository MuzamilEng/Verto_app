import React from 'react'
import { newPassword } from './Data'
import { Controller, useForm } from 'react-hook-form';
import Success from './Components/Success';
import { useRouter } from 'next/router';

const Password = ({ handleButtonClick }) => {
  const { handleSubmit, register, control, formState: { errors, isValid } } = useForm();
  const [showPopup, setShowPopup] = React.useState(false);
  const router = useRouter();

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    if (isValid) {
      handleButtonClick();
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        router.push('/KycOnboarding/BankSetup');
      }, 2000);
    }
  }
  return (
    <div className='bg-[#fff] -mt-[1rem] p-2 w-full m-2 max-w-[35rem] rounded-md'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {newPassword?.map((item) => {
          return <main className='p-5 rounded-md'>
            <h1 className='text-center text-black font-semibold text-3xl'>{item?.title}</h1>
            <p className='text-xl text-center mt-2'>{item?.para}</p>
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
                  />
                  {errors?.exampleRequired?.[fieldIndex] && <span className='text-red-500 text-lg'>This field is required</span>}
                </div>
              );
            })}

            <button type='submit' className='w-full mt-4 max-w-[30rem] text-xl ml-[.5rem] p-3 rounded-md bg-[#000] text-white font-semibold'>Get Onboard</button>
          </main>
        })}
      </form>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative">
            <Success showSuccess={() => setShowPopup(!showPopup)}/>
          </div>
        </div>
      )}
    </div>
  )
}

export default Password