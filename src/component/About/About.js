// import './About.css'


// function About() {
//     return(
//         <>
//             <div>
//                 <div className='about-h'> About Us </div><br />
            
//                <ul>
//                    <div className='intro'>Introduction</div>

//                    <li className='li'> 
//                      hi this is me
//                     </li>
//               </ul>

//           </div>

//     </>
//     )
// }

// export default About

import React from 'react'
import './About.css'
function About() {
  return (
    <>
     <header>
    <h1 className='about-h'>About Us</h1>
  </header>
  <main>
    <div class="about">
    <h2>Who We Are</h2>
    <p>Welcome to TripCanvas!! We are passionate travelers and adventurers dedicated to making your travel experiences unforgettable. Our mission is to inspire and assist fellow globetrotters in exploring the world with excitement and ease.</p>
  </div>
  <div class="story">
    <h2>Our Story</h2>
    <p>TripCanvas was born out of a shared love for discovering new cultures, breathtaking landscapes, and unique experiences. It all started with a group of friends who realized the transformative power of travel and decided to create a platform that would connect travelers with remarkable destinations and enriching journeys.</p>
  </div>
  <div class="team">
    <h2>Happy Customers</h2>
    <div class="team-member">
      <h3>Emily Turner</h3>
      <p>Best Experience Ever, Worth Every Penny!!!!!!</p>
    </div>
    <div class="team-member">
      <h3>David Patel</h3>
      <p>Going to use this website from now on.</p>
    </div>
  </div>
    </main>
    </>
  )
}

export default About