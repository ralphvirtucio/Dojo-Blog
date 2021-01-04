import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import NavBar from './components/NavBar';

const Container = styled.div`
  text-align: center;
`;

const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
  text-align: left;
`;

const App = () => {
  return (
    <Container>
      <NavBar />
      <Content>
        <Home />
      </Content>
    </Container>
  );
};

export default App;
