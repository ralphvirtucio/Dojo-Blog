import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 5px solid #f2f2f2;
`;

const NavHeader = styled.h1`
  color: #f1356d;
`;

const NavLink = styled.div`
  margin-left: auto;
`;

const HomeLink = styled.span`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  :hover {
    color: #f1356d;
  }
`;

const CreateLink = styled.span`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
  :hover {
    color: #f1356d;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <NavHeader>The Dojo Blog</NavHeader>
      <NavLink>
        <HomeLink>
          <Link to="/">Home</Link>
        </HomeLink>
        <CreateLink>
          <Link to="/create">New Blog</Link>
        </CreateLink>
      </NavLink>
    </Nav>
  );
};

export default NavBar;
