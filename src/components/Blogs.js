import React from 'react';
import styled from 'styled-components';
import blogsData from '../data/blogs';

const Blogs = () => {
  return (
    <BlogsSection>
      <Header>
        <h2>My Blogs</h2>
      </Header>
      <BlogGrid>
        {blogsData.map((blog) => (
          <BlogCard key={blog.id}>
            <ImageContainer>
              <img src={blog.image} alt={blog.title} />
              <Overlay>
                <ReadMore href={blog.url} target="_blank" rel="noopener noreferrer">Read More</ReadMore>
              </Overlay>
            </ImageContainer>
            <BlogInfo>
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <Tags>
                {blog.tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </Tags>
            </BlogInfo>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogsSection>
  );
};

export default Blogs;

const BlogsSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #f3f4f6, #ffffff);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #333;
    position: relative;

    &::after {
      content: '';
      display: block;
      width: 100px;
      height: 4px;
      background: #007bff;
      position: absolute;
      left: 50%;
      bottom: -10px;
      transform: translateX(-50%);
      border-radius: 2px;
    }
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const BlogCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: translateY(-15px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ImageContainer = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: opacity 0.3s;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const ReadMore = styled.a`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 10px 20px;
  background: #007bff;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
  }
`;

const BlogInfo = styled.div`
  padding: 20px;
  text-align: center;

  h3 {
    margin-bottom: 15px;
    font-size: 1.6rem;
    font-weight: 600;
    color: #333;
    transition: color 0.3s;

    &:hover {
      color: #007bff;
    }
  }

  p {
    font-size: 15px;
    color: #666;
    line-height: 1.6;
  }
`;

const Tags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  justify-content: center;
`;

const Tag = styled.span`
  background: #e0e0e0;
  color: #333;
  border-radius: 20px;
  padding: 5px 12px;
  font-size: 12px;
  font-weight: 500;
  transition: background 0.3s, color 0.3s;

  &:hover {
    background: #007bff;
    color: #fff;
  }
`;
