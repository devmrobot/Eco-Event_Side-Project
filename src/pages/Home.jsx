import React from "react";
import "../styles/home.scss";
import Map from "../components/Map";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div>
          <h1>Echo Event</h1>
        </div>
        <h2>Petites Annonces d'Actions Ecolos</h2>
      </div>
      <Map />
    </div>
  );
};

export default Home;
