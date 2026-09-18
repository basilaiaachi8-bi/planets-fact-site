import { useState } from "react";
import planetsData from "./data.json";
import Navbar from "./components/Navbar";
import PlanetImage from "./components/PlanetImage";
import PlanetContent from "./components/PlanetContent";
import PlanetStats from "./components/PlanetStats";
import "./App.css";

function App() {
  const [planets] = useState(planetsData);
  const [currentPlanetName, setCurrentPlanetName] = useState("Mercury");
  const [currentTab, setCurrentTab] = useState("overview");

  const currentPlanet =
    planets.find(
      (p) => p.name.toLowerCase() === currentPlanetName.toLowerCase(),
    ) || planets[0];

  return (
    <div className="app-container">
      <Navbar
        planets={planets}
        currentPlanet={currentPlanet.name}
        setCurrentPlanet={(name) => {
          setCurrentPlanetName(name);
          setCurrentTab("overview");
        }}
      />

      <main className="main-content">
        <div className="planet-display-grid">
          <PlanetImage planet={currentPlanet} currentTab={currentTab} />
          <PlanetContent
            planet={currentPlanet}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
        </div>

        <PlanetStats planet={currentPlanet} />
      </main>
    </div>
  );
}

export default App;
