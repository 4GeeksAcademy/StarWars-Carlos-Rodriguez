import React from "react";
import { Link } from "react-router-dom";

export const CardVehicle = (props) => {
  return (
    <div
      className="card"
      style={{
        minWidth: "18rem",
        marginBottom: "30px",
        marginLeft: "10px",
        marginRight: "10px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${props.uid}.jpg`}
        className="card-img-top"
        alt="..."
      />
      <div
        className="card-body"
        style={{ flex: "1", display: "flex", flexDirection: "column" }}
      >
        <div>
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Model: {props.model}</p>
        </div>
        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            className="btn btn-warning text-dark"
            style={{ marginRight: "auto" }}
          >
            Learn More!
          </a>
          <button>
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
