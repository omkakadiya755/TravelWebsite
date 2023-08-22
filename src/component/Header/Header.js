import { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {


    // Initial theme color state
    const [themeColor, setThemeColor] = useState('white');

    const [dark, setdark] = useState(false)

    // Function to change theme color
    const changeThemeColor = (color) => {

      if (dark) { setdark(false) }
      else (setdark(true))
      setThemeColor(color);
    };

   return (
      <div className={`app ${themeColor}`}>
          
        <Link to="/home" className='l'> <i class="bi bi-house-door-fill cursor-pointer" /> </Link><br/>

        <Link to="/about" className='l'> <i class="bi bi-file-person-fill cursor-pointer" /> </Link><br/>

       <Link to="/Blog" className='l'> <i class="bi bi-person-lines-fill cursor-pointer" /> </Link><br/>

        {dark ? <i onClick={() => changeThemeColor('white')} class="bi bi-brightness-high-fill cursor-pointer" ></i> :
           <i onClick={() => changeThemeColor('black')} class="bi bi-moon cursor-pointer"></i>

        }

   
      </div>
      
      

    )
  
}


export default Header

