import "./PlanetStats.css";

function PlanetStats({ planet }) {
  return (
    <div className="planet-stats">
      <div className="stat-card">
        <span className="stat-title">ROTATION TIME</span>
        <h2 className="stat-value">{planet.rotation}</h2>
      </div>

      <div className="stat-card">
        <span className="stat-title">REVOLUTION TIME</span>
        <h2 className="stat-value">{planet.revolution}</h2>
      </div>

      <div className="stat-card">
        <span className="stat-title">RADIUS</span>
        <h2 className="stat-value">{planet.radius}</h2>
      </div>

      <div className="stat-card">
        <span className="stat-title">AVERAGE TEMP.</span>
        <h2 className="stat-value">{planet.temperature}</h2>
      </div>
    </div>
  );
}

export default PlanetStats;
