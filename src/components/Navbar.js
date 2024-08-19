// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <NavLogo>My Portfolio</NavLogo>
      <NavToggle onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </NavToggle>
      <NavMenu isMobileMenuOpen={isMobileMenuOpen}>
        <NavItem>
          <StyledLink to="/" onClick={toggleMobileMenu}>Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/about" onClick={toggleMobileMenu}>About</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/projects" onClick={toggleMobileMenu}>Projects</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/blogs" onClick={toggleMobileMenu}>Blogs</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/contact" onClick={toggleMobileMenu}>Contact</StyledLink>
        </NavItem>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  height: 60px;
  background: linear-gradient(90deg, rgba(255, 87, 34, 1) 0%, rgba(255, 193, 7, 1) 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease;
`;

const NavLogo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  transition: max-height 0.3s ease;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background: rgba(0, 0, 0, 0.8);
    width: 100%;
    max-height: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? '400px' : '0')};
    transition: max-height 0.5s ease-out;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover, &.active {
    background: rgba(255, 255, 255, 0.2);
    color: #f39c12;
  }
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.8rem;
  color: #fff;

  @media (max-width: 768px) {
    display: block;
  }
`;
