import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;