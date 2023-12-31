import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Resultado } from './pages/Resultado';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resultado" element={<Resultado />} />
    </Routes>
  );
};

