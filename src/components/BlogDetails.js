import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
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

const BlogDetailsButton = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
`;

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <BlogDetailsHeader>{blog.title}</BlogDetailsHeader>
          <BlogDetailsBody>Written by {blog.author}</BlogDetailsBody>
          <div>{blog.body}</div>
          <BlogDetailsButton onClick={handleDelete}>Delete</BlogDetailsButton>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
