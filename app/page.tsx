'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Head from 'next/head'

const HomePage = lazy(() => import('./view/home'));
const Header = lazy(() => import('./header'));
const Navbar = lazy(() => import('./navbar'));
const Footer = lazy(() => import('./footer'));

export default function Home() {
  return (
    <>
      <Head>
        <meta name='description' content='assignment' />
        <meta name='keywords' content='Reactjs,NextJS,e-com' />
        <meta name='author' content='Mohd Adnan' />
        <meta name='viewport' content='width=device-width,initial-scale=1.0' />
      </Head>
      <Router>
        <Header />
        <Navbar />
        <Routes >
          <Route path="/" exact element={<HomePage />} />
          <Route path="/home" exact element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
