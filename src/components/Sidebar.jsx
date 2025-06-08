import { NavLink } from 'react-router-dom';

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? 'show' : ''}`} onClick={onClose}></div>

      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={onClose}>×</button>
        <nav className="sidebar-nav">
          <NavLink to="/" className="nav-link" onClick={onClose}>Home</NavLink>
          <NavLink to="/music" className="nav-link" onClick={onClose}>Music</NavLink>
        </nav>
      </div>
    </>
  );
}