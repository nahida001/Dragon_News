import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-items-center flex-col items-center gap-2 '>
          <img src={logo} alt="" className='pt-5 w-[350px]' />
          <h3 className='text-accent'>Journalism Without Fear or Favour</h3>
          <p className='text-semibold text-accent'>{format(new Date(),"EEEE,MM MMMM,yyyy ")}</p> 
        </div>
    );
};

export default Header;