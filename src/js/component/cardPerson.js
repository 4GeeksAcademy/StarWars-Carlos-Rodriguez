import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardPerson = (props) => {
  const { store, actions } = useContext(Context);

  const getIMG = (personId) => {
    return `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;
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
            <p>Gender: {props.details.gender}</p>
            <p>Hair Color: {props.details.hair_color}</p>
            <p>Eye Color: {props.details.eye_color}</p>
          </div>
        )}
        <div className="mt-auto d-flex flex-column align-items-center">
          <Link
            to={`/singlePerson/${props.id}`}
            className="btn btn-warning text-dark"
          >
            Learn More!
          </Link>
          <button
            onClick={() => actions.addToFavorites({ ...props.details, id: props.id, category: "person" })}
          >
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
