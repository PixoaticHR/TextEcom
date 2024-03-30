'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
const HomePage = lazy(() => import('./view/home'));
const Header = lazy(() => import('./header'));
const Navbar = lazy(() => import('./navbar'));
const Footer = lazy(() => import('./footer'));

export default function Home() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes >
        <Route path="/" exact element={<HomePage />} />
        <Route path="/home" exact element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
