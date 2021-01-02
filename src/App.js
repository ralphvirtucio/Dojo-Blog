import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Home from './components/Home';
import NavBar from './components/NavBar';

const App = () => {
  const Container = styled.div`
    text-align: center;
  `;

  const Content = styled.div``;

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
