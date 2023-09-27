import Sidebars from '../component/Sidebars'
import Headers from '../component/Headers'
import { Icon } from '@iconify/react';
import React, { useState } from 'react'
import CommonTransaction from '../component/CommonTransaction';
import Link from 'next/link';

const Transactions = () => {
  return (
    <main className='bg-white'>
      <Headers />
      <div className="content w-100 h-full flex">
        <div className="sideBar_Container">
          <Sidebars />
        </div>
        <div className="dashboard_content bg-gray-100 w-full h-full rounded-l-lg">
          <div className="">
            <div className="mrkt_orders">
              {/* offer lists */}
              <div className="flex items-center ml-3 p-4 border-b-2 border-gray-300">
                <p className='text-teal-700 ml-3 p-3 border-b-2 border-teal-700' >At Verto Rate</p>
                <Link href="/DesiredRate">
                <p className='text-gray-500 ml-3 p-3' >At Desired Rate</p>
                </Link>
                <Link href="/BankAccount">
                <p className='text-gray-500 ml-3 p-3' >Bank Account</p>
                </Link>
                <Link href='/EWallet'>
                <p className='text-gray-500 ml-3 p-3'>E-Wallets</p>
                </Link>
              </div>
              <div className="flex items-center justify-between pt-3 mt-1">
                <div className="flex border-2 border-gray-300 rounded-md m-2">
                  <input type="search" placeholder='search' className='text-left p-2 rounded-lg focus:outline-none w-[17rem] bg-gray-100' /><Icon icon="charm:search" className='text-gray-400 text-lg m-2' />
                </div>
                <div className="flex items-center mr-4 m-2 p-2">
                 <div className="filter_icons">
                 <span className="text-gray-400 mr-2">Filter</span> <Icon icon="majesticons:filter-line" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Refresh</span> <Icon icon="fluent:arrow-sync-24-regular" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Export</span> <Icon icon="prime:file-export" className='text-gray-500 text-2xl mr-2' />
                 </div>
                </div>
              </div>
              <CommonTransaction />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Transactions
