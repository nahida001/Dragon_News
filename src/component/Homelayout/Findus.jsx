import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';

const Findus = () => {
    return (
        <div>
           <h1 className='font-bold'>Find us on</h1> 
           <div>
            <div className="join join-vertical w-full">
  <button className="btn join-item bg-base-100 justify-start"><FaFacebook></FaFacebook>FaceBook</button>
  <button className="btn join-item bg-base-100 justify-start"><FaTwitter></FaTwitter>Twitter</button>
  <button className="btn join-item bg-base-100 justify-start"><FaInstagram></FaInstagram>Instagram</button>
</div>
           </div>
        </div>
    );
};

export default Findus;