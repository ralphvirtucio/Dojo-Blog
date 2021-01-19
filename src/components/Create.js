import React from 'react';
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
  return (
    <Container>
      <CreateHeader>Add a New Blog</CreateHeader>
      <form>
        <CreateLabel>Blog Title</CreateLabel>
        <CreateInput type="text" required />
        <CreateLabel>Blog Body</CreateLabel>
        <CreateTextArea required></CreateTextArea>
        <CreateLabel>Blog Author</CreateLabel>
        <CreateSelect>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </CreateSelect>
        <CreateButton>Add Blog</CreateButton>
      </form>
    </Container>
  );
};

export default Create;
