import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-10'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=326&q=80" alt="/" />

        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1623941000186-afafbcfb65e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" alt="/" />

        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="/" />

        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80" alt="/" />

        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80" alt="/" />

      </div>

      {/* Right Side */}
      <div className='flex flex-col h-full justify-center px-2'>
        <h3 className='text-5xl md:text-6xl font-bold '>Plan Your Next Trip</h3>
        <p className='text-2xl py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam tempore, quo maiores quae enim nam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deserunt repellat, sit maxime perferendis velit consequuntur? Commodi nesciunt voluptatum eligendi accusantium quos est inventore magnam, excepturi sit incidunt exercitationem similique.</p>

        <div className='mt-6'>
          <button className='border-0 bg-purple-400 text-white mr-3 font-semibold'>Learn More</button>
          <button className='border-0 bg-cyan-500 text-white font-semibold'>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;