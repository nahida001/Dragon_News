import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div></div> 
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                 <NavLink to="/">About</NavLink>
                  <NavLink to="/">Career</NavLink>
                </div> 
             <div className='Login-btn flex gap-5'>
                <img src={user} alt="" />
                <button className='btn btn-primary'>Login</button>
                </div>   
        </div>
    );
};

export default Navbar;