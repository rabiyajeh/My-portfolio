import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AnimatedBackground from './AnimatedBackground';

const Home = () => {
  return (
    <HomeSection>
      <AnimatedBackground />
      <BackgroundOverlay />
      <Content>
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          Rabbiya Jehangir
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Web Developer | AI Enthusiast
        </motion.h2>
        <Link to="/projects"> {/* Use Link component for routing */}
          <CTAButton>Explore My Work</CTAButton>
        </Link>
      </Content>
    </HomeSection>
  );
};

export default Home;

const HomeSection = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  z-index: 1; /* Ensure the content is above the animated background */
`;

const CTAButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #f39c12;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #e67e22;
  }
`;
