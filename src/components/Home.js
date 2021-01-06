import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: 'My new website',
      body: 'This is my website',
      author: 'mario',
      id: 1,
    },
    {
      title: 'Welcome party!',
      body: 'This is my party',
      author: 'yoshi',
      id: 2,
    },
    {
      title: 'Web dev top tips',
      body: 'Here are some tips',
      author: 'mario',
      id: 3,
    },
  ]);

  const handleDelete = id => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log('use effect run');
    console.log(blogs);
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      {/* <BlogList
        blogs={blogs.filter(blog => blog.author === 'mario')}
        title="Mario Blogs!"
      /> */}
    </div>
  );
};

export default Home;
