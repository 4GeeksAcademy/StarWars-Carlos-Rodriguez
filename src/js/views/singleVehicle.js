import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SingleVehicle = () => {
  const { id } = useParams();
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.openSingleVehicle(id);
  }, [id, actions]);

  const vehicle = store.singleVehicle || {};

  return (
    <div
      className="card mt-4 mx-auto"
      style={{ maxWidth: "400px", background: "#000", color: "#fff" }}
    >
      <img
        className="card-img-top"
        src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
        alt={vehicle.name}
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <div className="card-body">
        <h5 className="card-title">{vehicle.name}</h5>
        <p className="card-text">Model: {vehicle.model}</p>
        <p className="card-text">Manufacturer: {vehicle.manufacturer}</p>
        <p className="card-text">Class: {vehicle.vehicle_class}</p>
        <p className="card-text">Passengers: {vehicle.passengers}</p>
        <p className="card-text">Crew: {vehicle.crew}</p>
        <p className="card-text">Length: {vehicle.length}</p>
      </div>
      <div className="card-body text-center">
        <a href="/" className="btn btn-warning">
          Back to Vehicles
        </a>
      </div>
    </div>
  );
};

export default SingleVehicle;
