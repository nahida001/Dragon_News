import React from 'react';
import Header from '../component/Header';
import { Outlet } from 'react-router';
import Latestnews from '../component/Latestnews';
import Navbar from '../component/Navbar';
import LeftAside from '../component/Homelayout/LeftAside';
import RightAside from '../component/Homelayout/RightAside';

const HomeLayout = () => {
    return (
       <div >
        <header className='w-11/12 mx-auto'>
            <Header></Header>
            <section className='mt-4'>
                <Latestnews></Latestnews>
            </section>
            <nav className='mt-4'>
                <Navbar></Navbar>
            </nav>
        </header>
          
            <main className='w-11/12 mx-auto *: grid grid-cols-12 mt-4'>
               <aside className=' col-span-3'>
              <LeftAside></LeftAside>
               </aside>
               
                <section className='main col-span-6'>
                    <Outlet></Outlet>
                </section>
               <aside className='col-span-3'>
                <RightAside></RightAside>
               </aside>
            </main>
        </div>
    );
};

export default HomeLayout;