import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className="card">
      <div className="card-body">
        <button
          onClick={onClose}
          class="btn btn-primary position-absolute top-0 end-0"
          type="button"
        >
          x
        </button>
        <Link to={`/ciudad/${id}`} className="link">
          <h5 className="card-title mt-3 fw-bolder">{name}</h5>

          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p class="fw-bolder">Min</p>
              <p class="fw-bolder">{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p class="fw-bolder">Max</p>
              <p class="fw-bolder">{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img
                className="iconoClima"
                src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
                width="80"
                height="80"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
