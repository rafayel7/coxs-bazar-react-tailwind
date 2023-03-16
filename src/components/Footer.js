import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-200 py-2 px-2'>

      <div className='mx-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-8 py-8 px-4'>
        <div >
          <h6 className='font-bold uppercase my-2 '>Solutions</h6>
          <ul>
            <li>Travel</li>
            <li>Booking</li>
            <li>Flights</li>
            <li>Rooms</li>
            <li>Travel</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase my-2'>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Rating</li>
            <li>Flights</li>
            <li>Rooms</li>
            <li>Travel</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase my-2'>Company</h6>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Carrear</li>
            <li>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercase my-2'>Legal</h6>
          <ul>
            <li>Claims</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Policies</li>
            <li>Conditions</li>
          </ul>
        </div>

        <div className='col-span-2 py-8 md:pt-2'>
          <p className='uppercase font-bold'>Subscribe to our newsletters</p>
          <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam animi quibusdam rerum.</p>

          <form className='flex flex-col sm:flex-row'>
            <input className='rounded-md mr-4 mb-4 w-full p-2' type="email" placeholder='Enter Email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Experiences, LLC all right reservrd </p>

        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaYoutube></FaYoutube>
          <FaTwitter></FaTwitter>
          <TiSocialPinterest size={30}></TiSocialPinterest>
        </div>

      </div>
    </div>
  );
};

export default Footer;