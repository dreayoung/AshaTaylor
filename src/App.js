import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Sidebar from './components/SideBar';
import About from './pages/AboutPage/about';
import Home from './pages/HomePage/home';
import Blog from './pages/BlogPage/blog';
import BlogArticle from './pages/BlogArticle/blogArticle';
import PortfolioPage from './pages/PortfolioPage/portfolio';

// import { db } from './firebase-config';
// import { collection, getDocs } from '@firebase/firestore';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="blogs/:id" element={<BlogArticle />} />
        <Route path="about" element={<About />} />
        <Route path="portfolio" element={<PortfolioPage />} />
      </Routes>
    </>
  );
}

export default App;
