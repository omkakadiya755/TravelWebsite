import React from 'react'
import './Footer.css'
function Footer() {
    
  return (
    <>
    <div className='Main'>
    <div class="footer-container">
        <div class="footer-left">
            <h3>Popular Places</h3>
            <ul>    
                <li> New Delhi </li>
                <li> Kolkata </li>
                <li> Mumbai </li>
            </ul>
        </div>
        <div class="footer-middle">
            <h3>Quick Links</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
              
            </ul>
        </div>
        <div class="footer-right">
            <h3>Contact Us</h3>
            <p>Email: contact@example.com</p>
            <p>Phone: +123-456-7890</p>
            <div class="social-icons">
            <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2023 Your Company Name. All Rights Reserved.</p>
    </div></div>
    </>

  )
}

export default Footer