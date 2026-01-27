import React from 'react';
import SocalLogin from '../SocalLogin';
import Findus from './Findus';
import Qzone from './Qzone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
          <SocalLogin></SocalLogin>
          <Findus></Findus>
          <Qzone></Qzone>
        </div>
        
    );
};

export default RightAside;