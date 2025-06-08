import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="app-header">
      <h1>Seekbeat</h1>
      <nav>
        <Link to="/">Music</Link>
        {/* fler länkar senare */}
      </nav>
    </header>
  );
};

export default Header;