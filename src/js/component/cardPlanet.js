import React from "react";
import { Link } from "react-router-dom";

export const CardPlanet = (props) => {
  const getIMG = (planetsId) => {
    return `https://starwars-visualguide.com/assets/img/planets/${
      planetsId === "1" ? "8" : planetsId
    }.jpg`;
  };

  return (
    <div
      className="card m-2 text-center"
      style={{ minWidth: "18rem", maxWidth: "18rem" }}
    >
      <img
        src={getIMG(props.id)}
        className="card-img-top img-fluid"
        alt="..."
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{props.name}</h5>
        {props.details && (
          <div>
            <p>Population: {props.details.population}</p>
            <p>Terrain: {props.details.terrain}</p>
          </div>
        )}
        <div className="mt-auto d-flex flex-column align-items-center">
          <Link
            to={`/singlePlanet/${props.id}`}
            className="btn btn-warning text-dark"
          >
            Learn More!
          </Link>
          <button
            onClick={() =>
              props.actions.addToFavorites({ ...props.details, id: props.id, category: "planet"  })
            }
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
