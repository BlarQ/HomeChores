import Link from 'next/link'
import React from 'react'

const recommendedtems =[
    {
        id: 1,
        service: 'Cleaning',
        postBy: 'Rose Conwell',
        image: '/image1.jpg',
        rating: '4.1',
        price: '10',
        percentage: '15'
    },
    {
        id: 1,
        service: 'Repairing',
        postBy: 'Mike Smith',
        image: '/image1.jpg',
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

        <div>
            

        </div>
    </div>
  )
}
