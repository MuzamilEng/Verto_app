import Link from 'next/link'
import React from 'react'

const Enjoy = () => {
  return (
    <div>
      <div className="relative global_container h-screen w-screen overflow-hidden">
        <img src="images/global2.png" alt="verto-currency" className="rounded-full globe_img"  />
       <div className="mt-1 p-3 global_container1">
       <h2 className="font-bold text-white text-3xl">Enjoy a free</h2>
        <h1 className="text-6xl text-white font-bold">multi-currency</h1>
        <h2 className="font-bold text-white text-3xl mr-4">account & recieve money from anywhere</h2>
       </div>
        <Link href="/Dashboard">
        <button className="btn ctn_button p-2 absolute bottom-5 left-auto right-auto border-teal-700 rounded-md font-bold bg-white text-teal-700 border-2 hover:bg-teal-700 hover:text-white">Continue</button>
        </Link>
      </div>
    </div>
  )
}

export default Enjoy
