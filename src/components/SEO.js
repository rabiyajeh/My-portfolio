// src/components/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title} | MyPortfolio</title>
    <meta name="description" content={description} />
    <meta name="keywords" content="portfolio, web developer, projects, blogs, contact" />
    <meta name="author" content="Your Name" />
    {/* Add Open Graph and Twitter Card meta tags */}
  </Helmet>
);

export default SEO;
