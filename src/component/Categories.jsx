import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise=fetch('/public/categories.json').then((res)=>res.json())
const Categories = () => {
    const categories=use(categoriesPromise)
    return (
        <div>
            <h1 className='font-bold'>AllCategories({categories.length})</h1>
            <div className='grid grid-cols-1 mt-4 gap-2'>
                {categories.map((category)=>(<NavLink key={category.id} to={`/category/${category.id}`} className={"btn bg-base-100 border-0 hover:bg-base-200 "} >{category.name}</NavLink>))}
            </div>
        </div>
    );
};

export default Categories;