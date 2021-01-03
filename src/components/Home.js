import { useState } from 'react';
import styled from 'styled-components';

const BlogPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;
  :hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

const BlogHeader = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 8px;
`;

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map(blog => (
        <BlogPreview key={blog.id}>
          <BlogHeader>{blog.title}</BlogHeader>
          <p>Written by {blog.author}</p>
        </BlogPreview>
      ))}
    </div>
  );
};

export default Home;
