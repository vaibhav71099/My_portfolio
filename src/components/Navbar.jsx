import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar fixed-top navbar-glass navbar-enter">
      <div className="container py-2">
        <a className="navbar-brand brand-mark fw-bold fs-3" href="#" onClick={closeMenu}>
          VS
        </a>

        <button
          className={`navbar-toggler-custom ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="toggler-line line-top"></span>
          <span className="toggler-line line-middle"></span>
          <span className="toggler-line line-bottom"></span>
        </button>

        <div className={`navbar-collapse-custom ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav-custom">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={closeMenu}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeMenu}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#experience" onClick={closeMenu}>Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={closeMenu}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education" onClick={closeMenu}>Education</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
