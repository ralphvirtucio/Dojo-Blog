import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Create from './components/Create';
// ? npx json-server --watch data/database.json --port 8000

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
    <Router>
      <Container>
        <NavBar />
        <Content>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </Content>
      </Container>
    </Router>
  );
};

export default App;
