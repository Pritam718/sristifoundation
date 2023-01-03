import React from 'react'

const About = () => {
  return (
    < div className='lg:flex bg-amber-100'>
      <div className='lg:w-1/2 bg-amber-100 text-center lg:p-16  text-3xl lg:text-9xl '>
        <h3 className='text-gray-400 lg:-rotate-90'>ABOUT US </h3>
      </div>
      <div  className=' bg-amber-200 lg:p-20 px-10  '>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      <span><a href='#' className='rounded-xl bg-red-200 px-3 '>read more....</a></span>
      </div>
    </div>
  )
}

export default About
