import "./PlanetContent.css";

function PlanetContent({ planet, currentTab, setCurrentTab }) {
  const tabData = planet[currentTab];

  return (
    <div className="planet-content">
      <div className="planet-text">
        <h1 className="planet-title">{planet.name}</h1>
        <p className="planet-description">{tabData.content}</p>
        <div className="planet-source">
          <span>Source : </span>
          <a href={tabData.source} target="_blank" rel="noreferrer">
            Wikipedia{" "}
            <img src="/assets/icon-source (1).svg" alt="source icon" />
          </a>
        </div>
      </div>

      <div className="planet-tabs">
        <button
          className={`tab-btn ${currentTab === "overview" ? "active" : ""}`}
          style={{
            backgroundColor:
              currentTab === "overview" ? planet.color : "transparent",
          }}
          onClick={() => setCurrentTab("overview")}
        >
          <span className="tab-number">01</span> OVERVIEW
        </button>

        <button
          className={`tab-btn ${currentTab === "structure" ? "active" : ""}`}
          style={{
            backgroundColor:
              currentTab === "structure" ? planet.color : "transparent",
          }}
          onClick={() => setCurrentTab("structure")}
        >
          <span className="tab-number">02</span> INTERNAL STRUCTURE
        </button>

        <button
          className={`tab-btn ${currentTab === "geology" ? "active" : ""}`}
          style={{
            backgroundColor:
              currentTab === "geology" ? planet.color : "transparent",
          }}
          onClick={() => setCurrentTab("geology")}
        >
          <span className="tab-number">03</span> SURFACE GEOLOGY
        </button>
      </div>
    </div>
  );
}

export default PlanetContent;
