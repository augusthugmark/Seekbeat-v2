import { useState } from 'react';
import NavMenu from './NavMenu';
import Sidebar from './Sidebar';

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Visa NavMenu på desktop */}
      <div className="desktop-nav">
        <NavMenu />
      </div>

      {/* Visa hamburgare på mobil */}
      <button className="hamburger" onClick={() => setIsSidebarOpen(true)}>
        ☰
      </button>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}