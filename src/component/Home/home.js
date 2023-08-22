 import { Link } from "react-router-dom";
 import React from 'react'
 import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import "./home.css"


import a from './photos/Sutrat.jpeg';
import Surat from "./City/Surat/Surat.js";
// import b from './photos/2.jpeg';
// import c from './photos/3.jpeg';




function Home() {
  

    return(
    
    <>
        
        <div className="hmain">
            
            <h1 className="hh"> hi hello </h1>
            </div>

            <div>

                <Link to="/Surat" ><img src={a} className="a"/></Link>

                {/* <BrowserRouter>
                    <Routes>
             
                         <Route index element={<Home/>} />
                         <Route path='/Surat' element={<Surat />} /> 
                    </Routes>
                </BrowserRouter> */}

                
            </div>

  
    </>
    )
}

export default Home