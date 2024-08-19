import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import GlobalStyles from './GlobalStyles';
import CustomCursor from './components/CustomCursor'; // Import the CustomCursor component

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <CustomCursor /> {/* Add the CustomCursor component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
