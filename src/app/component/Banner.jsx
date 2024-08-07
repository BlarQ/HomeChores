import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='px-5 py-2'>
        <div className='bg-[url(/banner1.jpg)] bg-cover bg-no-repeat min-h-[25vh] rounded-2xl p-4 flex justify-between flex-col'>
            <h1 className='text-2xl w-[70%] font-bold text-white'>What Service do you need?</h1>

            <Link className='bg-white w-fit p-3 rounded-xl text-red-400 font-bold cursor-pointer shadow-sm' href='/'>Get Started</Link>
        </div>
    </div>
  )
}
