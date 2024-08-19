import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      follower.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const handleMouseDown = () => {
      cursor.classList.add('click');
      follower.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      follower.classList.remove('click');
    };

    const handleMouseEnter = () => {
      cursor.classList.remove('hidden');
      follower.classList.remove('hidden');
    };

    const handleMouseLeave = () => {
      cursor.classList.add('hidden');
      follower.classList.add('hidden');
    };

    const handleHover = () => {
      cursor.classList.add('hover');
      follower.classList.add('hover');
    };

    const handleHoverOut = () => {
      cursor.classList.remove('hover');
      follower.classList.remove('hover');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const hoverables = document.querySelectorAll('a, button, [data-hoverable]');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);

      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <Follower ref={followerRef} />
    </>
  );
};

export default CustomCursor;

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background-color: #f39c12;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate3d(0, 0, 0);
  transition: transform 0.1s ease, width 0.2s ease, height 0.2s ease;

  &.click {
    transform: scale(0.8);
  }

  &.hover {
    width: 20px;
    height: 20px;
    background-color: #e67e22;
  }

  &.hidden {
    opacity: 0;
  }
`;

const Follower = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  background-color: rgba(243, 156, 18, 0.2);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9998;
  transform: translate3d(0, 0, 0);
  transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease;

  &.click {
    transform: scale(1.2);
  }

  &.hover {
    width: 50px;
    height: 50px;
    background-color: rgba(230, 126, 34, 0.3);
  }

  &.hidden {
    opacity: 0;
  }
`;
