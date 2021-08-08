import React from "react";
import { useHistory } from "react-router-dom";
import "./ciudad.css";

export default function Ciudad({ city }) {
  const history = useHistory();
  return (
    <div class="text-center details">
      <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div class="fw-bolder">Temperatura: {city.temp} ºC</div>
          <div class="fw-bolder">Clima: {city.weather}</div>
          <div class="fw-bolder">Viento: {city.wind} km/h</div>
          <div class="fw-bolder">Cantidad de nubes: {city.clouds}</div>
          <div class="fw-bolder">Latitud: {city.latitud}º</div>
          <div class="fw-bolder">Longitud: {city.longitud}º</div>
        </div>
      </div>

      <button onClick={() => history.push("/")} class="btn btn-primary">
        Volver
      </button>
    </div>
  );
}
