import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import "./home.css"


import a from './photos/Sutrat.jpeg';
import Surat from "./City/Surat/Surat.js";
// import b from './photos/2.jpeg';
// import c from './photos/3.jpeg';




function Home() {
    const [themeColor, setThemeColor] = useState('white');

    const [dark, setdark] = useState(false)

    // Function to change theme color
    const changeThemeColor = (color) => {

        if (dark) { setdark(false) }
        else (setdark(true))
        setThemeColor(color);
    };

    return (

        <>
            <div className={`app ${themeColor} d-flex pb-5`}>
                <div className="NaVbar">
                    <Link to="/home" className='l'> <i class="bi bi-house-door-fill cursor-pointer" /> </Link><br />

                    <Link to="/about" className='l'> <i class="bi bi-file-person-fill cursor-pointer" /> </Link><br />

                    <Link to="/Blog" className='l'> <i class="bi bi-person-lines-fill cursor-pointer" /> </Link><br />

                    {dark ? <i onClick={() => changeThemeColor('white')} class="bi bi-brightness-high-fill cursor-pointer" ></i> :
                        <i onClick={() => changeThemeColor('black')} class="bi bi-moon cursor-pointer"></i>

                    }
                </div>


                <div className="w-100">

                    <div className="hmain">

                        <h1 className="hh"> hi hello </h1>
                    </div>

                    <div>

                        <Link to="/Surat" ><img src={a} className="a" /></Link>




                    </div>
                </div>

            </div>

        </>
    )
}

export default Home