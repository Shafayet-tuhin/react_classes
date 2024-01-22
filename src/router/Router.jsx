

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Root from '../pages/Root';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Root/>}>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                </Route>
                <Route path='*' element = { <h1> Page Not Found</h1> }/>
            </Routes>
        </BrowserRouter>  
    );
}

export default AppRouter;
