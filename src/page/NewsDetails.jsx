import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import RightAside from '../component/Homelayout/RightAside';
import NewsDetailsCard from '../component/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
     const data=useLoaderData();
    const {id}=useParams();
    const [news,setnews]=useState({});
   // console.log(data,id,news);
    useEffect(()=>{
        const newsDetails=data.find((singleNews)=>singleNews.id==id)
        setnews(newsDetails)
    },[data,id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
                <section className='col-span-9'>
                    <h1 className='font-bold'>News Details</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;