import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../component/Homelayout/NewsCard';

const CategoryNews = () => {
   
    const {id}=useParams();
    const data=useLoaderData();
     const [categoryNews,setcategoryNews]=useState([])
   // console.log(id,data);

   useEffect(()=>{
    if(id == "0"){
        setcategoryNews(data);
       
    }
    else if(id == "1"){
       const filternews=data.filter((news)=>news.others.is_today_pick==true)
   setcategoryNews(filternews)
   
    }else{
     const filternews=data.filter((news)=>news.category_id==id)
   
    console.log(filternews);
    setcategoryNews(filternews)
    }
     
   },[data,id])
   
    return (
        <div>
            <h1 className='font-bold'>Dragon News</h1>
             <div className='grid grid-cols-1 gap-1'>
         {
            categoryNews.map((news)=>(<NewsCard key={news.id} news={news}></NewsCard>))
         }
            
        </div>
        </div>
       
    );
};

export default CategoryNews;