import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Books from './Books';
import Categories from './Categories';

function Nav() {
  return (
    <>
      <header>
        <h1>Bookstore CMS</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Categories">Categories</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default Nav;
