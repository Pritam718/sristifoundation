import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <>
    

    <div className=' bg-amber-100 lg:flex  '>
      <div className=" text-center  lg:w-1/2  lg:my-20 text-6xl lg:p-36">
        <span className=' font-serif font-semibold text-red-200	'>SEE OUR EVENTS</span> <br/><span className=' font-serif font-semibold text-red-400	'>GALLERY</span>
        <div className='flex justify-center gap-5 lg:my-5 py-5'>
          <button className="bg-red-300 rounded-3xl px-5 py-3 text-xl font-semibold	lg:hover:text-2xl lg:hover:text-w">VIEW GALLERY</button>
          
        </div>
        
      </div>
      <div className='lg:my-20 '>
      <Image src='/WhatsApp Image 2022-09-20 at 7.52.56 PM.jpeg' width={800} height={600}  alt='image1'  />
     </div>
     
    </div>
   
    </>
    
  )
}

export default Gallery
