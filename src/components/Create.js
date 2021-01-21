import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const CreateLabel = styled.label`
  text-align: left;
  display: block;
`;

const CreateHeader = styled.h2`
  font-size: 20px;
  color: #f1356d;
  margin-bottom: 30px;
`;

const CreateInput = styled.input`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const CreateTextArea = styled.textarea`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const CreateSelect = styled.select`
  width: 100%;
  padding: 6px 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  box-sizing: border-box;
  display: block;
`;

const CreateButton = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [pending, setPending] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();

    const blog = { title, body, author };

    setPending(true);

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('new blog added');
      setPending(false);
      history.push('/');
    });
  };

  return (
    <Container>
      <CreateHeader>Add a New Blog</CreateHeader>
      <form onSubmit={handleSubmit}>
        <CreateLabel>Blog Title</CreateLabel>
        <CreateInput
          type="text"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}
        />
        <CreateLabel>Blog Body</CreateLabel>
        <CreateTextArea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></CreateTextArea>
        <CreateLabel>Blog Author</CreateLabel>
        <CreateSelect value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
          <option value="Chris">Chris</option>
        </CreateSelect>
        {!pending && <CreateButton>Add Blog</CreateButton>}
        {pending && <CreateButton disabled>Adding Blog...</CreateButton>}
      </form>
    </Container>
  );
};

export default Create;
