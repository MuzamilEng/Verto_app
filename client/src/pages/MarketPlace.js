import Sidebars from '../component/Sidebars'
import Headers from '../component/Headers'
import { Icon } from '@iconify/react';
import React from 'react'
import { mr_Orders } from '../Data';

const MarketPlace = () => {
  return (
    <main className='bg-white'>
      <Headers />
      <div className="content w-100 h-full flex">
        <div className="sideBar_Container">
          <Sidebars />
        </div>
        <div className="dashboard_content bg-gray-100 w-full h-full rounded-l-lg">
          <div className="">
            <h1 className=" pt-10 pl-4 text-md text-gray-500 p-3">Our customers have transferred over $100 millions. You are in good hands.</h1>
            <main className="dashbord_center1 rounded-lg bg-teal-500 shadow-lg shadow-teal-300/50">
              <div className="flex justify-between items-center">
                <div className="">
                  <div className="convert_money">
                    <p className='text-white text-lg'>I want to sell </p>
                    <span className='text-teal-700 flex items-center ml-4 bg-white p-1 rounded-md'> INR <Icon icon="bxs:down-arrow" className="text-teal-700 text-md ml-3" /> </span> <span className="text-white ml-2"> & buy </span>
                    <span className='text-teal-700 flex items-center bg-white ml-4 p-1 rounded-md'> GBP <Icon icon="bxs:down-arrow" className="text-teal-700 text-md ml-3" /> </span> <span className="text-white ml-2"> at </span>
                  </div>
                  <div className="convert_money mt-3 pt-3">
                    <p className='text-white text-lg'>rate 1 INR = </p>
                    <span className='text-teal-700 flex items-center ml-4 bg-white p-1 rounded-md'> <input type="number" className='w-12 rounded-md' /> </span> <span className="text-white ml-2"> GBP </span>
                  </div>
                  <div className="works flex mt-3 pt-3 items-center">
                    <span className="text-white">How it works ?</span> <Icon icon="material-symbols:info-outline" className="ml-2 text-white" />
                  </div>
                </div>
                <div className="btn_submit -mt-3">
                  <button type='submit' className="button_submit">SUBMIT</button>
                </div>
              </div>
            </main>
            <div className="mrkt_orders">
              {/* offer lists */}
              <h1 className="text-2xl font-bold ml-2">My Marketplace Orders</h1>
              <div className="flex items-center ml-3  border-b-2 border-gray-300">
                <p className='text-gray-500 ml-3 p-3'>Active Orders</p>
                <p className='text-gray-500 ml-3 p-3'>Offers</p>
                <p className='text-gray-500 ml-3 p-3'>Expired Orders</p>
              </div>
              <div className="flex items-center justify-between pt-3 mt-1">
                <div className="flex border-2 border-gray-300 rounded-md m-2">
                  <input type="search" placeholder='search' className='text-left p-2 rounded-lg focus:outline-none w-[17rem] bg-gray-100' /><Icon icon="charm:search" className='text-gray-400 text-lg m-2' />
                </div>
                <div className="flex items-center mr-4 m-2 p-2">
                  <span className="text-gray-400">Refresh</span> <Icon icon="fluent:arrow-sync-24-regular" className='text-gray-500 text-lg' />
                </div>
              </div>
              {/* content info */}
              <div className="bg-white m-2 rounded-l-lg p-6">
                <div className="orders rounded-l-lg">

                  <div className="grid grid-cols-7 gap-2 items-center">
                    <span className="font-bold">Order Id</span>
                    <span className="font-bold">Order Date</span>
                    <span className="font-bold">Sailing</span>
                    <span className="font-bold">Buying</span>
                    <span className="font-bold">To</span>
                    <span className="font-bold">Rate</span>
                    <span className="font-bold">Status</span>


                  </div>
                  {mr_Orders?.map((item) => {
                    const { order_id, oredr_date, from, to, agreed_rate, rate, status } = item;
                    return <>
                      <div className='grid grid-cols-7 items-center' key={order_id}>
                        <span className="text-gray-400">{order_id}</span>
                        <p>{oredr_date}</p>
                        <p>{from}</p>
                        <p>{to}</p>
                        <p className="text-gray-400">{rate}</p>
                        <p>{agreed_rate}</p>
                        <p className='text-teal-500 ml-2 pt-2'>{status}</p>



                      </div>
                    </>
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MarketPlace
