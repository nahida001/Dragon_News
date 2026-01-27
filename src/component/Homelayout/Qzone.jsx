import React from 'react';
import swi from '../../assets/swimming.png'
import Class from '../../assets/class.png'
import Play from '../../assets/playground.png' 
import Bg from '../../assets/bg.png'
const Qzone = () => {
    return (
        <div className='bg-base-200 p-5'>
           <h1 className='font-bold'>Qzone</h1> 
           <div className='space-y-5'>
            <img src={swi} alt="" />
            <img src={Class} alt="" />
             <img src={Play} alt="" />
              <img src={Bg} alt="" />

           </div>
        </div>
    );
};

export default Qzone;