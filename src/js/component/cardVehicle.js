import React from "react";
import { Link } from "react-router-dom";

export const CardVehicle = (props) => {
  return (
    <div
      className="card m-2 text-center"
      style={{ minWidth: "18rem", maxWidth: "18rem" }}
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/vehicles/${props.id}.jpg`}
        className="card-img-top img-fluid"
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.name}</h5>
        {props.details && (
          <div>
            <p>Model: {props.details.model}</p>
            <p>Vehicle Class: {props.details.vehicle_class}</p>
          </div>
        )}
        <div className="mt-auto d-flex flex-column align-items-center">
          <Link
            to={`/singleVehicle/${props.id}`}
            className="btn btn-warning text-dark"
          >
            Learn More!
          </Link>
          <button
            onClick={() => props.actions.addToFavorites({ ...props.details, id: props.id, category: "vehicle"  })}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
