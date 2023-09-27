import React from 'react'
import { Icon } from '@iconify/react';


const Input2 = () => {
    return (
        <div>
            <main className="input_2">
                <div className="input2_container flex m-3 items-center justify-evenly p-2 rounded-md border-2 border-gray-400">
                    <Icon icon="twemoji:flag-chad" className='text-lg' />
                    <Icon icon="ph:currency-cny-fill" className=' text-lg ml-2' />
                    <p className='text-teal-600 ml-2'>INR</p>
                    <Icon icon="bxs:down-arrow" className="text-gray-400 text-lg ml-2" />
                </div>
            </main>
        </div>
    )
}

export default Input2
