import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import Router from './router';
import HeaderComponent from './headerComponent/headerComponent';


export default App => {
    return (
        <BrowserRouter>
            <HeaderComponent></HeaderComponent>
            <Router></Router>
        </BrowserRouter>
    )
}