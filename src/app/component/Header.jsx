import Image from 'next/image'
import Link from 'next/link'
// import { FaBell } from 'react-icons/fa'
import { VscBellDot } from "react-icons/vsc";


export default function Header() {
  return (
    <header className='flex justify-between items-center p-5'>
        <div
        className='flex items-center gap-2'
        >
            <Image
            className='rounded-full'
            src='/chores.jpg' width={35} height={35} alt='logo'/>
            <Link href='/'
            className='text-lg font-bold'
            ><span 
            className='text-red-400'
            >Home</span>Chores</Link>
        </div>

        <div className='flex justify-between items-center gap-3'>
            <div>

                <Link href='/'>
                    {/* <FaBell  /> */}
                    <VscBellDot className='text-3xl
                    text-red-400 ' />

                </Link>
            </div>
            <div>
                <Link href='/profile'>
                    <Image
                    className='rounded-full'
                    src='/user.jpg' width={35} height={35} alt='profile picture'/>
                </Link>
            </div>
        </div>
    </header>
  )
}
