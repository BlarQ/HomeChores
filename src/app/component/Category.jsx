import Link from 'next/link'
import React from 'react'
import { GiBroom } from "react-icons/gi";
import { LiaToolsSolid } from "react-icons/lia";
import { TbWashMachine } from "react-icons/tb";
import { GrPaint } from "react-icons/gr";


const services = [
    {
        id: 1,
        title: 'Cleaning',
        icon: <GiBroom />,
        link: '/cleaning',
        color: 'green-400',
        back: 'bg-green-200'
    },
    {
        id: 2,
        title: 'Repairing',
        icon: <LiaToolsSolid />,
        link: '/repairing',
        color: 'blue-400',
        back: 'bg-blue-200'
    },
    {
        id: 3,
        title: 'Laundry',
        icon: <TbWashMachine />,
        link: '/laundry',
        color: 'yellow-400',
        back: 'bg-yellow-200'
    },
    {
        id: 4,
        title: 'Painting',
        icon: <GrPaint />,
        link: '/painting',
        color: 'purple-400',
        back: 'bg-purple-200'
    },

]

export default function Category() {
    return (
        <div className='px-5 py-2'>
            <div className='flex justify-between items-center font-bold py-2'>
                <h2>Category</h2>
                <Link className='text-red-400' href='/'>See all</Link>
            </div>

            <div className='flex justify-between items-center py-2'>

                {
                    services.map((service) => {
                        return (
                            <div key={service.id} className='text-center space-y-3'>
                                <div className={`${service.back} w-fit rounded-xl`}>

                                    <Link href='/'>
                                        <div className={`text-4xl text-${service.color} p-3`}>
                                            {service.icon}
                                        </div>

                                    </Link>
                                </div>

                                <p className='text-sm'>{service.title}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
