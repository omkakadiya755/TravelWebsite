import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

import Header from '../Header/Header.js';
import Home from '../Home/home.js';
import About from '../About/About.js';
import Blog from '../Blog/Blog.js'



function Navigation() {
  return (
    <div>

        <BrowserRouter>
          
          <Header />
          <Routes>
              <Route path='/' element={<Outlet />} />
              <Route index element={<Home/>} />
              <Route path='/home' element={<Home />} /> 
              <Route path='/about' element={<About />} />
              <Route path='/Blog' element={<Blog />} />

          </Routes>
        </BrowserRouter>

        

    </div>
  )
}

export default Navigation