import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Nav>
      <NavLogo>My Portfolio</NavLogo>
      <NavToggle onClick={toggleMobileMenu}>
        <img
          src={isMobileMenuOpen ? "/close.png" : "/menu.png"}
          alt="Menu Icon"
        />
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

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

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
  animation: ${slideDown} 0.5s ease forwards;
`;

const NavLogo = styled.h1`
  color: #fff;
  font-size: 1.8rem;
  margin: 0;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: 'Roboto', sans-serif;
  animation: ${fadeIn} 1s ease-in-out;
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    right: 0;
    background: rgba(0, 0, 0, 0.9);
    width: 100%;
    height: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'calc(100vh - 60px)' : '0')};
    transform: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)')};
    transition: transform 0.5s ease, height 0.5s ease;
    overflow: hidden;
    flex-direction: column;
    align-items: center;
    z-index: 9999; /* Ensure the menu appears above other elements */
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
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const NavToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    animation: ${fadeIn} 0.5s ease-in-out;

    img {
      width: 30px; /* Adjust the size as needed */
      height: 30px; /* Adjust the size as needed */
    }
  }
`;
