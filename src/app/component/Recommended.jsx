import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaDollarSign, FaStar } from "react-icons/fa";


const recommendedItems =[
    {
        id: 1,
        service: 'Cleaning',
        postBy: 'Rose Conwell',
        image: '/clean2.jpg',
        rating: '4.1',
        price: '10',
        percentage: '15'
    },
    {
        id: 1,
        service: 'Repairing',
        postBy: 'Mike Smith',
        image: '/repair1.jpg',
        rating: '4.1',
        price: '10',
        percentage: '17'
    }
]

export default function Recommended() {
  return (
    <div className='px-5 py-1'>
        <div className='flex justify-between items-center font-bold'>
            <h1>Recommended</h1>

            <Link className='text-red-400' href='/'>See all</Link>
        </div>

        <div className='py-4 space-y-4'>
            {
                recommendedItems.map((item) =>{
                    return (
                        <div key={item.id} className='rounded-xl bg-white shadow-md space-y-5 p-3'>
                            <div className='flex justify-between'>
                                <div className='flex justify-start items-center gap-2'>

                                <Image className='rounded-xl' src={item.image} width={90} height={90} alt={item.name} title={item.name} />

                                <div className='space-y-2'>
                                    <div>

                                    <h1 className='font-bold'>{item.service}</h1>
                                    <p className='text-sm text-gray-500'>by <span className='font-bold'>{item.postBy}</span></p>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className='bg-yellow-200 w-fit flex justify-center items-center py-1 px-2 gap-1 rounded-lg'>
                                            <FaStar className='text-xs text-yellow-400'/>
                                            <p className='text-sm font-bold'>{item.rating}</p>
                                        </div>
                                        <div className='bg-purple-200 w-fit flex justify-center items-center py-1 px-2 gap-1 rounded-lg'>
                                            <FaDollarSign className='text-xs text-purple-400'/>

                                            <p className='text-sm font-extrabold'>{item.price}/h</p>
                                        </div>
                                    </div>
                                </div>
                                </div>

                                <div>
                                    <div className='text-red-400 bg-red-50 px-2 rounded-md py-1'>

                                    <p className='text-sm font-bold'>Off {item.percentage}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
