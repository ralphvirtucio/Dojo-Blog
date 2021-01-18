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
  :hover {
    color: #f1356d;
  }
`;

const styles = {
  marginLeft: '16px',
  textDecoration: 'none',
  padding: '6px',
  fontSize: '24px',
  color: 'black',
};

const NavBar = () => {
  return (
    <Nav>
      <NavHeader>The Dojo Blog</NavHeader>
      <NavLink>
        <Link to="/" style={styles}>
          Home
        </Link>
        <Link style={styles} to="/create">
          New Blog
        </Link>
      </NavLink>
    </Nav>
  );
};

export default NavBar;
