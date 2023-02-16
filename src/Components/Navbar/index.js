import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  width:100%;
  background-color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding-right: 3rem;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled.a`
  color: #ff00ff;
  text-decoration: none;
  font-size: 0.7rem;

  &:hover {

    color:#fff
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo href="/">My Logo</Logo>
      <Menu>
        <MenuItem>
          <NavLink href="/">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="/about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="/services">Services</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink href="/contact">Contact</NavLink>
        </MenuItem>
      </Menu>
    </Nav>
  );
}

export default Navbar;
