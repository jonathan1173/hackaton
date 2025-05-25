import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-800 text-white p-4 flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default Navbar;
