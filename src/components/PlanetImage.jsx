import "./PlanetImage.css";

function PlanetImage({ planet, currentTab }) {
  const getPlanetImage = () => {
    if (currentTab === "structure") {
      return planet.images.internal;
    }
    return planet.images.planet;
  };

  return (
    <div className="planet-image-container">
      <img
        src={getPlanetImage()}
        alt={planet.name}
        className="main-planet-img"
      />

      {currentTab === "geology" && (
        <img
          src={planet.images.geology}
          alt={`${planet.name} surface`}
          className="geology-img"
        />
      )}
    </div>
  );
}

export default PlanetImage;
