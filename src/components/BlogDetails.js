import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../hooks/useFetch';

const BlogDetailsHeader = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 10px;
`;

const BlogDetailsBody = styled.div`
  margin: 20px 0;
`;

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <BlogDetailsHeader>{blog.title}</BlogDetailsHeader>
          <BlogDetailsBody>Written by {blog.author}</BlogDetailsBody>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
