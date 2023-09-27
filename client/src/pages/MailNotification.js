import Sidebars from '../component/Sidebars'
import Headers from '../component/Headers'
import { Icon } from '@iconify/react';
import React from 'react'
import { notification_trends, trHistory } from '../Data';

const MailNotification = () => {
  return (
    <main className='bg-white'>
      <Headers />
      <div className="content w-100 h-full flex">
        <div className="sideBar_Container">
          <Sidebars />
        </div>
        <div className="dashboard_content bg-gray-100 w-full h-full rounded-l-lg">
          <div className="">
            <div className="notifications_list">
              {/* offer lists */}
             <div className="p-2 notify_btn">
                {notification_trends[0]?.title=== "notify" && notification_trends[0]?.list.map((item)=> {
                    const {id, name} = item;
                    return <main key={id} className="m-2 p-2">
                        <button className='btn notify_button uppercase' type="button">{name}</button>
                    </main>
                })}
             </div>
              {/* content info */}
              <div className="bg-white m-2 rounded-l-lg p-6">
                <div className="notifications1 border-b-2 border-gray-400">
                    {notification_trends[1]?.list.map((item)=> {
                        const {id, report, msg, icon} = item;
                        return <main className='flex relative justify-around border-2 border-gray-400 items-center p-4 rounded-md m-2' key={id}>
                           <div className="notify_align absolute left-0 ml-3">
                           <span className="bg-teal-500 mr-5 rounded-full p-2">{icon}</span>
                            <p className='ml-4'>{report}</p>
                           </div>
                            <p className='text-teal-700 cursor-pointer'>{msg}</p>
                        </main>
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

export default MailNotification
