import React from 'react'
import { IoSearchOutline } from "react-icons/io5";


export default function Search() {
  return (
    <div className='px-5 py-2'>
        <div className='flex items-center justify-center h-14 bg-white gap-2 px-3 rounded-xl shadow-md'>
            <IoSearchOutline />
            <input className='w-[90%] h-full bg-inherit outline-none' type="text" placeholder="Search anything"/>
        </div>
    </div>
  )
}
