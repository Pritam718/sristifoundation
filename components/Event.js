import React from 'react'
import Image from 'next/image'
import { AcademicCapIcon,UserGroupIcon,HeartIcon,PencilSquareIcon } from '@heroicons/react/24/solid'
const Event = () => {
  return (
    <>
    <div className=' bg-amber-100 lg:flex  '>
      <div className=" text-center bg-amber-200 lg:w-1/2  lg:my-24 text-6xl lg:p-10">
        <span className=' font-serif font-semibold text-white	'>BY YOUR ONE</span> <br/><span className='font-serif text-red-400	'>DONATION </span><br/><span className=' font-serif font-semibold text-white	'>WE MAKE THOUSAND </span> <span className='font-serif text-red-400	'>HAPPY</span>
        <div className='flex justify-center gap-5 lg:my-5 py-5'>
          <button className="bg-red-300 rounded-3xl px-5 py-3 text-xl font-semibold lg:hover:text-2xl lg:hover:text-white	">Donate</button>
          <button className="bg-red-100 rounded-3xl px-5 py-3 text-xl font-semibold lg:hover:text-2xl lg:hover:text-red-400	">Register</button>
        </div>
        
      </div>
      <div className='lg:my-20 py-5'>
      <Image src='/WhatsApp Image 2022-09-10 at 8.03.15 PM.jpeg' width={800} height={500}  alt='image4'/>
      
      
      </div>
     
    </div>
    
    <nav className='bg-red-300 rounded-sm '>
        <div className='flex justify-center px-4 py-2.5 '>
            <ul className=' flex lg:gap-40 overflow-x-auto'>
          
                <li className='flex items-center justify-center'>
                  <div>
                    <AcademicCapIcon className="h-10 w-10 px-1   text-white"/>
                    </div>
                    <div>
                    <a href={'#'} className='text-2xl font-serif  rounded-xl  hover:bg-white hover:text-xl px-3 py-1'>EDUCATION</a>
                    </div>
                </li>
                <li className='flex justify-center items-center'>
                <div>
                    <PencilSquareIcon className="h-10 w-10 px-1   text-white"/>
                    </div>
                    <div>
                    <a href={'#'} className='text-2xl font-serif  rounded-xl  hover:bg-white hover:text-xl px-3 py-1'>SKILLS</a>

                    </div>
                </li>
                <li className='flex justify-center items-center'>
                <div>
                    <HeartIcon className="h-10 w-10 px-1   text-white"/>
                    </div>
                   <div> 
                    <a href={'#'} className='text-2xl font-serif  rounded-xl  hover:bg-white hover:text-xl px-3 py-1'>HEALTH</a>
                    </div>
                </li>
                <li className='flex justify-center items-center'>
                <div>
                    <UserGroupIcon className="h-10 w-10 px-1   text-white"/>
                    </div>
                  <div>
                  <a href={'#'} className='text-2xl font-serif  rounded-xl  hover:bg-white hover:text-xl px-3 py-1'>SUPPORT</a>
 
                    </div> 
                </li>
               
                

            </ul>
            
        </div> 
    </nav>
    <div className='lg:flex bg-amber-100'>
      <div>
        <Image src='/NGO_WWH v2.jpg' width={700} height={500} alt='image3'/>
      </div>
      <div className='lg:w-1/2 lg:m-24'>
        <h3 className='text-3xl text-center '>
            Events
        </h3>
        <br/>
        <div className='px-5 bg-amber-200'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        <span><a href='#' className='rounded-xl bg-red-200 px-3 '>read more....</a></span>

        </div>
      </div>
    </div>
  </>
  )
}

export default Event
