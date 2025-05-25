import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Bienvenido</h1>
      <p>Esta es la página inicial.</p>
      <Link to="/dashboard" className="text-blue-500 underline">
        Ir al Dashboard
      </Link>
    </div>
  );
};

export default HomePage;
