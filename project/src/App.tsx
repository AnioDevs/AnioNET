import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AboutUsPage from './pages/AboutUsPage';
import AocPage from './pages/AocPage';
import RegimentsPage from './pages/RegimentsPage';
import EnlistPage from './pages/EnlistPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminBlogPage from './pages/AdminBlogPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-navy-900 text-white">
        <Header />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/aoc" element={<AocPage />} />
            <Route path="/regiments" element={<RegimentsPage />} />
            <Route path="/enlist" element={<EnlistPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/admin/blog" element={<AdminBlogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;