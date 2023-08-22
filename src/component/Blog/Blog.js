import React, { useState } from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';

function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Exploring the Serene Beaches of Bali",
      date: "August 15, 2023",
      content: "Bali, the island of gods, offers breathtaking beaches...",
    },
    {
      id: 2,
      title: "Adventures in the Heart of the Amazon Rainforest",
      date: "July 28, 2023",
      content: "Embarking on a journey into the Amazon rainforest is...",
    },
    // Add more blog posts here
  ];

  const [themeColor, setThemeColor] = useState('white');

  const [dark, setdark] = useState(false)

  // Function to change theme color
  const changeThemeColor = (color) => {

    if (dark) { setdark(false) }
    else (setdark(true))
    setThemeColor(color);
  };


  return (
    <div className={`app ${themeColor} d-flex`}>
      <div className="NaVbar">
        <Link to="/home" className='l'> <i class="bi bi-house-door-fill cursor-pointer" /> </Link><br />

        <Link to="/about" className='l'> <i class="bi bi-file-person-fill cursor-pointer" /> </Link><br />

        <Link to="/Blog" className='l'> <i class="bi bi-person-lines-fill cursor-pointer" /> </Link><br />

        {dark ? <i onClick={() => changeThemeColor('white')} class="bi bi-brightness-high-fill cursor-pointer" ></i> :
          <i onClick={() => changeThemeColor('black')} class="bi bi-moon cursor-pointer"></i>

        }
      </div>
      <div className="App">
        <header className="ah">
          <h1>Travel Blog</h1>
        </header>
        <main className="bmain">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <p className="post-date">{post.date}</p>
              <p>{post.content}</p>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Blog;