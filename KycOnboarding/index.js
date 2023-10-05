import React from 'react'
import page from "../../assets/img/profile2.png"
import Image from 'next/image'
import Sidebar from '../../layouts/Sidebar'
import Header from '../../layouts/Header'
import Navbar from '../../_components/State/Header'
const index = () => {
    return (
        <>
            <div>
                <div style={{backgroundColor: "#fff"}} className="">
                    <Header />
                    <div className="max-w-screen w-full relative">
                        <div className="mt-[2.6%] pt-3 fixed top-0 left-0">
                            <Sidebar />
                        </div>
                        <div className="bg-[#fff]">
                            <div className="absolute w-full max-w-[88rem] right-0">
                                <div className="flex mt-[4rem]">
                                    <div className="flex flex-col items-center">
                                    <Image
                                        src={page}
                                        className=""
                                        alt=""
                                    />
                                    <p className='text-xl text-center mt-2 w-[14rem]'>Now payments are “Smarter” than you think</p>
                                    <button className='bg-[#000] p-3 text-xl w-full max-w-[26rem] rounded-md text-white'>Create Account</button>
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

export default index
