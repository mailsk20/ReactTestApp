import React from 'react';
import { Route } from 'react-router-dom';


import ProductList from './productList/productList';
import ProductDeatil from './productDetail/productDetail';

export default ()=>{
    return (
        <div>
            <Route path ="/" exact component = {ProductList}/>
            <Route path ="/details/:id" component = {ProductDeatil}/>
        </div>
    );
}