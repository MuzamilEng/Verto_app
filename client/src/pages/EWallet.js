import Sidebars from '../component/Sidebars'
import Headers from '../component/Headers'
import { Icon } from '@iconify/react';
import React from 'react'
import { eWallets, trHistory } from '../Data';
import Link from 'next/link';

const EWallet = () => {
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
              <Link href='/VertoRate'>
                <p className='text-gray-500 ml-3 p-3' >At Verto Rate</p>
                </Link>
                <Link href="/DesiredRate">
                <p className='text-gray-500 ml-3 p-3' >At Desired Rate</p>
                </Link>
                <Link href='/BankAccount'>
                <p className='text-gray-500 ml-3 p-3' >Bank Account</p>
                </Link>
                <Link href='/EWallet'>
                <p className='text-teal-700 ml-3 p-3 border-b-2 border-teal-700'>E-Wallets</p>
                </Link>

              </div>
              <div className="flex items-center justify-between pt-3 mt-1">
                <div className="flex border-2 border-gray-300 rounded-md m-2">
                  <input type="search" placeholder='search' className='text-left p-2 rounded-lg focus:outline-none w-[17rem] bg-gray-100' /><Icon icon="charm:search" className='text-gray-400 text-lg m-2' />
                </div>
                <div className="flex items-center mr-4 m-2 p-2">
                  <span className="text-gray-400 mr-2">Filter</span> <Icon icon="majesticons:filter-line" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Refresh</span> <Icon icon="fluent:arrow-sync-24-regular" className='text-gray-500 text-2xl mr-2' />
                  <span className="text-gray-400 mr-2">Export</span> <Icon icon="prime:file-export" className='text-gray-500 text-2xl mr-2' />
                </div>
              </div>
              {/* content info */}
              <div className="bg-white m-2 rounded-l-lg p-6">
                <div className="orders rounded-l-lg">

                  <div className="grid grid-cols-8 gap-2 items-center border-b-2 border-gray-300 p-2">
                    <span className="font-bold">Reference #</span>
                    <span className="font-bold">Transaction Time</span>
                    <span className="font-bold">Credit</span>
                    <span className="font-bold">Debit</span>
                    <span className="font-bold">Balance</span>
                    <span className="font-bold">Transaction Type</span>
                    <span className="font-bold">Status</span>
                    <span className="font-bold">Description</span>

                  </div>
                  {eWallets?.map((item) => {
                    const { order_id, oredr_date, credit, debit, balance, withdraw, status, description } = item;
                    return (
                      <div className="grid grid-cols-8 items-center border-b-2 border-gray-200 p-1" key={order_id}>
                        <span className="text-gray-400">{order_id}</span>
                        <p className=''>{oredr_date}</p>
                        <p>{credit}</p>
                        <p className={`${debit ? 'text-red-600' : 'text-yellow-400'}`}>{debit}</p>
                        <p className="text-gray-800">{balance}</p>
                        <p className="text-gray-400">{withdraw}</p>
                        <p className={`${status ? 'text-teal-700' : 'text-yellow-400'}`}>{status}</p>
                        <p className='w-24'>{description}</p>
                      </div>
                    );
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

export default EWallet
