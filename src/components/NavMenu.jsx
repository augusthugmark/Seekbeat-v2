import { NavLink } from 'react-router-dom';

export default function NavMenu() {
  return (
    <nav className="nav-menu">
      <NavLink to="/" className="nav-link">Home</NavLink>
      <NavLink to="/music" className="nav-link">Music</NavLink>
    </nav>
  );
}