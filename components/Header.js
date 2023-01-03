import React from 'react'

const Header = () => {
  return (
    <>
    <div className='rounded-2xl border-l-slate-900 '>
    <nav className='bg-amber-100 rounded-sm '>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl px-4 py-2.5'>
            <div>
                <a href={'#'}>
                    <span className='text-2xl font-semibold uppercase  '>Sristi research Foundation</span>
                </a>
            </div>
            <div className='flex gap-5'>
                <a href={"#"} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-xl'>Login</a>
                <a href={"#"} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-xl'>Logout</a>
            </div>
        </div>
    </nav>
    <nav className='bg-amber-100 rounded-sm  '>
        <div className='flex flex-wrap justify-between mx-auto max-w-screen-2xl px-4 py-2.5'>
            <ul className=' lg:flex lg:gap-10'>
                <li>
                    <a href={'#'} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-2xl'>Home</a>
                </li>
                <li>
                    <a href={'#'}className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-2xl'>Events</a>
                </li>
                <li>
                    <a href={'#'} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-2xl'>Gallery</a>
                </li>
                <li>
                    <a href={'#'} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-2xl'>Our work</a>
                </li>
                <li>
                    <a href={'#'} className='font-serif rounded-xl px-3 py-1  lg:hover:bg-amber-200 hover:text-2xl'>Why Us</a>
                </li>
                <li>
                    <a href={'#'} className='font-serif rounded-xl px-3 py-1 lg:hover:bg-amber-200 hover:text-2xl'>What We Do</a>
                </li>
                

            </ul>
            <ul>
                <li>
                    <a href={'#'} className="bg-red-300 rounded-xl p-2 text-lg font-serif lg:hover:bg-red-200 hover:text-2xl	">Donate</a>
                </li>
            </ul>
        </div>
    </nav>
    </div>
    </>
  )
}

export default Header
