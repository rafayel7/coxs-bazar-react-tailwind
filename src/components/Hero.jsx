import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen'>

      <img className='top-0 left-0 w-full h-screen object-cover' src="https://images.unsplash.com/photo-1496566084516-c5b96fcbd5c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="/" />

      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />

      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] mx-auto absolute p-4'>
          <p className='font-bold'>All Inclusive</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Explore Cox's Bazar Sea Beach</h1>
          <p className='mx-w-[600px] drop-shadow-2xl text-xl my-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni sunt id repellat reprehenderit iste praesentium repudiandae at eveniet dignissimos vel?</p>

          <button className='text-lg font-semibold hover:bg-cyan-800 hover:border-1 hover:border-cyan-800'>Reserve Now</button>
        </div>
      </div>



    </div>
  )
}

export default Hero;