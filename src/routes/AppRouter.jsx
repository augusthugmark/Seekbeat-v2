import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MusicPage from '../pages/MusicPage';
import Layout from '../components/Layout';

export default function AppRouter() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music" element={<MusicPage />} />
      </Routes>
    </Layout>
  );
}