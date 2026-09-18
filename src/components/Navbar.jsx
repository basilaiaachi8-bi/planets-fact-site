import { useState } from "react";
import "./Navbar.css";

function Navbar({ planets, currentPlanet, setCurrentPlanet }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSelectPlanet = (planetName) => {
    setCurrentPlanet(planetName);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">THE PLANETS</div>

      <button
        className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {planets.map((planet) => (
            <li
              key={planet.name}
              className={currentPlanet === planet.name ? "active" : ""}
              onClick={() => handleSelectPlanet(planet.name)}
            >
              <span
                className="planet-dot"
                style={{ backgroundColor: planet.color }}
              ></span>
              {planet.name}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
