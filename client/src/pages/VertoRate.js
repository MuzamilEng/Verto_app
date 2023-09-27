import Sidebars from '../component/Sidebars'
import Headers from '../component/Headers'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import { ProgressB } from '../component/ProgressBarB';
import Input1 from '../component/Input1';
import Input2 from '../component/Input2';
import Congrats from '../component/Congrats';

const VertoRate = () => {
    const [show, setShow] = useState(true);
    return (
        <main className='bg-white'>
            <Headers />
            <div className="content w-100 h-full flex">
                <div className="sideBar_Container">
                    <Sidebars />
                </div>
                <div className="dashboard_content relative bg-gray-100 p-3 w-full h-full rounded-l-lg">
                    <div className="relative">
                        <ProgressB />
                    </div>
                    {show ? <>
                        <div className="dashbord_center2 rounded-lg text-center bg-white shadow-lg shadow-gray-200/50">
                            <div className="verto_container relative">
                            <p className="text-gray-700 font-bold flex ml-3 pl-6 text-xl">I want to send</p>
                                <div className="flex items-center justify-around w-full">
                                    <Input1 />
                                    <Input2 />
                                    <Icon icon="akar-icons:arrow-repeat" className='text-teal-700 text-xl m-3' />
                                </div>
                                <div className="flex justify-between">
                                   <div className="flex">
                                   <div className="flex">
                                        <div className="border-r border-t-8 border-b-12 border-gray-500 h-[10rem] border-2"></div>
                                    </div>
                                    <div className="change_rate grid grid-cols-1 justify-start items-center">
                                        <p className='text-gray-400 mr-3 pr-6'>At Verto Rate</p>
                                        <h1 className="flex text-gray-700 text-2xl ml-2 m-2 p-2">1 INR = <Icon icon="fluent:arrow-sync-24-regular" className='text-red-500' /> GBP</h1>
                                        <h1 className="flex text-gray-700 text-md ml-2 p-2">1 GBP = <Icon icon="fluent:arrow-sync-24-regular" className='text-red-500' /> ING</h1>
                                    </div>
                                   </div>
                                    <div className="bg-gray-200 w-[20rem] p-4 rounded-lg justify-end">
                                        <p className="flex text-gray-400 text-right">
                                            Guranteed rate for next <span className="text-black">24 hours</span> <Icon icon="material-symbols:info-outline" className="ml-2" />
                                        </p>
                                        <p className="flex text-gray-400 text-right">
                                            fees <span className="text-black">0 INR</span> <Icon icon="material-symbols:info-outline" className="ml-2" />
                                        </p>
                                        <p className="flex text-gray-400 text-right">
                                            Estimated delivery <span className="text-black">24 hours</span> <Icon icon="material-symbols:info-outline" className="ml-2" />
                                        </p>
                                    </div>
                                </div>
                                    <div className="recipient mt-3 relative">
                                        <h1 className="text-gray-700 text-xl text-left ml-4 p-3">Recipient Gets</h1>
                                        <div className="flex justify-evenly ml-2 pl-1">
                                        <Input1 />
                                        <Input2 />
                                        </div>
                                    </div>
                                        <button onClick={()=> setShow(false)} type="button" className='bg-teal-700 border-2 hover:bg-teal-800 absolute left-6 mt-3 p-2 items-start rounded-md w-[20rem] text-white'>Send Now</button>
                            </div>
                        </div>
                    </> : <>
                    <div className="flex mt-4 pt-4 rounded_md justify-center item-center">
                    <Congrats />
                    </div>
                    </>}
                </div>
            </div>
        </main>
    )
}

export default VertoRate
