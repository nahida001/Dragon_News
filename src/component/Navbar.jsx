import React from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
     const {user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
        console.log("user trying to logout");
        logOut().then(() => {
         alert("You LogOut Successfully")
}    ).catch((error) => {
       console.log(error);
});

    }
   
    return (
        <div className='flex justify-between items-center'>
           <div>{user && user.email}</div> 
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                 <NavLink to="/about">About</NavLink>
                  <NavLink to="/career">Career</NavLink>
                </div> 
             <div className='Login-btn flex gap-5'>
                <img className='w-12 rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {user ? (<button onClick={handleLogOut} className='btn btn-primary'>LogOut</button>) : (<Link to={`/auth/login`} className='btn btn-primary'>Login</Link>)}
                 </div>   
        </div>
    );
};

export default Navbar;