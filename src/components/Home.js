import { useState } from 'react';
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter(blog => blog.author === 'mario')}
        title="Mario Blogs!"
      />
    </div>
  );
};

export default Home;
