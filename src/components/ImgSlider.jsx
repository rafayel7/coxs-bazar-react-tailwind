import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';


const ImgSlider = () => {

  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1606850780554-b55ea4dd0b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      title: 'Octopass',
    },
    {
      url: 'https://images.pexels.com/photos/6249050/pexels-photo-6249050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'CoupleDinner',
    },
    {
      url: 'https://b.zmtcdn.com/data/pictures/chains/6/6504436/d5d19cbcc099cf4652b90c6bf9f62804.jpg',
      title: 'RupChada',
    },
    {
      url: 'https://images.pexels.com/photos/4846351/pexels-photo-4846351.jpeg',
      title: 'PartyFoods',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)

  const previousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className='max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      > </div>

      {/* Left Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/30 text-white cursor-pointer'>
        <FaAngleLeft onClick={previousSlide} size={30}></FaAngleLeft>
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2  group-hover:bg-black/30 text-white cursor-pointer'>
        <FaAngleRight onClick={nextSlide} size={30}></FaAngleRight>
      </div>

      <div className='flex top-4 justify-center py-2'>
        {
          slides.map((slide, slideIndex) => (
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <RxDotFilled></RxDotFilled>
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default ImgSlider;