import React from 'react';
import './Blog.css';

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

  return (
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
  );
}

export default Blog;