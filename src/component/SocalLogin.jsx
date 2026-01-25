import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const SocalLogin = () => {
    return (
        <div>
            <div className='font-bold mb-5'>Login with</div>
            <div className='space-y-3'>
               <button className='btn btn-outline btn-secondary w-full'><FcGoogle size={25}/>Login with Google</button>
                 <button className='btn btn-outline btn-primary w-full'><FaGithub size={25}/>Login with Github</button>
            </div>
        </div>
    );
};

export default SocalLogin;