import React, { useState } from 'react';
import styled from 'styled-components';
import { FaLaptopCode, FaMobileAlt, FaTh } from 'react-icons/fa';
import { motion } from 'framer-motion';
import projectsData from '../data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === filter);

  return (
    <ProjectsSection>
      <h2>My Projects</h2>
      <FilterMenu>
        <FilterButton onClick={() => setFilter('All')}>
          <FaTh /> All
        </FilterButton>
        <FilterButton onClick={() => setFilter('Web Development')}>
          <FaLaptopCode /> Web Development
        </FilterButton>
        <FilterButton onClick={() => setFilter('Mobile Apps')}>
          <FaMobileAlt /> Mobile Apps
        </FilterButton>
      </FilterMenu>
      <ProjectGrid>
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 50 }}
          >
            <ProjectCard href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectLink>View Project</ProjectLink>
              </ProjectInfo>
            </ProjectCard>
          </motion.div>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};

export default Projects;

const ProjectsSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(to bottom, #f9f9f9, #e2e2e2);
  font-family: 'Poppins', sans-serif;
  overflow-y: auto; /* Enable vertical scrolling */
  height: 100vh; /* Full viewport height to enable scrolling if content overflows */

  h2 {
    text-align: center;
    margin-bottom: 30px;
    font-size: 2.5rem;
    color: #333;
    font-weight: 700;
  }
`;

const FilterMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  gap: 20px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f39c12;
    transform: scale(1.05);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
  overflow-y: auto; /* Ensure overflow is handled for scrolling */
`;

const ProjectCard = styled.a`
  display: block;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    ${ProjectCard}:hover & {
      transform: scale(1.1);
    }
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }
`;

const ProjectLink = styled.span`
  display: inline-block;
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #f39c12;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #e67e22;
    transform: scale(1.05);
  }
`;
