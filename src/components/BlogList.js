import { Link } from 'react-router-dom';
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

const BlogAuthor = styled.p`
  color: black;
`;

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <BlogPreview key={blog.id}>
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none' }}>
            <BlogHeader>{blog.title}</BlogHeader>
            <BlogAuthor>Written by {blog.author}</BlogAuthor>
          </Link>
        </BlogPreview>
      ))}
    </div>
  );
};

export default BlogList;
