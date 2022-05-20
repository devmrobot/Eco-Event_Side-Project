import React from "react";
import { useEffect, useState } from "react";
import ReactMapGL from "react-map-gl";
import "../styles/map.scss";
//import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 48.856614,
    longitude: 2.3522219,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });

  return (
    <div className="map">
      <ReactMapGL
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...viewport}
        mapStyle="mapbox://styles/guillaumepinot/cl3ek9wk1001714peuaa44r7v"
        onMove={(e) => setViewport(e.viewport)}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
