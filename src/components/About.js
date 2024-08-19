import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';

const About = () => {
  return (
    <AboutSection id="about">
      <ParticlesWrapper>
        <Particles
          id="particles-js"
          options={{
            background: {
              color: {
                value: "#f5f5f5",
              },
            },
            particles: {
              color: {
                value: "#3498db",
              },
              links: {
                color: "#3498db",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 4,
              },
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  opacity: 0.6,
                  size: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
              },
            },
            detectRetina: true,
          }}
        />
      </ParticlesWrapper>
      <Content>
        <ImageContainer>
          <ProfileImage src="/images/about.jpeg" alt="Profile" />
        </ImageContainer>
        <TextContainer>
          <motion.h2
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            I’m a passionate Web Developer and AI Enthusiast with experience in creating dynamic and interactive web applications. My work revolves around blending modern technologies with innovative solutions to build user-centric products.
          </motion.p>
          <ButtonContainer>
            <DownloadCV href="/Rabbiya-Jehangir-CV.pdf" download>
              <DownloadIcon src="/images/downloadbtn.png" alt="Download CV" />
              Download CV
            </DownloadCV>
          </ButtonContainer>
          <SocialLinks>
            <SocialLink href="https://www.linkedin.com/in/rabbiya-jehangir-8b0a831ab" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="/images/linki.png" alt="LinkedIn" />
            </SocialLink>
            <SocialLink href="https://github.com/rabiyajeh" target="_blank" rel="noopener noreferrer">
              <SocialIcon src="/images/git.png" alt="GitHub" />
            </SocialLink>
            <SocialLink href="mailto:rabiii4046@gmail.com">
              <SocialIcon src="/images/gm.png" alt="Email" />
            </SocialLink>
          </SocialLinks>
        </TextContainer>
      </Content>
      <Skills>
        <motion.h2
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>
        <SkillBar>
          <SkillIcon><SkillImage src="/images/react.jpg" alt="React.js" /></SkillIcon>
          <SkillName>React.js</SkillName>
          <SkillLevel
            initial={{ width: '0%' }}
            animate={{ width: '90%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </SkillBar>
        <SkillBar>
          <SkillIcon><SkillImage src="/images/laravel.jpg" alt="Laravel" /></SkillIcon>
          <SkillName>Laravel</SkillName>
          <SkillLevel
            initial={{ width: '0%' }}
            animate={{ width: '85%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </SkillBar>
        <SkillBar>
          <SkillIcon><SkillImage src="/images/python.jpg" alt="Python" /></SkillIcon>
          <SkillName>Python</SkillName>
          <SkillLevel
            initial={{ width: '0%' }}
            animate={{ width: '80%' }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </SkillBar>
      </Skills>
    </AboutSection>
  );
};

export default About;

// Styled components
const AboutSection = styled.section`
  padding: 80px 20px;
  position: relative;
  overflow-y: auto;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.1)), url('/background-pattern.png'); /* Subtle pattern overlay */
  background-size: cover;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParticlesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  text-align: center;
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 220px;
  height: 220px;
  object-fit: cover;
  box-shadow: 0 20px 40px rgba(255, 105, 180, 0.6); /* Pink shadow for a modern touch */
  border: 8px solid #fff;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.6);
  }
`;

const TextContainer = styled.div`
  flex: 1;
  max-width: 700px;

  h2 {
    font-size: 3rem;
    color: #e74c3c;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.4rem;
    color: #333;
    line-height: 1.8;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Skills = styled.div`
  margin-top: 50px;
  text-align: center;

  h2 {
    font-size: 3rem;
    color: #e74c3c;
    margin-bottom: 20px;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const SkillBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  max-width: 700px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  padding: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  flex: 0 0 50px;
  text-align: center;
`;

const SkillImage = styled.img`
  width: 40px;
  height: 40px;
`;

const SkillName = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  color: #333;
  padding: 0 20px;
`;

const SkillLevel = styled(motion.div)`
  flex: 1;
  background-color: #3498db;
  height: 10px;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const DownloadCV = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #e74c3c;
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

const DownloadIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  width: 20px;
  height: 20px;
`;
