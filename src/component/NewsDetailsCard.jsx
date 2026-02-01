import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router';

const NewsDetailsCard = ({news}) => {
  // console.log(news);
    return (
        <div className='space-y-3'>
            <img src={news.image_url} alt="" />
            <h1 className='font-semibold text-xl'>{news.title}</h1>
            <p>{news.details}</p>
            <Link className='btn btn-secondary' to={`/category/${news.category_id}`}>All this news this Category</Link>
        </div>
    );
};

export default NewsDetailsCard;