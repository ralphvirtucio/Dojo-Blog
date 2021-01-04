import React, { useState, useEffect } from 'react';
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

const Link = styled.a`
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
        <Link href="/">Home</Link>
        <Link
          href="/create"
          style={{
            color: 'white',
            backgroundColor: '#f1356d',
            borderRadius: '8px',
          }}
        >
          New Blog
        </Link>
      </NavLink>
    </Nav>
  );
};

export default NavBar;
