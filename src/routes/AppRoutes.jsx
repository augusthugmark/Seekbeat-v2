import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MusicPage from './pages/musicPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MusicPage />} />
    </Routes>
  );
};

export default AppRoutes;